/** Atlas Cívico: dashboard assimétrico que conduz do total auditável às distribuições detalhadas. */
"use client";

import { DashboardCharts } from "@/components/DashboardCharts";
import { Filters } from "@/components/Filters";
import { InfoCard } from "@/components/InfoCard";
import { KpiCard } from "@/components/KpiCard";
import { PactuacaoEmptyState } from "@/components/PactuacaoEmptyState";
import { useData } from "@/contexts/DataContext";
import { baseMetadata } from "@/data/base";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import {
  BadgeCheck,
  Banknote,
  BookOpenCheck,
  CalendarRange,
  CircleDollarSign,
  Database,
  FileCheck2,
  Fingerprint,
  GraduationCap,
  Landmark,
  Layers3,
  ReceiptText,
  ScanSearch,
  ScrollText,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";

export default function DashboardPage() {
  const { stats, records, filteredRecords, sourceLabel, filters, selectedPactuacao, isOfficialBase } = useData();
  if (!records.length) return <PactuacaoEmptyState />;

  const isFiltered = filteredRecords.length !== records.length;
  const totalMatches = isOfficialBase && Math.abs(stats.totalRecursos - baseMetadata.totalRelatorio) < 0.001 && !isFiltered;
  const yearLabel = filters.anoPagamento === "todos"
    ? stats.anosPagamento.length ? `Anos de pagamento ${stats.anosPagamento.join(", ")}` : "Sem pagamentos nesta vista"
    : `Pagamento em ${filters.anoPagamento}`;

  const kpis = [
    {
      label: "Total de pagamentos",
      value: formatNumber(stats.totalPagamentos),
      note: "Lançamentos financeiros reconhecidos",
      icon: ReceiptText,
      tone: "ink" as const,
    },
    {
      label: "Grupos beneficiário–processo",
      value: formatNumber(stats.totalGruposBeneficiarioProcesso),
      note: "Vínculos com pagamentos na pactuação selecionada",
      icon: Users,
      tone: "rubber" as const,
    },
    {
      label: "Pessoas identificadas",
      value: formatNumber(stats.beneficiariosUnicos),
      note: "CPF ou nome quando disponível; não é um cadastro mestre",
      icon: UserCheck,
      tone: "sage" as const,
    },
    {
      label: "Processos SEI",
      value: formatNumber(stats.processosSei),
      note: "Processos distintos identificados",
      icon: ScrollText,
      tone: "clay" as const,
    },
    {
      label: "Cursos",
      value: formatNumber(stats.cursos),
      note: "Categorias normalizadas no relatório",
      icon: GraduationCap,
      tone: "rubber" as const,
    },
    {
      label: "Contas financeiras",
      value: formatNumber(stats.contasFinanceiras),
      note: "Códigos financeiros distintos",
      icon: Landmark,
      tone: "ink" as const,
    },
    {
      label: "Despesas",
      value: formatNumber(stats.despesas),
      note: "Naturezas de despesa encontradas",
      icon: WalletCards,
      tone: "clay" as const,
    },
    {
      label: "Fontes de recurso",
      value: formatNumber(stats.fontes),
      note: "Origens orçamentais identificadas",
      icon: Layers3,
      tone: "sage" as const,
    },
    {
      label: "Anos de pagamento",
      value: stats.anosPagamento.length ? stats.anosPagamento.join(", ") : "—",
      note: "Exercícios financeiros detectados pelas datas",
      icon: CalendarRange,
      tone: "ink" as const,
    },
    {
      label: "Pagamentos na vista",
      value: formatNumber(stats.registrosImportados),
      note: "Linhas de pagamento activas",
      icon: Database,
      tone: "rubber" as const,
    },
    {
      label: "Grupos com múltiplos pagamentos",
      value: formatNumber(stats.gruposComMultiplosPagamentos),
      note: "Registros com mais de um lançamento",
      icon: Fingerprint,
      tone: stats.gruposComMultiplosPagamentos ? ("clay" as const) : ("sage" as const),
    },
  ];

  return (
    <main className="mx-auto max-w-[1720px] px-4 pb-12 pt-5 sm:px-6 sm:pt-7 lg:px-8">
      <section
        className="sheet relative min-h-[310px] overflow-hidden border border-white/70 bg-cover bg-[76%_center] p-6 sm:p-8 lg:p-10"
        style={{ backgroundImage: "url('/manus-storage/atlas-civico-hero_20ed6f2e.png')" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFDF8_0%,rgba(255,253,248,0.97)_42%,rgba(255,253,248,0.3)_78%,rgba(255,253,248,0.06)_100%)]" />
        <div className="relative flex min-h-[230px] max-w-3xl flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-rubber/10 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-rubber">
                PACTUAÇÃO {selectedPactuacao} · {yearLabel}
              </span>
              <span className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] ${
                totalMatches ? "bg-[#DCEBE4] text-rubber-dark" : "bg-clay/10 text-clay"
              }`}>
                {totalMatches ? <BadgeCheck className="h-3.5 w-3.5" /> : <ScanSearch className="h-3.5 w-3.5" />}
                {totalMatches ? "Total conferido" : "Vista filtrada"}
              </span>
            </div>
            <h1 className="mt-5 max-w-2xl font-serif text-[34px] font-bold leading-[1.05] tracking-[-0.025em] text-ink sm:text-[46px]">
              Recursos pagos em assistência estudantil
            </h1>
          </div>

          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
            <div>
              <p className="eyebrow text-ink/50">Total de recursos</p>
              <p className="metric-number mt-2 text-[40px] font-bold leading-none tracking-[-0.035em] text-rubber sm:text-[54px]">
                {formatCurrency(stats.totalRecursos)}
              </p>
            </div>
            <div className="mb-1 max-w-[270px] border-l border-line pl-4 text-[11px] leading-5 text-ink/52">
              {formatNumber(stats.totalPagamentos)} pagamentos em {formatNumber(stats.totalGruposBeneficiarioProcesso)} grupos beneficiário–processo na vista atual.
              <span className="mt-1 block truncate font-mono text-[9px] uppercase tracking-[0.08em] text-ink/38" title={sourceLabel}>
                Fonte: {sourceLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5">
        <Filters />
      </div>

      <section aria-labelledby="indicadores" className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Panorama</p>
            <h2 id="indicadores" className="mt-1 font-serif text-2xl font-bold text-ink">
              Indicadores principais
            </h2>
          </div>
          <p className="hidden max-w-md text-right text-[11px] leading-5 text-ink/45 md:block">
            Todos os indicadores respondem aos filtros globais e são recalculados no navegador.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-12">
          {kpis.slice(0, 5).map((kpi, index) => (
            <KpiCard
              key={kpi.label}
              {...kpi}
              delay={index * 35}
              className={index < 2 ? "xl:col-span-3" : "xl:col-span-2"}
            />
          ))}
          <div className="sheet overflow-hidden border border-white/70 sm:col-span-2 xl:col-span-12">
            <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-6">
              {kpis.slice(5).map((kpi) => {
                const Icon = kpi.icon;
                return (
                  <div key={kpi.label} className="group relative min-h-[116px] px-5 py-4 hover:bg-rubber/[0.035]">
                    <span className="absolute inset-y-0 left-0 w-0.5 bg-rubber/0 transition-colors group-hover:bg-rubber" />
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-rubber" />
                      <div className="min-w-0">
                        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.11em] text-ink/42">{kpi.label}</p>
                        <p className="metric-number mt-2 truncate text-[22px] font-bold leading-none text-ink">{kpi.value}</p>
                        <p className="mt-2 text-[9px] leading-4 text-ink/38">{kpi.note}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="leitura" className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(310px,0.55fr)]">
        <div className="sheet relative min-h-[360px] overflow-hidden border border-white/70 bg-paper p-6 sm:p-8">
          <div className="absolute inset-y-0 right-0 w-[58%] bg-[url('/manus-storage/atlas-civico-records-v2_41d81591.png')] bg-cover bg-center opacity-75" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFDF8_0%,#FFFDF8_43%,rgba(255,253,248,0.84)_62%,rgba(255,253,248,0.18)_100%)]" />
          <div className="relative flex h-full max-w-lg flex-col justify-between">
            <div>
              <p className="eyebrow">Integridade da base</p>
              <h2 id="leitura" className="mt-3 font-serif text-3xl font-bold leading-tight text-ink">
                Do relatório extenso a uma leitura verificável.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-ink/58">
                Esta vista contém somente a Pactuação {selectedPactuacao}. O filtro por ano de pagamento analisa os exercícios financeiros sem alterar a pactuação; o conjunto original está associado à Pactuação 2023.
              </p>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-paper/85 p-4 backdrop-blur-sm">
                <BookOpenCheck className="h-5 w-5 text-rubber" />
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">Páginas de origem</p>
                <p className="metric-number mt-1 text-2xl font-bold text-ink">{isOfficialBase ? baseMetadata.paginas : "—"}</p>
              </div>
              <div className="rounded-xl border border-line bg-paper/85 p-4 backdrop-blur-sm">
                <FileCheck2 className="h-5 w-5 text-clay" />
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/45">Data de geração</p>
                <p className="metric-number mt-1 text-2xl font-bold text-ink">{isOfficialBase ? baseMetadata.dataGeracao.replaceAll("/", ".") : "Importada"}</p>
              </div>
            </div>
          </div>
        </div>

        <InfoCard
          title="Métricas rápidas"
          intro="Destaques calculados a partir da vista corrente para orientar a exploração."
          items={[
            { label: "Valor médio por grupo beneficiário–processo", value: formatCurrency(stats.valorMedioPorRegistro), icon: <CircleDollarSign className="h-4 w-4" /> },
            { label: "Maior pagamento individual", value: formatCurrency(stats.maiorPagamento), icon: <Banknote className="h-4 w-4" /> },
            { label: "Menor pagamento individual", value: formatCurrency(stats.menorPagamento), icon: <Banknote className="h-4 w-4" /> },
            { label: "Curso com maior investimento", value: stats.cursoMaiorInvestimento, icon: <GraduationCap className="h-4 w-4" /> },
            { label: "Curso com mais alunos", value: stats.cursoMaisAlunos, icon: <Users className="h-4 w-4" /> },
            { label: "Conta com maior volume", value: stats.contaMaiorVolume, icon: <Landmark className="h-4 w-4" /> },
            { label: "Despesa com maior investimento", value: stats.despesaMaiorInvestimento, icon: <WalletCards className="h-4 w-4" /> },
            { label: "Fonte mais utilizada", value: stats.fonteMaisUtilizada, icon: <Database className="h-4 w-4" /> },
          ]}
        />
      </section>

      <section aria-labelledby="graficos" className="mt-9">
        <div className="mb-4">
          <p className="eyebrow">Distribuições</p>
          <h2 id="graficos" className="mt-1 font-serif text-2xl font-bold text-ink">
            Leitura visual dos pagamentos
          </h2>
        </div>
        <DashboardCharts />
      </section>

      <footer className="mt-10 flex flex-col gap-3 border-t border-line py-6 text-[10px] leading-5 text-ink/42 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Fonte: {sourceLabel}. Pactuação {selectedPactuacao}; anos de pagamento {stats.anosPagamento.join(", ") || "não identificados"}.
        </p>
        <p className="font-mono uppercase tracking-[0.08em]">
          Processamento local · Dados sujeitos à conferência documental
        </p>
      </footer>
    </main>
  );
}
