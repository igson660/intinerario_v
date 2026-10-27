import { countGroupsWithMultiplePayments } from "./duplicateChecker";
import {
  beneficiariesByCourse,
  resourcesByAccount,
  resourcesByCourse,
  resourcesByExpense,
  resourcesBySource,
} from "./charts";
import type { Beneficiario, DashboardStats } from "./types";

export function calculateStats(records: Beneficiario[]): DashboardStats {
  const payments = records.flatMap((record) => record.pagamentos);
  const totalRecursos = payments.reduce((sum, payment) => sum + payment.valor, 0);
  const courseValues = resourcesByCourse(records);
  const coursePeople = beneficiariesByCourse(records);
  const accounts = resourcesByAccount(records);
  const expenses = resourcesByExpense(records);
  const sources = resourcesBySource(records);
  const unique = (items: string[]) => new Set(items.filter(Boolean)).size;

  return {
    totalRecursos,
    totalPagamentos: payments.length,
    totalGruposBeneficiarioProcesso: records.length,
    beneficiariosUnicos: unique(records.map((record) => record.cpf || record.nome)),
    processosSei: unique(records.map((record) => record.processoSei)),
    cursos: unique(records.map((record) => record.curso)),
    contasFinanceiras: unique(payments.map((payment) => payment.contaFinanceira)),
    despesas: unique(payments.map((payment) => payment.despesa)),
    fontes: unique(payments.map((payment) => payment.fonte)),
    anosPagamento: [...new Set(payments.map((payment) => Number(payment.dataPagamento.slice(-4))))].sort(),
    registrosImportados: payments.length,
    gruposComMultiplosPagamentos: countGroupsWithMultiplePayments(records),
    valorMedioPorRegistro: records.length ? totalRecursos / records.length : 0,
    maiorPagamento: payments.length ? Math.max(...payments.map((payment) => payment.valor)) : 0,
    menorPagamento: payments.length ? Math.min(...payments.map((payment) => payment.valor)) : 0,
    cursoMaiorInvestimento: courseValues[0]?.name ?? "—",
    cursoMaisAlunos: coursePeople[0]?.name ?? "—",
    contaMaiorVolume: accounts[0]?.name ?? "—",
    despesaMaiorInvestimento: expenses[0]?.name ?? "—",
    fonteMaisUtilizada: sources.sort((a, b) => b.quantidade - a.quantidade)[0]?.name ?? "—",
  };
}
