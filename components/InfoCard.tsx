/** Atlas Cívico: síntese textual para traduzir números em decisões sem ornamentação excessiva. */
import type { ReactNode } from "react";

interface InfoItem {
  label: string;
  value: string;
  icon?: ReactNode;
}

export function InfoCard({ title, intro, items }: { title: string; intro: string; items: InfoItem[] }) {
  return (
    <section className="sheet overflow-hidden border border-white/70">
      <div className="relative overflow-hidden bg-[#102E3F] px-6 py-6 text-white">
        <div className="absolute inset-0 opacity-20 cartographic-grid" />
        <div className="relative">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#78D5B6]">
            Leitura rápida
          </p>
          <h3 className="mt-2 font-serif text-2xl font-bold">{title}</h3>
          <p className="mt-2 max-w-xl text-xs leading-6 text-white/58">{intro}</p>
        </div>
      </div>
      <div className="divide-y divide-line">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 px-5 py-4">
            {item.icon && (
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-rubber/8 text-rubber">
                {item.icon}
              </span>
            )}
            <span className="min-w-0 flex-1 text-[11px] font-semibold leading-5 text-ink/52">
              {item.label}
            </span>
            <strong className="max-w-[55%] text-right text-xs font-extrabold leading-5 text-ink">
              {item.value}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}
