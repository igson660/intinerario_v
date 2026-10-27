import type { Beneficiario } from "./types";
import { normalizeText } from "./formatters";

const UNKNOWN_COURSE = normalizeText("Curso não identificado");

/**
 * Só consolida registros quando a fonte fornece uma combinação documental confiável.
 * CPF isolado não identifica um vínculo: a mesma pessoa pode ter processos e cursos distintos.
 */
export function beneficiaryKey(
  item: Pick<Beneficiario, "cpf" | "nome" | "processoSei" | "curso">,
  index: number,
): string {
  const cpf = item.cpf.replace(/\D/g, "");
  const process = normalizeText(item.processoSei);
  const course = normalizeText(item.curso);

  if (cpf && process) return `cpf:${cpf}|processo:${process}|curso:${course}`;

  // Sem processo SEI não há evidência suficiente para juntar grupos com segurança.
  // A chave por índice preserva cada ocorrência, inclusive identidades incompletas.
  return `ocorrencia:${index}`;
}

export function mergeDuplicateBeneficiaries(records: Beneficiario[]): Beneficiario[] {
  const grouped = new Map<string, Beneficiario>();

  records.forEach((record, index) => {
    const key = beneficiaryKey(record, index);
    const current = grouped.get(key);
    if (!current) {
      grouped.set(key, { ...record, pagamentos: [...record.pagamentos] });
      return;
    }

    const pagamentos = [...current.pagamentos, ...record.pagamentos];
    const currentCourse = normalizeText(current.curso);
    grouped.set(key, {
      ...current,
      cpf: current.cpf || record.cpf,
      nome: current.nome || record.nome,
      processoSei: current.processoSei || record.processoSei,
      curso: currentCourse === UNKNOWN_COURSE ? record.curso : current.curso,
      pagamentos,
      quantidadePagamentos: pagamentos.length,
      valorTotalRecebido: pagamentos.reduce((sum, payment) => sum + payment.valor, 0),
    });
  });

  return [...grouped.values()].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
}

/** Conta grupos com mais de um lançamento; não representa duplicidade de beneficiários. */
export function countGroupsWithMultiplePayments(records: Beneficiario[]): number {
  return records.filter((record) => record.pagamentos.length > 1).length;
}
