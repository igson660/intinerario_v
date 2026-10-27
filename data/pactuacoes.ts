import { beneficiarios } from "@/data/base";
import type { Beneficiario, PactuacaoAno } from "@/lib/types";

/**
 * Conjuntos iniciais disponíveis por ano de Pactuação.
 * A fotografia atual pertence integralmente à Pactuação 2023; os anos seguintes
 * permanecem vazios até que seus respectivos relatórios sejam incorporados.
 */
export const dadosIniciaisPorPactuacao: Record<PactuacaoAno, Beneficiario[]> = {
  2023: beneficiarios,
  2024: [],
  2025: [],
  2026: [],
};
