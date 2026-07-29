/** Atlas Cívico: gráficos de tinta contida, tooltips claros e leitura consistente em qualquer tamanho. */
"use client";

import { ChartCard } from "@/components/ChartCard";
import { useData } from "@/contexts/DataContext";
import {
  beneficiariesByCourse,
  monthlyEvolution,
  paymentDistribution,
  resourcesByAccount,
  resourcesByCourse,
  resourcesByExpense,
  resourcesBySource,
  resourcesByYear,
  topBeneficiaries,
} from "@/lib/charts";
import { formatCompactCurrency, formatCurrency, formatNumber, shortLabel } from "@/lib/formatters";
import type { AggregateDatum } from "@/lib/types";
import { BadgeDollarSign, CalendarDays, GraduationCap, Landmark } from "lucide-react";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PALETTE = ["#176B57", "#C9823B", "#17324D", "#7EA58C", "#D3AA69", "#597A94", "#A7B8AB"];

type TooltipPayload = {
  payload?: AggregateDatum;
  value?: number;
  name?: string;
};

function ValueTooltip({
  active,
  payload,
  label,
  currency = true,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
  currency?: boolean;
}) {
  if (!active || !payload?.length) return null;
  const datum = payload[0]?.payload;
  const value = Number(payload[0]?.value ?? datum?.valor ?? 0);
  return (
    <div className="min-w-40 rounded-xl border border-line bg-paper px-4 py-3 shadow-float">
      <p className="max-w-64 text-[11px] font-extrabold leading-4 text-ink">{label || datum?.name}</p>
      <p className="mono-value mt-2 text-xs font-semibold text-rubber">
        {currency ? formatCurrency(value) : formatNumber(value)}
      </p>
      {datum && currency && (
        <p className="mt-1 text-[10px] text-ink/42">
          {formatNumber(datum.quantidade)} {datum.quantidade === 1 ? "pagamento" : "pagamentos"}
        </p>
      )}
    </div>
  );
}

function EmptyChart() {
  return (
    <div className="grid h-[260px] place-items-center rounded-xl border border-dashed border-line bg-canvas/50 text-center">
      <div>
        <p className="font-serif text-lg font-bold text-ink">Sem dados nesta vista</p>
        <p className="mt-1 text-xs text-ink/45">Ajuste ou limpe os filtros globais.</p>
      </div>
    </div>
  );
}

function ChartBadge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 rounded-full bg-rubber/8 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-rubber">
      {icon}
      {children}
    </span>
  );
}

export function DashboardCharts() {
  const { filteredRecords } = useData();
  const data = useMemo(
    () => ({
      byYear: resourcesByYear(filteredRecords),
      byCourse: resourcesByCourse(filteredRecords),
      peopleByCourse: beneficiariesByCourse(filteredRecords),
      byAccount: resourcesByAccount(filteredRecords),
      byExpense: resourcesByExpense(filteredRecords),
      bySource: resourcesBySource(filteredRecords),
      top: topBeneficiaries(filteredRecords),
      monthly: monthlyEvolution(filteredRecords),
      distribution: paymentDistribution(filteredRecords),
    }),
    [filteredRecords],
  );

  if (!filteredRecords.length) return <EmptyChart />;

  return (
    <div className="grid min-w-0 gap-5 xl:grid-cols-12">
      <ChartCard
        eyebrow="Tempo"
        title="Recursos por ano"
        description="Valor total pago em cada exercício identificado na base seleccionada."
        className="xl:col-span-5"
        action={<ChartBadge icon={<CalendarDays className="h-3.5 w-3.5" />}>Exercício</ChartBadge>}
      >
        {data.byYear.length === 1 ? (
          <SingleDatumReport data={data.byYear} note="O relatório concentra 100% dos recursos neste exercício." />
        ) : (
          <div className="h-[290px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.byYear} margin={{ top: 10, right: 8, left: -10, bottom: 0 }}>
                <CartesianGrid stroke="#E5E0D6" strokeDasharray="3 5" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#17324D", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={formatCompactCurrency} tick={{ fill: "#71808A", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<ValueTooltip />} cursor={{ fill: "rgba(23,107,87,0.05)" }} />
                <Bar dataKey="valor" fill="#176B57" radius={[5, 5, 0, 0]} maxBarSize={54} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </ChartCard>

      <ChartCard
        eyebrow="Formação"
        title="Recursos por curso"
        description="Cursos ordenados pelo investimento recebido no período filtrado."
        className="xl:col-span-7"
        action={<ChartBadge icon={<GraduationCap className="h-3.5 w-3.5" />}>{data.byCourse.length} cursos</ChartBadge>}
      >
        <div className="h-[290px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.byCourse.slice(0, 10)} layout="vertical" margin={{ left: 8, right: 16, top: 2, bottom: 2 }}>
              <CartesianGrid stroke="#E5E0D6" strokeDasharray="3 5" horizontal={false} />
              <XAxis type="number" tickFormatter={formatCompactCurrency} tick={{ fill: "#71808A", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" width={150} tickFormatter={(value) => shortLabel(value, 25)} tick={{ fill: "#17324D", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ValueTooltip />} cursor={{ fill: "rgba(23,107,87,0.05)" }} />
              <Bar dataKey="valor" fill="#176B57" radius={[0, 5, 5, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard
        eyebrow="Alcance"
        title="Beneficiários por curso"
        description="Pessoas únicas associadas a cada curso na selecção actual."
        className="xl:col-span-7"
      >
        <div className="h-[315px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.peopleByCourse.slice(0, 10)} layout="vertical" margin={{ left: 8, right: 16 }}>
              <CartesianGrid stroke="#E5E0D6" strokeDasharray="3 5" horizontal={false} />
              <XAxis type="number" allowDecimals={false} tick={{ fill: "#71808A", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" width={150} tickFormatter={(value) => shortLabel(value, 25)} tick={{ fill: "#17324D", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ValueTooltip currency={false} />} cursor={{ fill: "rgba(201,130,59,0.05)" }} />
              <Bar dataKey="quantidade" fill="#C9823B" radius={[0, 5, 5, 0]} barSize={15} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard
        eyebrow="Classificação"
        title="Conta financeira"
        description="Participação de cada conta no valor total processado."
        className="xl:col-span-5"
        action={<ChartBadge icon={<Landmark className="h-3.5 w-3.5" />}>{data.byAccount.length} conta</ChartBadge>}
      >
        <DonutChart data={data.byAccount} />
      </ChartCard>

      <ChartCard
        eyebrow="Natureza da despesa"
        title="Recursos por despesa"
        description="Composição dos pagamentos pelo código de despesa registado."
        className="xl:col-span-6"
      >
        <SimpleHorizontalBars data={data.byExpense} color="#17324D" />
      </ChartCard>

      <ChartCard
        eyebrow="Origem orçamental"
        title="Recursos por fonte"
        description="Distribuição financeira conforme o código da fonte de recurso."
        className="xl:col-span-6"
      >
        <DonutChart data={data.bySource} />
      </ChartCard>

      <ChartCard
        eyebrow="Ranking"
        title="Top 10 beneficiários"
        description="Maiores valores acumulados por beneficiário dentro dos filtros."
        className="xl:col-span-7"
        action={<ChartBadge icon={<BadgeDollarSign className="h-3.5 w-3.5" />}>Valor total</ChartBadge>}
      >
        <div className="h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.top} layout="vertical" margin={{ left: 8, right: 20 }}>
              <CartesianGrid stroke="#E5E0D6" strokeDasharray="3 5" horizontal={false} />
              <XAxis type="number" tickFormatter={formatCompactCurrency} tick={{ fill: "#71808A", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" width={152} tickFormatter={(value) => shortLabel(value, 23)} tick={{ fill: "#17324D", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ValueTooltip />} cursor={{ fill: "rgba(23,107,87,0.05)" }} />
              <Bar dataKey="valor" fill="#176B57" radius={[0, 5, 5, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard
        eyebrow="Cadência"
        title="Evolução mensal"
        description="Fluxo de recursos por mês de pagamento, na ordem cronológica."
        className="xl:col-span-5"
      >
        {data.monthly.length === 1 ? (
          <SingleDatumReport data={data.monthly} note="A base contém um único mês de pagamento; não há variação temporal a comparar." accent="clay" />
        ) : (
          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.monthly} margin={{ top: 14, right: 12, left: -6, bottom: 12 }}>
                <CartesianGrid stroke="#E5E0D6" strokeDasharray="3 5" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#71808A", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={formatCompactCurrency} tick={{ fill: "#71808A", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<ValueTooltip />} />
                <Line type="monotone" dataKey="valor" stroke="#C9823B" strokeWidth={3} dot={{ r: 4, fill: "#FFFDF8", stroke: "#C9823B", strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </ChartCard>

      <ChartCard
        eyebrow="Frequência"
        title="Quantidade de pagamentos por beneficiário"
        description="Pessoas agrupadas pela frequência de recebimento na base filtrada."
        className="xl:col-span-12"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-center">
          {data.distribution.filter((item) => item.quantidade > 0).length === 1 ? (
            <FrequencyReport item={data.distribution.find((item) => item.quantidade > 0)!} />
          ) : (
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data.distribution.filter((item) => item.quantidade > 0)} dataKey="quantidade" nameKey="name" cx="50%" cy="50%" innerRadius={66} outerRadius={108} paddingAngle={2} stroke="#FFFDF8" strokeWidth={3}>
                    {data.distribution.map((_, index) => (
                      <Cell key={index} fill={PALETTE[index % PALETTE.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<ValueTooltip currency={false} />} />
                  <Legend verticalAlign="bottom" iconType="circle" formatter={(value) => <span className="text-[10px] font-semibold text-ink/60">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
          <div className="space-y-3">
            {data.distribution.map((item, index) => (
              <div key={item.name} className="flex items-center gap-3 rounded-xl border border-line bg-canvas/45 px-4 py-3">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: PALETTE[index] }} />
                <span className="flex-1 text-[11px] font-semibold text-ink/55">{item.name}</span>
                <strong className="metric-number text-lg text-ink">{formatNumber(item.quantidade)}</strong>
              </div>
            ))}
          </div>
        </div>
      </ChartCard>
    </div>
  );
}

function DonutChart({ data }: { data: AggregateDatum[] }) {
  if (data.length === 1) {
    return <SingleDatumReport data={data} note="Uma única classificação responde por todo o valor processado nesta vista." />;
  }
  return (
    <div className="h-[315px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="valor" nameKey="name" cx="50%" cy="46%" innerRadius={66} outerRadius={103} paddingAngle={2} stroke="#FFFDF8" strokeWidth={3}>
            {data.map((_, index) => (
              <Cell key={index} fill={PALETTE[index % PALETTE.length]} />
            ))}
          </Pie>
          <Tooltip content={<ValueTooltip />} />
          <Legend verticalAlign="bottom" iconType="circle" formatter={(value) => <span className="text-[10px] font-semibold text-ink/60">{value}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function SimpleHorizontalBars({ data, color }: { data: AggregateDatum[]; color: string }) {
  if (data.length === 1) {
    return <SingleDatumReport data={data} note="A selecção apresenta uma única natureza de despesa, equivalente a 100% dos recursos." accent="ink" />;
  }
  return (
    <div className="h-[315px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 10, right: 18 }}>
          <CartesianGrid stroke="#E5E0D6" strokeDasharray="3 5" horizontal={false} />
          <XAxis type="number" tickFormatter={formatCompactCurrency} tick={{ fill: "#71808A", fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis type="category" dataKey="name" width={104} tickFormatter={(value) => shortLabel(value, 16)} tick={{ fill: "#17324D", fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip content={<ValueTooltip />} cursor={{ fill: "rgba(23,50,77,0.04)" }} />
          <Bar dataKey="valor" fill={color} radius={[0, 5, 5, 0]} maxBarSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function SingleDatumReport({
  data,
  note,
  accent = "rubber",
}: {
  data: AggregateDatum[];
  note: string;
  accent?: "rubber" | "clay" | "ink";
}) {
  const item = data[0];
  if (!item) return <EmptyChart />;
  const accentClasses = accent === "clay" ? "bg-clay text-clay" : accent === "ink" ? "bg-ink text-ink" : "bg-rubber text-rubber";
  const [barClass, textClass] = accentClasses.split(" ");
  return (
    <div className="cartographic-grid relative min-h-[290px] overflow-hidden rounded-xl border border-line bg-canvas/55 p-5 sm:p-6">
      <span className={`absolute inset-y-0 left-0 w-1 ${barClass}`} />
      <div className="relative flex h-full min-h-[242px] flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/42">Concentração integral</p>
            <h4 className="mt-3 max-w-xs font-serif text-2xl font-bold leading-tight text-ink">{item.name}</h4>
          </div>
          <span className={`metric-number text-4xl font-bold ${textClass}`}>100%</span>
        </div>
        <div>
          <p className="metric-number text-[34px] font-bold tracking-tight text-ink">{formatCurrency(item.valor)}</p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line">
            <div className={`h-full w-full rounded-full ${barClass}`} />
          </div>
          <div className="mt-4 flex items-start justify-between gap-5 border-t border-line pt-4">
            <p className="max-w-sm text-[10px] leading-5 text-ink/48">{note}</p>
            <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.08em] text-ink/42">
              {formatNumber(item.quantidade)} lançamentos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FrequencyReport({ item }: { item: AggregateDatum }) {
  return (
    <div className="cartographic-grid relative min-h-[280px] overflow-hidden rounded-xl border border-line bg-canvas/55 p-6">
      <span className="absolute inset-y-0 left-0 w-1 bg-rubber" />
      <div className="relative flex h-full min-h-[230px] flex-col justify-between">
        <div>
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-rubber">Padrão uniforme</p>
          <p className="metric-number mt-3 text-6xl font-bold leading-none text-ink">{formatNumber(item.quantidade)}</p>
          <p className="mt-2 font-serif text-xl font-bold text-ink">beneficiários no mesmo intervalo</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-rubber" />
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/48">{item.name}</span>
          </div>
          <p className="mt-3 max-w-md border-t border-line pt-3 text-[10px] leading-5 text-ink/48">
            Não há recorrência na base actual: cada pessoa aparece numa única faixa de frequência.
          </p>
        </div>
      </div>
    </div>
  );
}
