import type { Beneficiario, FilterOptions, FilterState } from "./types";
import { normalizeText } from "./formatters";

export const defaultFilters: FilterState = {
  anoPagamento: "todos",
  curso: "todos",
  contaFinanceira: "todos",
  despesa: "todos",
  fonte: "todos",
  valorMinimo: 0,
  valorMaximo: Number.POSITIVE_INFINITY,
  beneficiario: "",
};

export function buildFilterOptions(records: Beneficiario[]): FilterOptions {
  const payments = records.flatMap((record) => record.pagamentos);
  const values = payments.map((payment) => payment.valor);
  const unique = (values: string[]) => [...new Set(values.filter(Boolean))].sort();

  return {
    anosPagamento: unique(payments.map((payment) => payment.dataPagamento.slice(-4))),
    cursos: unique(records.map((record) => record.curso)),
    contasFinanceiras: unique(payments.map((payment) => payment.contaFinanceira)),
    despesas: unique(payments.map((payment) => payment.despesa)),
    fontes: unique(payments.map((payment) => payment.fonte)),
    valorMinimo: values.length ? Math.floor(Math.min(...values)) : 0,
    valorMaximo: values.length ? Math.ceil(Math.max(...values)) : 0,
  };
}

export function applyFilters(records: Beneficiario[], filters: FilterState): Beneficiario[] {
  const query = normalizeText(filters.beneficiario);

  return records
    .filter((record) => filters.curso === "todos" || record.curso === filters.curso)
    .filter(
      (record) =>
        !query
        || normalizeText(record.nome).includes(query)
        || record.cpf.includes(query.replace(/\D/g, "")),
    )
    .map((record) => {
      const pagamentos = record.pagamentos.filter((payment) => {
        const yearMatches = filters.anoPagamento === "todos" || payment.dataPagamento.endsWith(filters.anoPagamento);
        const accountMatches =
          filters.contaFinanceira === "todos"
          || payment.contaFinanceira === filters.contaFinanceira;
        const expenseMatches =
          filters.despesa === "todos" || payment.despesa === filters.despesa;
        const sourceMatches = filters.fonte === "todos" || payment.fonte === filters.fonte;
        const valueMatches =
          payment.valor >= filters.valorMinimo && payment.valor <= filters.valorMaximo;
        return yearMatches && accountMatches && expenseMatches && sourceMatches && valueMatches;
      });

      return {
        ...record,
        pagamentos,
        quantidadePagamentos: pagamentos.length,
        valorTotalRecebido: pagamentos.reduce((sum, payment) => sum + payment.valor, 0),
      };
    })
    .filter((record) => record.pagamentos.length > 0);
}

export function hasActiveFilters(filters: FilterState): boolean {
  return Object.entries(filters).some(([key, value]) => {
    if (key === "beneficiario") return Boolean(value);
    if (key === "valorMinimo") return value !== 0;
    if (key === "valorMaximo") return value !== Number.POSITIVE_INFINITY;
    return value !== "todos";
  });
}
