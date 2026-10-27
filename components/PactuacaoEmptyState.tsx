"use client";

import { useData } from "@/contexts/DataContext";
import { ArrowRight, Layers3 } from "lucide-react";

export function PactuacaoEmptyState() {
  const { selectedPactuacao, setSelectedPactuacao } = useData();

  return (
    <main className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-5xl place-items-center px-4 py-10 sm:px-6 lg:px-8">
      <section className="sheet w-full max-w-3xl border border-white/70 p-7 text-center sm:p-10">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-rubber/10 text-rubber">
          <Layers3 className="h-7 w-7" />
        </span>
        <p className="eyebrow mt-5">Pactuação {selectedPactuacao} · aguardando dados</p>
        <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Esta pactuação ainda não tem dados carregados.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink/60">
          O conjunto que já existe está associado à Pactuação 2023. Os anos de pagamento (exercícios financeiros) são uma dimensão separada e não determinam o ano da pactuação.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-ink/45">
          Para preencher esta camada, escolha <strong>Importar</strong> no topo. O arquivo será associado somente à Pactuação {selectedPactuacao} e ficará disponível nesta sessão.
        </p>
        {selectedPactuacao !== 2023 && (
          <button
            type="button"
            onClick={() => setSelectedPactuacao(2023)}
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-rubber px-5 text-xs font-bold text-white hover:bg-rubber-dark"
          >
            Ver Pactuação 2023
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </section>
    </main>
  );
}
