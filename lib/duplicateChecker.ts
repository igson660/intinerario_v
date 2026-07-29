import type { Beneficiario } from "./types";
import { normalizeText } from "./formatters";

export function beneficiaryKey(item: Pick<Beneficiario, "cpf" | "nome">): string {
  const cpf = item.cpf.replace(/\D/g, "");
  return cpf.length === 11 ? `cpf:${cpf}` : `nome:${normalizeText(item.nome)}`;
}

export function mergeDuplicateBeneficiaries(records: Beneficiario[]): Beneficiario[] {
  const grouped = new Map<string, Beneficiario>();

  records.forEach((record) => {
    const key = beneficiaryKey(record);
    const current = grouped.get(key);
    if (!current) {
      grouped.set(key, { ...record, pagamentos: [...record.pagamentos] });
      return;
    }

    const pagamentos = [...current.pagamentos, ...record.pagamentos];
    grouped.set(key, {
      ...current,
      cpf: current.cpf || record.cpf,
      processoSei: current.processoSei || record.processoSei,
      curso:
        current.curso === "Curso não identificado" && record.curso !== current.curso
          ? record.curso
          : current.curso,
      pagamentos,
      quantidadePagamentos: pagamentos.length,
      valorTotalRecebido: pagamentos.reduce((sum, payment) => sum + payment.valor, 0),
    });
  });

  return [...grouped.values()].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
}

export function countDuplicateBeneficiaries(records: Beneficiario[]): number {
  const counts = new Map<string, number>();
  records.forEach((record) => {
    const key = beneficiaryKey(record);
    counts.set(key, (counts.get(key) ?? 0) + record.pagamentos.length);
  });
  return [...counts.values()].filter((count) => count > 1).length;
}
