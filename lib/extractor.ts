import type { Pagamento } from "./types";

export const CPF_PATTERN = /CPF\/CNPJ:\s*(\d{2}\.\d{3}\.\d{3}\/\d{3}-)/;
export const SEI_PATTERN = /PROCESSO\s+INICIAL\s+SEI\s+N[ºO]?\s*([\d.\-/]+)/i;

export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function extractPayment(line: string, nextLine = ""): Pagamento | null {
  const match = line.match(/^\s+(\d{6})\s+(\d+)\s+(\d{2}\/\d{2}\/\d{4})\s+(.+)/);
  if (!match) return null;

  const parts = match[4].trim().split(/\s+/);
  const accountIndex = parts.findIndex((part) => part === "2717212155" || part === "2717212161");
  const values = line.match(/\d+(?:\.\d{3})*,\d{2}/g) ?? [];
  const reference = nextLine.match(/EMPENHO:\s*(\d{10}\/\d{4})/i);

  return {
    dataPagamento: match[3],
    notaPagamento: parts[0] ?? "",
    liquidacao: accountIndex >= 0 ? (parts[accountIndex + 1] ?? "") : "",
    empenho:
      reference?.[1] ?? (accountIndex >= 0 ? (parts[accountIndex + 3] ?? "") : ""),
    contaFinanceira: accountIndex >= 0 ? parts[accountIndex] : "",
    despesa: line.match(/\b3390180000\b/)?.[0] ?? "",
    fonte: line.match(/\b(?:15010700|25010700)\b/)?.[0] ?? "",
    valor: values.length
      ? Number(values.at(-1)!.replaceAll(".", "").replace(",", "."))
      : 0,
  };
}

export function normalizeCourse(note: string): string {
  const value = note
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

  const rules: Array<[string[], string]> = [
    [["EDITOR"], "Qualificação Profissional em Editor de Vídeo"],
    [["VETERIN"], "Técnico em Veterinária"],
    [["ADMIN"], "Técnico em Administração"],
    [["ADMNIST"], "Técnico em Administração"],
    [["ADMIST"], "Técnico em Administração"],
    [["ENFERMAG"], "Técnico em Enfermagem"],
    [["FARM"], "Técnico em Farmácia"],
    [["RECURSOS HU"], "Técnico em Recursos Humanos"],
    [["GERENCIA", "SAUDE"], "Técnico em Gerência em Saúde"],
    [["GERENCIAMENTO", "SAUDE"], "Técnico em Gerência em Saúde"],
    [["CONFEIT"], "Técnico em Confeitaria"],
    [["FINANC"], "Técnico em Finanças"],
    [["MARKET"], "Técnico em Marketing"],
    [["SECRETARI"], "Técnico em Secretariado"],
    [["LOGIST"], "Técnico em Logística"],
    [["SOBRANCELH"], "Design de Sobrancelhas"],
  ];

  return rules.find(([tokens]) => tokens.every((token) => value.includes(token)))?.[1]
    ?? "Curso não identificado";
}
