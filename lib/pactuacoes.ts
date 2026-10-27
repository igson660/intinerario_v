import { PACTUACAO_ANOS, type PactuacaoAno } from "./types";

export function parsePactuacaoAno(value: string | null | undefined): PactuacaoAno | undefined {
  if (!value) return undefined;
  const parsed = Number(value);
  return PACTUACAO_ANOS.find((year) => year === parsed);
}
