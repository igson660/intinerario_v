/** Atlas Cívico: cabeçalho contextual com proveniência dos dados sempre à vista. */
"use client";

import { useData } from "@/contexts/DataContext";
import { FileUp, Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenImport: () => void;
}

function pageContext(pathname: string) {
  if (pathname.startsWith("/pesquisa"))
    return ["Consulta", "Pesquisa de beneficiários"];
  if (pathname.startsWith("/beneficiario"))
    return ["Consulta", "Perfil do beneficiário"];
  return ["Análise", "Visão geral"];
}

export function Navbar({ onOpenMenu, onOpenImport }: NavbarProps) {
  const pathname = usePathname();
  const [section, page] = pageContext(pathname);
  const { sourceLabel } = useData();

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-canvas/90 backdrop-blur-xl">
      <div className="flex h-20 items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Abrir menu"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-paper text-ink shadow-sm hover:border-rubber hover:text-rubber lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          href="/dashboard"
          className="flex shrink-0 items-center gap-2 lg:hidden"
          aria-label="Bolsa — visão geral"
        >
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-line bg-paper shadow-sm">
            <img
              src="/manus-storage/bolsa-clara-logo-v2_3f7cd8ad.png"
              alt=""
              className="h-8 w-8 object-contain"
            />
          </span>
          <span className="font-serif text-sm font-bold tracking-[-0.025em] text-ink sm:text-base">
            Bolsa
          </span>
        </Link>

        <div className="hidden min-w-0 lg:block">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-rubber">
            {section}
          </p>
          <h2 className="truncate text-sm font-bold text-ink sm:text-base">
            {page}
          </h2>
        </div>

        <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3">
          <div
            title={sourceLabel}
            className="hidden max-w-[260px] items-center gap-2 rounded-full border border-line bg-paper px-3 py-2 font-mono text-[9px] uppercase tracking-[0.09em] text-ink/55 shadow-sm xl:flex"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-rubber shadow-[0_0_0_4px_rgba(23,107,87,0.1)]" />
            <span className="truncate">{sourceLabel}</span>
          </div>

          <Link
            href="/pesquisa"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-paper text-ink shadow-sm hover:border-rubber hover:text-rubber sm:hidden"
            aria-label="Pesquisar beneficiários"
          >
            <Search className="h-4 w-4" />
          </Link>

          <Link
            href="/pesquisa"
            className="hidden h-10 items-center gap-2 rounded-xl border border-line bg-paper px-3 text-xs font-bold text-ink shadow-sm hover:border-rubber hover:text-rubber sm:flex"
          >
            <Search className="h-4 w-4" />
            Pesquisar
          </Link>

          <button
            type="button"
            onClick={onOpenImport}
            className="flex h-10 items-center gap-2 rounded-xl bg-rubber px-3 text-xs font-bold text-white shadow-sm hover:bg-rubber-dark sm:px-4"
          >
            <FileUp className="h-4 w-4" />
            <span className="hidden sm:inline">Importar</span>
          </button>
        </div>
      </div>
    </header>
  );
}
