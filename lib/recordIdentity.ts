import type { Beneficiario } from "./types";
import { normalizeText } from "./formatters";

/**
 * Gera um alias compacto para a rota sem expor CPF, nome ou processo no URL.
 * O valor é apenas um identificador de navegação, não é um mecanismo de acesso.
 */
export function recordSlug(
  record: Pick<Beneficiario, "cpf" | "nome" | "processoSei" | "curso" | "pagamentos">,
): string {
  const identity = [
    record.cpf.replace(/\D/g, ""),
    normalizeText(record.processoSei),
    normalizeText(record.curso),
    record.pagamentos
      .map((payment) => normalizeText(payment.notaPagamento))
      .filter(Boolean)
      .sort()
      .join("|"),
    // Nome é parte do identificador interno, mas nunca aparece em texto claro na rota.
    normalizeText(record.nome),
  ].join("\u001f");

  return `bg-${hash32(identity, 2166136261)}-${hash32(identity, 2654435769)}`;
}

function hash32(value: string, seed: number): string {
  let hash = seed >>> 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = Math.imul(hash ^ value.charCodeAt(index), 16777619);
  }
  return (hash >>> 0).toString(36);
}

export function findRecordBySlug(records: Beneficiario[], slug: string): Beneficiario | undefined {
  return records.find((record) => recordSlug(record) === slug);
}
