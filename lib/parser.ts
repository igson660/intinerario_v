import { CPF_PATTERN, SEI_PATTERN, extractPayment, normalizeCourse, onlyDigits } from "./extractor";
import { mergeDuplicateBeneficiaries } from "./duplicateChecker";
import type { Beneficiario } from "./types";

export function parseRawReport(raw: string): Beneficiario[] {
  const lines = raw.split(/\r?\n/);
  const records: Beneficiario[] = [];
  let current: Beneficiario | null = null;

  lines.forEach((line, index) => {
    if (line.includes("CPF/CNPJ:")) {
      const cpfMatch = line.match(CPF_PATTERN);
      if (cpfMatch) {
        const beforeCpf = line.slice(0, line.indexOf("CPF/CNPJ:")).trim();
        const nome = beforeCpf.replace(/^\d+\s+/, "").trim();
        current = {
          nome,
          cpf: onlyDigits(cpfMatch[1]),
          processoSei: "",
          curso: "Curso não identificado",
          pagamentos: [],
          quantidadePagamentos: 0,
          valorTotalRecebido: 0,
        };
        records.push(current);
      }
    }

    if (!current) return;

    const payment = extractPayment(line, lines[index + 1] ?? "");
    if (payment) current.pagamentos.push(payment);

    if (line.includes("Nota de Empenho:")) {
      const note = line.split("Nota de Empenho:", 2)[1]?.trim() ?? "";
      current.processoSei ||= note.match(SEI_PATTERN)?.[1]?.replace(/\.$/, "") ?? "";
      current.curso = normalizeCourse(note);
    }
  });

  return mergeDuplicateBeneficiaries(
    records.map((record) => ({
      ...record,
      quantidadePagamentos: record.pagamentos.length,
      valorTotalRecebido: record.pagamentos.reduce((sum, payment) => sum + payment.valor, 0),
    })),
  );
}
