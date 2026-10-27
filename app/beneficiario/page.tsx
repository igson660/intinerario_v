"use client";

import { BeneficiaryDetail } from "@/components/BeneficiaryDetail";
import { useData } from "@/contexts/DataContext";
import { parsePactuacaoAno } from "@/lib/pactuacoes";
import { useEffect, useState } from "react";

export default function BeneficiaryLookupPage() {
  const { setSelectedPactuacao } = useData();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pactuacao = parsePactuacaoAno(params.get("pactuacao"));
    if (pactuacao) setSelectedPactuacao(pactuacao);
    setSlug(params.get("id") ?? "");
  }, [setSelectedPactuacao]);

  if (slug === null) {
    return (
      <main className="grid min-h-[calc(100vh-5rem)] place-items-center px-4 text-sm text-ink/50" aria-live="polite">
        Carregando perfil…
      </main>
    );
  }

  return <BeneficiaryDetail slug={slug} />;
}
