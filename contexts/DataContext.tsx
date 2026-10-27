"use client";

import { baseMetadata } from "@/data/base";
import { dadosIniciaisPorPactuacao } from "@/data/pactuacoes";
import { applyFilters, buildFilterOptions, defaultFilters } from "@/lib/filters";
import { parseRawReport } from "@/lib/parser";
import { calculateStats } from "@/lib/totals";
import {
  PACTUACAO_ANOS,
  type Beneficiario,
  type FilterState,
  type PactuacaoAno,
} from "@/lib/types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type DatasetsByPactuacao = Record<PactuacaoAno, Beneficiario[]>;
type SourcesByPactuacao = Record<PactuacaoAno, string>;
type OfficialByPactuacao = Record<PactuacaoAno, boolean>;

interface DataContextValue {
  records: Beneficiario[];
  filteredRecords: Beneficiario[];
  filters: FilterState;
  options: ReturnType<typeof buildFilterOptions>;
  stats: ReturnType<typeof calculateStats>;
  sourceLabel: string;
  selectedPactuacao: PactuacaoAno;
  pactuacaoCounts: Record<PactuacaoAno, number>;
  isOfficialBase: boolean;
  setSelectedPactuacao: (year: PactuacaoAno) => void;
  setFilters: (next: FilterState | ((current: FilterState) => FilterState)) => void;
  clearFilters: () => void;
  importText: (raw: string, fileName?: string) => number;
  restoreOriginal: () => void;
}

const DataContext = createContext<DataContextValue | null>(null);

function createInitialDatasets(): DatasetsByPactuacao {
  return { ...dadosIniciaisPorPactuacao };
}

function createInitialSources(): SourcesByPactuacao {
  return {
    2023: baseMetadata.fonte,
    2024: "",
    2025: "",
    2026: "",
  };
}

function createInitialOfficialFlags(): OfficialByPactuacao {
  return { 2023: true, 2024: false, 2025: false, 2026: false };
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [datasets, setDatasets] = useState<DatasetsByPactuacao>(createInitialDatasets);
  const [sources, setSources] = useState<SourcesByPactuacao>(createInitialSources);
  const [officialFlags, setOfficialFlags] = useState<OfficialByPactuacao>(createInitialOfficialFlags);
  const [selectedPactuacao, setSelectedPactuacaoState] = useState<PactuacaoAno>(2023);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const records = datasets[selectedPactuacao];
  const sourceLabel = sources[selectedPactuacao] || "Nenhum conjunto importado";
  const isOfficialBase = officialFlags[selectedPactuacao];
  const pactuacaoCounts = useMemo(
    () =>
      Object.fromEntries(
        PACTUACAO_ANOS.map((year) => [year, datasets[year].length]),
      ) as Record<PactuacaoAno, number>,
    [datasets],
  );
  const options = useMemo(() => buildFilterOptions(records), [records]);
  const filteredRecords = useMemo(() => applyFilters(records, filters), [records, filters]);
  const stats = useMemo(() => calculateStats(filteredRecords), [filteredRecords]);

  const choosePactuacao = useCallback((year: PactuacaoAno) => {
    setSelectedPactuacaoState(year);
    setFilters(defaultFilters);
  }, []);

  const clearFilters = useCallback(() => setFilters(defaultFilters), []);

  const importText = useCallback(
    (raw: string, fileName = "Base importada") => {
      const parsed = parseRawReport(raw);
      if (!parsed.length) {
        throw new Error("Nenhum registo de beneficiário foi reconhecido.");
      }

      setDatasets((current) => ({ ...current, [selectedPactuacao]: parsed }));
      setSources((current) => ({ ...current, [selectedPactuacao]: fileName }));
      setOfficialFlags((current) => ({ ...current, [selectedPactuacao]: false }));
      setFilters(defaultFilters);
      return parsed.length;
    },
    [selectedPactuacao],
  );

  const restoreOriginal = useCallback(() => {
    setDatasets(createInitialDatasets());
    setSources(createInitialSources());
    setOfficialFlags(createInitialOfficialFlags());
    setFilters(defaultFilters);
  }, []);

  const value = useMemo(
    () => ({
      records,
      filteredRecords,
      filters,
      options,
      stats,
      sourceLabel,
      selectedPactuacao,
      pactuacaoCounts,
      isOfficialBase,
      setSelectedPactuacao: choosePactuacao,
      setFilters,
      clearFilters,
      importText,
      restoreOriginal,
    }),
    [
      records,
      filteredRecords,
      filters,
      options,
      stats,
      sourceLabel,
      selectedPactuacao,
      pactuacaoCounts,
      isOfficialBase,
      choosePactuacao,
      clearFilters,
      importText,
      restoreOriginal,
    ],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData(): DataContextValue {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData deve ser usado dentro de DataProvider.");
  return context;
}
