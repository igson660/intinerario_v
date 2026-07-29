/** Atlas Cívico: o contexto mantém filtros e proveniência visíveis, com resposta imediata no navegador. */
"use client";

import { beneficiarios as initialData, baseMetadata } from "@/data/base";
import { applyFilters, buildFilterOptions, defaultFilters } from "@/lib/filters";
import { parseRawReport } from "@/lib/parser";
import { calculateStats } from "@/lib/totals";
import type { Beneficiario, FilterState } from "@/lib/types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface DataContextValue {
  records: Beneficiario[];
  filteredRecords: Beneficiario[];
  filters: FilterState;
  options: ReturnType<typeof buildFilterOptions>;
  stats: ReturnType<typeof calculateStats>;
  sourceLabel: string;
  setFilters: (next: FilterState | ((current: FilterState) => FilterState)) => void;
  clearFilters: () => void;
  importText: (raw: string, fileName?: string) => number;
  restoreOriginal: () => void;
}

const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [records, setRecords] = useState<Beneficiario[]>(initialData);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [sourceLabel, setSourceLabel] = useState<string>(baseMetadata.fonte);
  const options = useMemo(() => buildFilterOptions(records), [records]);
  const filteredRecords = useMemo(() => applyFilters(records, filters), [records, filters]);
  const stats = useMemo(() => calculateStats(filteredRecords), [filteredRecords]);

  const clearFilters = useCallback(() => setFilters(defaultFilters), []);

  const importText = useCallback((raw: string, fileName = "Base importada") => {
    const parsed = parseRawReport(raw);
    if (!parsed.length) throw new Error("Nenhum registo de beneficiário foi reconhecido.");
    setRecords(parsed);
    setSourceLabel(fileName);
    setFilters(defaultFilters);
    return parsed.length;
  }, []);

  const restoreOriginal = useCallback(() => {
    setRecords(initialData);
    setSourceLabel(baseMetadata.fonte);
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
