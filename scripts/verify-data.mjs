/** Validação determinística da base estática multianual usada pela Bolsa Clara. */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const source = readFileSync(new URL("../data/base.ts", import.meta.url), "utf8");
const startMarker = "export const beneficiarios = ";
const endMarker = "] satisfies Beneficiario[];";
const start = source.indexOf(startMarker) + startMarker.length;
const end = source.indexOf(endMarker, start) + 1;

if (start < startMarker.length || end <= 0) {
  throw new Error("Não foi possível localizar o conjunto de beneficiários em data/base.ts.");
}

const records = JSON.parse(source.slice(start, end));
const metadata = {
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

function recordSlug(record) {
  const cpf = String(record.cpf || "").replace(/\D/g, "");
  const process = normalize(record.processoSei || "sem-processo");
  const firstPayment = normalize(record.pagamentos[0]?.notaPagamento || "sem-pagamento");
  const fallbackName = normalize(record.nome || "beneficiario-sem-identificacao");
  return [cpf || fallbackName, process, firstPayment]
    .join("-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

if (records.length !== 3826) issues.push(`Esperados 3826 grupos; encontrados ${records.length}.`);
if (payments.length !== 6203) issues.push(`Esperados 6203 pagamentos; encontrados ${payments.length}.`);
if (Math.abs(calculatedTotal - 3479800) > 0.001) issues.push(`Total esperado 3479800; encontrado ${calculatedTotal}.`);
if (metadata.quantidadeRelatorio !== payments.length) issues.push("Quantidade calculada diverge dos metadados.");
if (Math.abs(metadata.totalRelatorio - calculatedTotal) > 0.001) issues.push("Total calculado diverge dos metadados.");
if (metadata.paginas !== 1133) issues.push(`Esperadas 1133 páginas; encontradas ${metadata.paginas}.`);

const expectedByYear = {
  2023: { count: 399, total: 88610 },
  2024: { count: 2900, total: 1221082 },
  2025: { count: 2551, total: 1856994 },
  2026: { count: 353, total: 313114 },
};
const byYear = {};
for (const payment of payments) {
  const year = Number(String(payment.dataPagamento).slice(-4));
  byYear[year] ??= { count: 0, total: 0 };
  byYear[year].count += 1;
  byYear[year].total += payment.valor;
}
for (const [year, expected] of Object.entries(expectedByYear)) {
  const actual = byYear[year] ?? { count: 0, total: 0 };
  if (actual.count !== expected.count) issues.push(`Ano ${year}: esperados ${expected.count} pagamentos; encontrados ${actual.count}.`);
  if (Math.abs(actual.total - expected.total) > 0.001) issues.push(`Ano ${year}: esperado ${expected.total}; encontrado ${actual.total}.`);
}

for (const record of records) {
  const slug = recordSlug(record);
  if (routeSlugs.has(slug)) issues.push(`Identificador de rota duplicado: ${slug}.`);
  routeSlugs.add(slug);

  if (!record.nome?.trim() || !/^\d{11}$/.test(record.cpf || "")) {
    warnings.push(`Identidade incompleta: ${record.nome || "nome ausente"} / ${record.cpf || "CPF ausente"}.`);
  }
  if (!record.curso?.trim()) issues.push(`Curso ausente para ${record.cpf || record.nome || "registro sem identidade"}.`);
  if (record.quantidadePagamentos !== record.pagamentos.length) {
    issues.push(`Quantidade de pagamentos inconsistente para ${record.cpf || record.nome}.`);
  }
  const beneficiaryTotal = record.pagamentos.reduce((sum, payment) => sum + payment.valor, 0);
  if (Math.abs(beneficiaryTotal - record.valorTotalRecebido) > 0.001) {
    issues.push(`Valor total inconsistente para ${record.cpf || record.nome}.`);
  }
  for (const payment of record.pagamentos) {
    if (paymentNotes.has(payment.notaPagamento)) issues.push(`Nota de pagamento duplicada: ${payment.notaPagamento}.`);
    paymentNotes.add(payment.notaPagamento);
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(payment.dataPagamento)) {
      issues.push(`Data inválida para ${record.cpf || record.nome}: ${payment.dataPagamento}.`);
    }
    for (const field of ["notaPagamento", "liquidacao", "empenho", "contaFinanceira", "despesa", "fonte"]) {
      if (!String(payment[field] ?? "").trim()) issues.push(`Campo ${field} ausente para ${record.cpf || record.nome}.`);
    }
    if (!(payment.valor > 0)) issues.push(`Valor não positivo para ${record.cpf || record.nome}.`);
  }
}

const report = {
  status: issues.length ? "falhou" : "passou",
  grupos: records.length,
  pagamentos: payments.length,
  cpfsUnicosComValor: new Set(records.map((record) => record.cpf).filter(Boolean)).size,
  identificadoresDeRotaUnicos: routeSlugs.size,
  notasDePagamentoUnicas: paymentNotes.size,
  totalCalculado: calculatedTotal,
  totalMetadados: metadata.totalRelatorio,
  quantidadeMetadados: metadata.quantidadeRelatorio,
  paginas: metadata.paginas,
  porAno: byYear,
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
