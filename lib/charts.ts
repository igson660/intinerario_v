import type { AggregateDatum, Beneficiario, Pagamento } from "./types";
import { normalizeText } from "./formatters";

function aggregate(
  records: Beneficiario[],
  keyOf: (beneficiary: Beneficiario, payment: Pagamento) => string,
): AggregateDatum[] {
  const result = new Map<string, AggregateDatum>();
  records.forEach((beneficiary) => {
    beneficiary.pagamentos.forEach((payment) => {
      const name = keyOf(beneficiary, payment) || "Não informado";
      const current = result.get(name) ?? { name, valor: 0, quantidade: 0 };
      current.valor += payment.valor;
      current.quantidade += 1;
      result.set(name, current);
    });
  });
  return [...result.values()];
}

export const resourcesByPaymentYear = (records: Beneficiario[]) =>
  aggregate(records, (_, payment) => payment.dataPagamento.slice(-4)).sort((a, b) =>
    a.name.localeCompare(b.name),
  );

export const resourcesByCourse = (records: Beneficiario[]) =>
  aggregate(records, (beneficiary) => beneficiary.curso).sort((a, b) => b.valor - a.valor);

export const beneficiariesByCourse = (records: Beneficiario[]) => {
  const result = new Map<string, Set<string>>();
  records.forEach((beneficiary) => {
    const personKey = beneficiary.cpf.replace(/\D/g, "") || normalizeText(beneficiary.nome);
    if (!personKey) return;
    const set = result.get(beneficiary.curso) ?? new Set<string>();
    set.add(personKey);
    result.set(beneficiary.curso, set);
  });
  return [...result.entries()]
    .map(([name, values]) => ({ name, valor: values.size, quantidade: values.size }))
    .sort((a, b) => b.quantidade - a.quantidade);
};

export const resourcesByAccount = (records: Beneficiario[]) =>
  aggregate(records, (_, payment) => payment.contaFinanceira).sort((a, b) => b.valor - a.valor);

export const resourcesByExpense = (records: Beneficiario[]) =>
  aggregate(records, (_, payment) => payment.despesa).sort((a, b) => b.valor - a.valor);

export const resourcesBySource = (records: Beneficiario[]) =>
  aggregate(records, (_, payment) => payment.fonte).sort((a, b) => b.valor - a.valor);

export const topBeneficiaries = (records: Beneficiario[], limit = 10) =>
  records
    .map((record) => ({
      name: record.nome,
      valor: record.valorTotalRecebido,
      quantidade: record.quantidadePagamentos,
    }))
    .sort((a, b) => b.valor - a.valor)
    .slice(0, limit);

export const monthlyEvolution = (records: Beneficiario[]) => {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  return aggregate(records, (_, payment) => {
    const [day, month, year] = payment.dataPagamento.split("/");
    void day;
    return `${months[Number(month) - 1] ?? month}/${year}`;
  }).sort((a, b) => {
    const toTime = (value: string) => {
      const [month, year] = value.split("/");
      return Number(year) * 12 + months.indexOf(month);
    };
    return toTime(a.name) - toTime(b.name);
  });
};

export const paymentDistribution = (records: Beneficiario[]) => {
  const buckets = [
    { name: "Apenas 1 pagamento", valor: 0, quantidade: 0 },
    { name: "2 pagamentos", valor: 0, quantidade: 0 },
    { name: "3 pagamentos", valor: 0, quantidade: 0 },
    { name: "4 ou mais pagamentos", valor: 0, quantidade: 0 },
  ];
  records.forEach((record) => {
    const index = Math.min(record.quantidadePagamentos, 4) - 1;
    if (index >= 0) {
      buckets[index].quantidade += 1;
      buckets[index].valor += record.valorTotalRecebido;
    }
  });
  return buckets;
};
