/** Validação determinística da base inicial, com saída de diagnóstico sem dados pessoais. */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import ts from "typescript";

const source = readFileSync(new URL("../data/base.ts", import.meta.url), "utf8");
const startMarker = "export const beneficiarios = ";
const endMarker = "] satisfies Beneficiario[];";
const start = source.indexOf(startMarker) + startMarker.length;
const end = source.indexOf(endMarker, start) + 1;

if (start < startMarker.length || end <= 0) {
  throw new Error("Não foi possível localizar o conjunto de beneficiários em data/base.ts.");
}

function literalValue(node) {
  if (ts.isSatisfiesExpression(node) || ts.isAsExpression(node)) return literalValue(node.expression);
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(literalValue);
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(node.properties.map((property) => {
      if (!ts.isPropertyAssignment(property)) throw new Error("A base contém uma propriedade não suportada pelo validador.");
      const key = ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)
        ? property.name.text
        : undefined;
      if (key === undefined) throw new Error("A base contém uma chave não suportada pelo validador.");
      return [key, literalValue(property.initializer)];
    }));
  }
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  throw new Error("A base contém um valor TypeScript não suportado pelo validador.");
}

const sourceFile = ts.createSourceFile("data/base.ts", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
const baseDeclaration = sourceFile.statements
  .filter(ts.isVariableStatement)
  .flatMap((statement) => statement.declarationList.declarations)
  .find((declaration) => ts.isIdentifier(declaration.name) && declaration.name.text === "beneficiarios");
if (!baseDeclaration?.initializer) throw new Error("A declaração de beneficiarios não foi encontrada.");
const records = literalValue(baseDeclaration.initializer);
const metadata = {
  anoPactuacao: Number(source.match(/anoPactuacao:\s*(\d+)/)?.[1]),
  totalRelatorio: Number(source.match(/["']?totalRelatorio["']?:\s*([0-9.]+)/)?.[1]),
  quantidadeRelatorio: Number(source.match(/["']?quantidadeRelatorio["']?:\s*(\d+)/)?.[1]),
  paginas: Number(source.match(/["']?paginas["']?:\s*(\d+)/)?.[1]),
};

const payments = records.flatMap((record) => record.pagamentos);
const calculatedTotal = payments.reduce((sum, payment) => sum + payment.valor, 0);
const paymentNotes = new Set();
const routeSlugs = new Set();
const issues = [];
const warnings = [];

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .trim();
}

function hash32(value, seed) {
  let hash = seed >>> 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = Math.imul(hash ^ value.charCodeAt(index), 16777619);
  }
  return (hash >>> 0).toString(36);
}

function recordSlug(record) {
  const identity = [
    String(record.cpf || "").replace(/\D/g, ""),
    normalize(record.processoSei),
    normalize(record.curso),
    record.pagamentos
      .map((payment) => normalize(payment.notaPagamento))
      .filter(Boolean)
      .sort()
      .join("|"),
    normalize(record.nome),
  ].join("\u001f");
  return `bg-${hash32(identity, 2166136261)}-${hash32(identity, 2654435769)}`;
}

if (metadata.anoPactuacao !== 2023) issues.push("A base inicial deve estar vinculada à Pactuação 2023.");
if (records.length !== 3826) issues.push(`Esperados 3826 grupos; encontrados ${records.length}.`);
if (payments.length !== 6203) issues.push(`Esperados 6203 pagamentos; encontrados ${payments.length}.`);
if (Math.abs(calculatedTotal - 3479800) > 0.001) issues.push(`Total esperado 3479800; encontrado ${calculatedTotal}.`);
if (metadata.quantidadeRelatorio !== payments.length) issues.push("Quantidade calculada diverge dos metadados.");
if (Math.abs(metadata.totalRelatorio - calculatedTotal) > 0.001) issues.push("Total calculado diverge dos metadados.");
if (metadata.paginas !== 1133) issues.push(`Esperadas 1133 páginas; encontradas ${metadata.paginas}.`);

const expectedByPaymentYear = {
  2023: { count: 399, total: 88610 },
  2024: { count: 2900, total: 1221082 },
  2025: { count: 2551, total: 1856994 },
  2026: { count: 353, total: 313114 },
};
const byPaymentYear = {};
for (const payment of payments) {
  const year = Number(String(payment.dataPagamento).slice(-4));
  byPaymentYear[year] ??= { count: 0, total: 0 };
  byPaymentYear[year].count += 1;
  byPaymentYear[year].total += payment.valor;
}
for (const [year, expected] of Object.entries(expectedByPaymentYear)) {
  const actual = byPaymentYear[year] ?? { count: 0, total: 0 };
  if (actual.count !== expected.count) issues.push(`Ano de pagamento ${year}: esperados ${expected.count} pagamentos; encontrados ${actual.count}.`);
  if (Math.abs(actual.total - expected.total) > 0.001) issues.push(`Ano de pagamento ${year}: esperado ${expected.total}; encontrado ${actual.total}.`);
}

for (const [recordIndex, record] of records.entries()) {
  const slug = recordSlug(record);
  if (routeSlugs.has(slug)) issues.push(`Identificador de rota repetido no grupo ${recordIndex + 1}.`);
  routeSlugs.add(slug);

  if (!record.nome?.trim() || !/^\d{11}$/.test(record.cpf || "")) {
    warnings.push(`Grupo ${recordIndex + 1} possui campos de identidade incompletos.`);
  }
  if (!record.curso?.trim()) issues.push(`Curso ausente no grupo ${recordIndex + 1}.`);
  if (record.quantidadePagamentos !== record.pagamentos.length) {
    issues.push(`Quantidade de pagamentos inconsistente no grupo ${recordIndex + 1}.`);
  }
  const recordTotal = record.pagamentos.reduce((sum, payment) => sum + payment.valor, 0);
  if (Math.abs(recordTotal - record.valorTotalRecebido) > 0.001) {
    issues.push(`Valor total inconsistente no grupo ${recordIndex + 1}.`);
  }
  for (const [paymentIndex, payment] of record.pagamentos.entries()) {
    if (paymentNotes.has(payment.notaPagamento)) issues.push(`Nota de pagamento repetida no grupo ${recordIndex + 1}.`);
    paymentNotes.add(payment.notaPagamento);
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(payment.dataPagamento)) {
      issues.push(`Data inválida no grupo ${recordIndex + 1}, pagamento ${paymentIndex + 1}.`);
    }
    for (const field of ["notaPagamento", "liquidacao", "empenho", "contaFinanceira", "despesa", "fonte"]) {
      if (!String(payment[field] ?? "").trim()) {
        issues.push(`Campo ${field} ausente no grupo ${recordIndex + 1}, pagamento ${paymentIndex + 1}.`);
      }
    }
    if (!(payment.valor > 0)) issues.push(`Valor não positivo no grupo ${recordIndex + 1}, pagamento ${paymentIndex + 1}.`);
  }
}

const report = {
  status: issues.length ? "falhou" : "passou",
  anoPactuacao: metadata.anoPactuacao,
  grupos: records.length,
  pagamentos: payments.length,
  cpfsUnicosComValor: new Set(records.map((record) => record.cpf).filter(Boolean)).size,
  identificadoresDeRotaUnicos: routeSlugs.size,
  notasDePagamentoUnicas: paymentNotes.size,
  totalCalculado: calculatedTotal,
  totalMetadados: metadata.totalRelatorio,
  quantidadeMetadados: metadata.quantidadeRelatorio,
  paginas: metadata.paginas,
  porAnoPagamento: byPaymentYear,
  cursosDistintos: new Set(records.map((record) => record.curso)).size,
  identidadesIncompletas: warnings.length,
  menorPagamento: Math.min(...payments.map((payment) => payment.valor)),
  maiorPagamento: Math.max(...payments.map((payment) => payment.valor)),
  issues,
  warnings,
};

mkdirSync(new URL("../verification", import.meta.url), { recursive: true });
writeFileSync(new URL("../verification/data-integrity.json", import.meta.url), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

if (issues.length) process.exitCode = 1;
