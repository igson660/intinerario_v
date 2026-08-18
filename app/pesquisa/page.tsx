/** Atlas Cívico: pesquisa orientada a tarefas, com resultados densos, legíveis e navegáveis. */
"use client";

import { useData } from "@/contexts/DataContext";
import { formatCpf, formatCurrency, formatNumber, normalizeText } from "@/lib/formatters";
import { recordSlug } from "@/lib/recordIdentity";
import type { Beneficiario } from "@/lib/types";
import {
  ArrowDownAZ,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  FileSearch2,
  GraduationCap,
  Search,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 12;

type SortKey = "nome" | "valor" | "pagamentos";

export default function SearchPage() {
  const { records } = useData();
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("todos");
  const [sort, setSort] = useState<SortKey>("nome");
  const [page, setPage] = useState(1);

  const courses = useMemo(
    () => [...new Set(records.map((record) => record.curso))].sort((a, b) => a.localeCompare(b, "pt-BR")),
    [records],
  );

  const results = useMemo(() => {
    const term = normalizeText(query);
    const cpfTerm = query.replace(/\D/g, "");
    return records
      .filter((record) => course === "todos" || record.curso === course)
      .filter(
        (record) =>
          !term
          || normalizeText(record.nome).includes(term)
          || (cpfTerm && record.cpf.includes(cpfTerm)),
      )
      .sort((a, b) => {
        if (sort === "valor") return b.valorTotalRecebido - a.valorTotalRecebido;
        if (sort === "pagamentos") return b.quantidadePagamentos - a.quantidadePagamentos;
        return a.nome.localeCompare(b.nome, "pt-BR");
      });
  }, [records, query, course, sort]);

  useEffect(() => setPage(1), [query, course, sort]);

  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const clear = () => {
    setQuery("");
    setCourse("todos");
    setSort("nome");
  };

  return (
    <main className="mx-auto max-w-[1520px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <section className="sheet relative overflow-hidden border border-white/70 p-6 sm:p-8">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[url('/manus-storage/atlas-civico-search-v2_2ff186ff.png')] bg-cover bg-center opacity-52 md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFDF8_0%,#FFFDF8_55%,rgba(255,253,248,0.55)_100%)]" />
        <div className="relative max-w-3xl">
          <p className="eyebrow">Consulta individual</p>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Encontre um beneficiário pelo nome ou CPF.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/58">
            Consulte o curso, o processo SEI e o histórico financeiro preservado para cada grupo nos relatórios de 2023 a 2026.
          </p>

          <label className="relative mt-7 block max-w-2xl">
            <span className="sr-only">Pesquisar por nome ou CPF</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-rubber" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
              placeholder="Digite o nome ou CPF…"
              className="h-14 w-full rounded-2xl border border-line bg-white pl-12 pr-12 text-sm font-semibold text-ink shadow-sheet outline-none placeholder:font-normal placeholder:text-ink/30 hover:border-rubber focus:border-rubber focus:shadow-float"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-ink/35 hover:bg-ink/5 hover:text-ink"
                aria-label="Limpar pesquisa"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>
        </div>
      </section>

      <section className="mt-5 grid gap-4 sm:grid-cols-3">
        <SearchMetric icon={<Users className="h-4 w-4" />} label="Beneficiários na base" value={formatNumber(records.length)} />
        <SearchMetric icon={<FileSearch2 className="h-4 w-4" />} label="Resultados encontrados" value={formatNumber(results.length)} />
        <SearchMetric
          icon={<CircleDollarSign className="h-4 w-4" />}
          label="Total nos resultados"
          value={formatCurrency(results.reduce((sum, record) => sum + record.valorTotalRecebido, 0))}
        />
      </section>

      <section className="sheet mt-5 overflow-hidden border border-white/70">
        <header className="flex flex-col gap-4 border-b border-line px-4 py-5 sm:px-6 xl:flex-row xl:items-end">
          <div>
            <p className="eyebrow">Directório</p>
            <h2 className="mt-1 font-serif text-2xl font-bold text-ink">Beneficiários</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row xl:ml-auto">
            <label className="space-y-1.5">
              <span className="block font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-ink/42">Curso</span>
              <span className="relative block">
                <GraduationCap className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
                <select
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                  className="h-10 w-full min-w-64 appearance-none rounded-xl border border-line bg-white pl-9 pr-9 text-xs font-semibold text-ink outline-none hover:border-rubber focus:border-rubber"
                >
                  <option value="todos">Todos os cursos</option>
                  {courses.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </span>
            </label>
            <label className="space-y-1.5">
              <span className="block font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-ink/42">Ordenar</span>
              <span className="relative block">
                <ArrowDownAZ className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortKey)}
                  className="h-10 w-full min-w-44 appearance-none rounded-xl border border-line bg-white pl-9 pr-8 text-xs font-semibold text-ink outline-none hover:border-rubber focus:border-rubber"
                >
                  <option value="nome">Nome A–Z</option>
                  <option value="valor">Maior valor</option>
                  <option value="pagamentos">Mais pagamentos</option>
                </select>
              </span>
            </label>
          </div>
        </header>

        {visible.length ? (
          <>
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[980px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line bg-canvas/55">
                    {[
                      "Beneficiário",
                      "CPF",
                      "Curso",
                      "Processo SEI",
                      "Pagamentos",
                      "Valor total",
                      "",
                    ].map((heading) => (
                      <th key={heading} className="px-5 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.11em] text-ink/42">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {visible.map((record) => <DesktopRow key={recordSlug(record)} record={record} />)}
                </tbody>
              </table>
            </div>

            <div className="divide-y divide-line md:hidden">
              {visible.map((record) => <MobileResult key={recordSlug(record)} record={record} />)}
            </div>

            <footer className="flex flex-col gap-3 border-t border-line bg-canvas/35 px-4 py-4 sm:flex-row sm:items-center sm:px-6">
              <p className="text-[11px] text-ink/48">
                A mostrar {formatNumber((page - 1) * PAGE_SIZE + 1)}–{formatNumber(Math.min(page * PAGE_SIZE, results.length))} de {formatNumber(results.length)} resultados
              </p>
              <div className="flex items-center gap-2 sm:ml-auto">
                <button
                  type="button"
                  onClick={() => setPage((value) => Math.max(1, value - 1))}
                  disabled={page === 1}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-paper text-ink hover:border-rubber hover:text-rubber disabled:cursor-not-allowed disabled:opacity-35"
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="mono-value min-w-24 text-center text-[10px] text-ink/55">
                  Página {page} / {pageCount}
                </span>
                <button
                  type="button"
                  onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
                  disabled={page === pageCount}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-paper text-ink hover:border-rubber hover:text-rubber disabled:cursor-not-allowed disabled:opacity-35"
                  aria-label="Página seguinte"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </footer>
          </>
        ) : (
          <div className="grid min-h-[440px] place-items-center p-8 text-center">
            <div className="max-w-md">
              <img
                src="/manus-storage/atlas-civico-search-v2_2ff186ff.png"
                alt="Ilustração de pesquisa em registos"
                className="mx-auto h-44 w-60 object-cover mix-blend-multiply"
              />
              <h3 className="mt-5 font-serif text-2xl font-bold text-ink">Nenhum beneficiário encontrado</h3>
              <p className="mt-2 text-sm leading-6 text-ink/50">
                Verifique a grafia, use apenas parte do nome ou retire os filtros de curso.
              </p>
              <button
                type="button"
                onClick={clear}
                className="mt-5 h-10 rounded-xl bg-rubber px-5 text-xs font-bold text-white hover:bg-rubber-dark"
              >
                Limpar pesquisa
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function SearchMetric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="sheet flex items-center gap-3 border border-white/70 px-4 py-4 sm:px-5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-rubber/9 text-rubber">{icon}</span>
      <span className="min-w-0">
        <span className="block font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/42">{label}</span>
        <strong className="metric-number mt-1 block truncate text-xl text-ink">{value}</strong>
      </span>
    </div>
  );
}

function DesktopRow({ record }: { record: Beneficiario }) {
  return (
    <tr className="group hover:bg-rubber/[0.035]">
      <td className="max-w-[270px] px-5 py-4">
        <Link href={`/beneficiario/${recordSlug(record)}`} className="block truncate text-xs font-extrabold text-ink group-hover:text-rubber">
          {record.nome}
        </Link>
      </td>
      <td className="px-5 py-4 font-mono text-[10px] text-ink/58">{formatCpf(record.cpf)}</td>
      <td className="max-w-[280px] px-5 py-4 text-[11px] font-semibold text-ink/55">
        <span className="line-clamp-2">{record.curso}</span>
      </td>
      <td className="px-5 py-4 font-mono text-[10px] text-ink/52">{record.processoSei || "—"}</td>
      <td className="px-5 py-4 text-center font-mono text-[10px] text-ink/58">{record.quantidadePagamentos}</td>
      <td className="whitespace-nowrap px-5 py-4 font-mono text-[10px] font-semibold text-rubber">{formatCurrency(record.valorTotalRecebido)}</td>
      <td className="px-5 py-4 text-right">
        <Link
          href={`/beneficiario/${recordSlug(record)}`}
          className="inline-grid h-9 w-9 place-items-center rounded-xl border border-line bg-paper text-ink/45 group-hover:border-rubber group-hover:text-rubber"
          aria-label={`Ver detalhes de ${record.nome}`}
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      </td>
    </tr>
  );
}

function MobileResult({ record }: { record: Beneficiario }) {
  return (
    <Link href={`/beneficiario/${recordSlug(record)}`} className="block p-5 hover:bg-rubber/[0.035]">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-extrabold leading-5 text-ink">{record.nome}</h3>
          <p className="mono-value mt-1 text-[10px] text-ink/45">{formatCpf(record.cpf)}</p>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-rubber" />
      </div>
      <p className="mt-3 text-[11px] font-semibold leading-5 text-ink/54">{record.curso}</p>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
        <span className="text-[10px] text-ink/43">{record.quantidadePagamentos} pagamento(s)</span>
        <strong className="mono-value text-[11px] text-rubber">{formatCurrency(record.valorTotalRecebido)}</strong>
      </div>
    </Link>
  );
}
