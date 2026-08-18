/** Atlas Cívico: filtros tratados como contexto analítico, com estado explícito e restauro imediato. */
"use client";

import { useData } from "@/contexts/DataContext";
import { hasActiveFilters } from "@/lib/filters";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import { ChevronDown, Filter, RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

const selectClass =
  "h-11 w-full appearance-none rounded-xl border border-line bg-white px-3 pr-9 text-xs font-semibold text-ink shadow-sm outline-none hover:border-rubber focus:border-rubber";

export function Filters() {
  const { filters, options, setFilters, clearFilters, filteredRecords, records } = useData();
  const [expanded, setExpanded] = useState(true);
  const maximum = options.valorMaximo || 0;
  const currentMax = Number.isFinite(filters.valorMaximo) ? filters.valorMaximo : maximum;
  const active = hasActiveFilters(filters);
  const activeCount = useMemo(
    () =>
      [
        filters.ano !== "todos",
        filters.curso !== "todos",
        filters.contaFinanceira !== "todos",
        filters.despesa !== "todos",
        filters.fonte !== "todos",
        filters.valorMinimo > 0,
        Number.isFinite(filters.valorMaximo),
        Boolean(filters.beneficiario),
      ].filter(Boolean).length,
    [filters],
  );

  const update = <K extends keyof typeof filters>(key: K, value: (typeof filters)[K]) =>
    setFilters((current) => ({ ...current, [key]: value }));

  return (
    <section className="sheet overflow-hidden border border-white/70">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:px-5"
        aria-expanded={expanded}
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-rubber/10 text-rubber">
          <SlidersHorizontal className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-xs font-extrabold text-ink">Filtros globais</span>
          <span className="mt-0.5 block text-[11px] text-ink/45">
            {active
              ? `${activeCount} ${activeCount === 1 ? "filtro activo" : "filtros activos"} · ${filteredRecords.length} beneficiários`
              : `Todos os ${formatNumber(records.length)} registos do relatório`}
          </span>
        </span>
        {active && (
          <span className="ml-auto hidden rounded-full bg-clay/10 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-clay sm:block">
            Vista filtrada
          </span>
        )}
        <ChevronDown
          className={`ml-auto h-4 w-4 text-ink/40 transition-transform ${expanded ? "rotate-180" : ""} ${
            active ? "sm:ml-0" : ""
          }`}
        />
      </button>

      <div className={`grid transition-[grid-template-rows] duration-300 ease-snap ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="border-t border-line px-4 py-5 sm:px-5">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <label className="space-y-2 xl:col-span-2">
                <span className="eyebrow text-ink/45">Beneficiário</span>
                <span className="relative block">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
                  <input
                    value={filters.beneficiario}
                    onChange={(event) => update("beneficiario", event.target.value)}
                    placeholder="Nome ou CPF"
                    className="h-11 w-full rounded-xl border border-line bg-white pl-10 pr-3 text-xs font-semibold text-ink shadow-sm outline-none placeholder:font-normal placeholder:text-ink/30 hover:border-rubber focus:border-rubber"
                  />
                </span>
              </label>

              <FilterSelect
                label="Ano"
                value={filters.ano}
                options={options.anos}
                onChange={(value) => update("ano", value)}
              />
              <FilterSelect
                label="Curso"
                value={filters.curso}
                options={options.cursos}
                onChange={(value) => update("curso", value)}
              />
              <FilterSelect
                label="Conta financeira"
                value={filters.contaFinanceira}
                options={options.contasFinanceiras}
                onChange={(value) => update("contaFinanceira", value)}
              />
              <FilterSelect
                label="Despesa"
                value={filters.despesa}
                options={options.despesas}
                onChange={(value) => update("despesa", value)}
              />
              <FilterSelect
                label="Fonte"
                value={filters.fonte}
                options={options.fontes}
                onChange={(value) => update("fonte", value)}
              />

              <div className="space-y-2 md:col-span-2 xl:col-span-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow text-ink/45">Faixa de valor</span>
                  <span className="mono-value text-[10px] text-rubber">
                    {formatCurrency(filters.valorMinimo)} — {formatCurrency(currentMax)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <label className="rounded-xl border border-line bg-white px-3 py-2 shadow-sm">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-ink/35">Mínimo</span>
                    <input
                      type="number"
                      min={0}
                      max={currentMax}
                      value={filters.valorMinimo}
                      onChange={(event) => update("valorMinimo", Number(event.target.value))}
                      className="mono-value mt-0.5 w-full bg-transparent text-xs text-ink outline-none"
                    />
                  </label>
                  <label className="rounded-xl border border-line bg-white px-3 py-2 shadow-sm">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-ink/35">Máximo</span>
                    <input
                      type="number"
                      min={filters.valorMinimo}
                      max={maximum}
                      value={currentMax}
                      onChange={(event) => update("valorMaximo", Number(event.target.value))}
                      className="mono-value mt-0.5 w-full bg-transparent text-xs text-ink outline-none"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-line pt-4">
              <div className="flex items-center gap-2 text-[11px] text-ink/45">
                <Filter className="h-3.5 w-3.5" />
                Cartões, gráficos e tabelas respondem a estes filtros.
              </div>
              <button
                type="button"
                onClick={clearFilters}
                disabled={!active}
                className="ml-auto flex h-9 items-center gap-2 rounded-xl border border-line px-3 text-[11px] font-bold text-ink hover:border-clay hover:text-clay disabled:cursor-not-allowed disabled:opacity-35"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Limpar filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-2">
      <span className="eyebrow text-ink/45">{label}</span>
      <span className="relative block">
        <select value={value} onChange={(event) => onChange(event.target.value)} className={selectClass}>
          <option value="todos">Todos</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
      </span>
    </label>
  );
}
