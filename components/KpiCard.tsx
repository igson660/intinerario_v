/** Atlas Cívico: indicadores com hierarquia editorial, faixa de tinta e densidade respirável. */
import type { LucideIcon } from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
  tone?: "rubber" | "clay" | "ink" | "sage";
  className?: string;
  delay?: number;
}

const tones = {
  rubber: {
    icon: "bg-rubber/10 text-rubber",
    stripe: "bg-rubber",
  },
  clay: {
    icon: "bg-clay/10 text-clay",
    stripe: "bg-clay",
  },
  ink: {
    icon: "bg-ink/8 text-ink",
    stripe: "bg-ink",
  },
  sage: {
    icon: "bg-[#DDE8E0] text-rubber-dark",
    stripe: "bg-sage",
  },
};

export function KpiCard({
  label,
  value,
  note,
  icon: Icon,
  tone = "rubber",
  className = "",
  delay = 0,
}: KpiCardProps) {
  const style = tones[tone];
  return (
    <article
      className={`sheet group relative min-h-[154px] overflow-hidden border border-white/70 p-5 transition-transform hover:-translate-y-0.5 hover:shadow-float ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className={`absolute inset-y-0 left-0 w-1 ${style.stripe}`} />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="eyebrow text-ink/48">{label}</p>
          <p className="metric-number mt-3 truncate text-[30px] font-bold leading-none tracking-tight text-ink">
            {value}
          </p>
        </div>
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${style.icon}`}>
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
        </span>
      </div>
      <p className="mt-4 text-[11px] leading-5 text-ink/50">{note}</p>
    </article>
  );
}
