/** Validação determinística da base estática usada pela Bolsa Clara. */
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
  totalRelatorio: Number(source.match(/totalRelatorio:\s*([0-9.]+)/)?.[1]),
  quantidadeRelatorio: Number(source.match(/quantidadeRelatorio:\s*(\d+)/)?.[1]),
};

const payments = records.flatMap((record) => record.pagamentos);
const calculatedTotal = payments.reduce((sum, payment) => sum + payment.valor, 0);
const uniqueCpfs = new Set(records.map((record) => record.cpf));
const issues = [];

if (records.length !== 399) issues.push(`Esperados 399 beneficiários; encontrados ${records.length}.`);
if (payments.length !== 399) issues.push(`Esperados 399 pagamentos; encontrados ${payments.length}.`);
if (Math.abs(calculatedTotal - 88610) > 0.001) issues.push(`Total esperado 88610; encontrado ${calculatedTotal}.`);
if (metadata.quantidadeRelatorio !== records.length) issues.push("Quantidade calculada diverge dos metadados.");
if (Math.abs(metadata.totalRelatorio - calculatedTotal) > 0.001) issues.push("Total calculado diverge dos metadados.");
if (uniqueCpfs.size !== records.length) issues.push("Existem CPFs duplicados na base consolidada.");

for (const record of records) {
  if (!record.nome?.trim()) issues.push(`Beneficiário sem nome: ${record.cpf || "CPF ausente"}.`);
  if (!/^\d{11}$/.test(record.cpf)) issues.push(`CPF inválido: ${record.cpf}.`);
  if (!record.curso?.trim()) issues.push(`Curso ausente para ${record.cpf}.`);
  if (record.quantidadePagamentos !== record.pagamentos.length) {
    issues.push(`Quantidade de pagamentos inconsistente para ${record.cpf}.`);
  }
  const beneficiaryTotal = record.pagamentos.reduce((sum, payment) => sum + payment.valor, 0);
  if (Math.abs(beneficiaryTotal - record.valorTotalRecebido) > 0.001) {
    issues.push(`Valor total inconsistente para ${record.cpf}.`);
  }
  for (const payment of record.pagamentos) {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(payment.dataPagamento)) {
      issues.push(`Data inválida para ${record.cpf}: ${payment.dataPagamento}.`);
    }
    for (const field of ["notaPagamento", "liquidacao", "empenho", "contaFinanceira", "despesa", "fonte"]) {
      if (!String(payment[field] ?? "").trim()) issues.push(`Campo ${field} ausente para ${record.cpf}.`);
    }
    if (!(payment.valor > 0)) issues.push(`Valor não positivo para ${record.cpf}.`);
  }
}

const report = {
  status: issues.length ? "falhou" : "passou",
  beneficiarios: records.length,
  pagamentos: payments.length,
  cpfsUnicos: uniqueCpfs.size,
  totalCalculado: calculatedTotal,
  totalMetadados: metadata.totalRelatorio,
  quantidadeMetadados: metadata.quantidadeRelatorio,
  cursosDistintos: new Set(records.map((record) => record.curso)).size,
  menorPagamento: Math.min(...payments.map((payment) => payment.valor)),
  maiorPagamento: Math.max(...payments.map((payment) => payment.valor)),
  issues,
};

mkdirSync(new URL("../verification", import.meta.url), { recursive: true });
writeFileSync(new URL("../verification/data-integrity.json", import.meta.url), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));

if (issues.length) process.exitCode = 1;
