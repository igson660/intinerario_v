/** Atlas Cívico: navegação vertical compacta, tinta azul e marca verde-seringueira como eixo visual. */
"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import {
  ChevronLeft,
  ChevronRight,
  FileInput,
  LayoutDashboard,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggle: () => void;
  onCloseMobile: () => void;
  onOpenImport: () => void;
}

const navItems = [
  { href: "/dashboard", label: "Visão geral", icon: LayoutDashboard },
  { href: "/pesquisa", label: "Pesquisar", icon: Search },
];

export function Sidebar({
  collapsed,
  mobileOpen,
  onToggle,
  onCloseMobile,
  onOpenImport,
}: SidebarProps) {
  const pathname = usePathname();
  const compact = collapsed ? "lg:w-[88px]" : "lg:w-[272px]";

  return (
    <>
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onCloseMobile}
        className={`fixed inset-0 z-40 bg-ink/35 backdrop-blur-sm transition-opacity lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label="Navegação principal"
        className={`fixed inset-y-0 left-0 z-50 flex w-[272px] flex-col overflow-visible bg-[#102E3F] text-white shadow-float transition-[width,transform] duration-300 ease-snap ${compact} ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-5">
          <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white/95 shadow-sm">
            <img
              src="/manus-storage/bolsa-clara-logo-v2_3f7cd8ad.png"
              alt="Símbolo Bolsa Clara"
              className="h-9 w-9 object-contain"
            />
          </div>
          <div className={`min-w-0 transition-opacity ${collapsed ? "lg:hidden" : "block"}`}>
            <p className="font-serif text-lg font-bold leading-none tracking-[-0.025em]">
              Bolsa <span className="text-[#78D5B6]">Clara</span>
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50">
              Assistência estudantil
            </p>
          </div>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onCloseMobile}
            className="ml-auto grid h-9 w-9 place-items-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Tooltip.Provider delayDuration={150}>
          <nav className="flex-1 space-y-2 px-3 py-6">
            <p className={`px-3 pb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 ${collapsed ? "lg:hidden" : ""}`}>
              Análise
            </p>
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              const Icon = item.icon;
              const link = (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onCloseMobile}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex h-12 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-white text-ink shadow-sm"
                      : "text-white/68 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <span
                    className={`absolute -left-3 h-6 w-1 rounded-r-full transition-colors ${
                      active ? "bg-[#4FC19C]" : "bg-transparent"
                    }`}
                  />
                  <Icon className={`h-5 w-5 shrink-0 ${active ? "text-rubber" : ""}`} />
                  <span className={collapsed ? "lg:hidden" : ""}>{item.label}</span>
                </Link>
              );

              return collapsed ? (
                <Tooltip.Root key={item.href}>
                  <Tooltip.Trigger asChild>{link}</Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="right"
                      sideOffset={12}
                      className="z-[80] rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white shadow-float"
                    >
                      {item.label}
                      <Tooltip.Arrow className="fill-ink" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              ) : (
                link
              );
            })}

            <div className="my-5 border-t border-white/10" />

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  type="button"
                  onClick={onOpenImport}
                  className="flex h-12 w-full items-center gap-3 rounded-xl px-3 text-sm font-semibold text-white/68 hover:bg-white/8 hover:text-white"
                >
                  <FileInput className="h-5 w-5 shrink-0" />
                  <span className={collapsed ? "lg:hidden" : ""}>Importar base</span>
                </button>
              </Tooltip.Trigger>
              {collapsed && (
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="right"
                    sideOffset={12}
                    className="z-[80] rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white shadow-float"
                  >
                    Importar base
                    <Tooltip.Arrow className="fill-ink" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              )}
            </Tooltip.Root>
          </nav>
        </Tooltip.Provider>

        <div className="border-t border-white/10 p-4">
          <div className={`rounded-xl bg-white/[0.06] p-3 ${collapsed ? "lg:grid lg:place-items-center" : ""}`}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#78D5B6]" />
              <span className={`font-mono text-[9px] uppercase tracking-[0.12em] text-white/55 ${collapsed ? "lg:hidden" : ""}`}>
                Processamento local
              </span>
            </div>
            <p className={`mt-2 text-[11px] leading-5 text-white/42 ${collapsed ? "lg:hidden" : ""}`}>
              Nenhum dado é enviado para servidores externos.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
          className="absolute -right-4 top-28 hidden h-8 w-8 place-items-center rounded-full border border-line bg-paper text-ink shadow-sheet hover:border-rubber hover:text-rubber lg:grid"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </aside>
    </>
  );
}
