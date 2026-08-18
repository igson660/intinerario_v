import type { Beneficiario } from "./types";
import { normalizeText } from "./formatters";

/**
 * URL-safe identity for a beneficiary/process group.
 * The first payment note is included because the 2024 base can contain more
 * than one group for the same CPF and also has records without CPF.
 */
export function recordSlug(record: Pick<Beneficiario, "cpf" | "nome" | "processoSei" | "pagamentos">): string {
  const cpf = record.cpf.replace(/\D/g, "");
  const process = normalizeText(record.processoSei || "sem-processo");
  const firstPayment = normalizeText(record.pagamentos[0]?.notaPagamento || "sem-pagamento");
  const fallbackName = normalizeText(record.nome || "beneficiario-sem-identificacao");
  const identity = [cpf || fallbackName, process, firstPayment].join("-");
  return identity
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

export function findRecordBySlug(records: Beneficiario[], slug: string): Beneficiario | undefined {
  return records.find((record) => recordSlug(record) === slug);
}
