/** Atlas Cívico: cada gráfico funciona como uma folha de análise com contexto, unidade e leitura guiada. */
import type { ReactNode } from "react";

interface ChartCardProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function ChartCard({
  eyebrow,
  title,
  description,
  children,
  className = "",
  action,
}: ChartCardProps) {
  return (
    <section className={`sheet min-w-0 overflow-hidden border border-white/70 ${className}`}>
      <header className="flex items-start gap-4 border-b border-line/80 px-5 py-5 sm:px-6">
        <div className="min-w-0">
          <p className="eyebrow">{eyebrow}</p>
          <h3 className="mt-2 font-serif text-xl font-bold tracking-tight text-ink">{title}</h3>
          <p className="mt-1 max-w-2xl text-[11px] leading-5 text-ink/48">{description}</p>
        </div>
        {action && <div className="ml-auto shrink-0">{action}</div>}
      </header>
      <div className="p-4 sm:p-6">{children}</div>
    </section>
  );
}
