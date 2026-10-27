/** Atlas Cívico: modal de importação claro, verificável e sem falsas promessas sobre o parsing. */
"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useData } from "@/contexts/DataContext";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  RotateCcw,
  UploadCloud,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

interface ImportDataDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImportDataDialog({ open, onOpenChange }: ImportDataDialogProps) {
  const { importText, restoreOriginal, selectedPactuacao } = useData();
  const [raw, setRaw] = useState("");
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const readFile = async (file?: File) => {
    if (!file) return;
    if (!file.name.toLocaleLowerCase().endsWith(".txt")) {
      setMessage({ type: "error", text: "Seleccione um ficheiro de texto (.txt)." });
      return;
    }
    setRaw(await file.text());
    setFileName(file.name);
    setMessage(null);
  };

  const submit = () => {
    try {
      const count = importText(raw, fileName || "Texto colado manualmente");
      setMessage({ type: "success", text: `${count} grupos foram reconhecidos e associados à Pactuação ${selectedPactuacao}.` });
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Não foi possível interpretar a base.",
      });
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-ink/45 backdrop-blur-sm data-[state=open]:animate-[fadeUp_220ms_var(--ease-out)]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[100] max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[22px] bg-paper shadow-float focus:outline-none">
          <div className="relative overflow-hidden border-b border-line px-6 py-6 sm:px-8">
            <div className="absolute inset-y-0 right-0 w-52 opacity-45 [background-image:url('/manus-storage/atlas-civico-records-v2_41d81591.png')] bg-cover bg-center" />
            <div className="relative max-w-md">
              <p className="eyebrow">Processamento no navegador</p>
              <Dialog.Title className="mt-2 font-serif text-2xl font-bold text-ink sm:text-3xl">
                Importar uma base textual
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm leading-6 text-ink/60">
                Use o texto extraído de um relatório com a mesma estrutura SICAF. A base actual será
                substituída apenas nesta sessão e somente na pactuação seleccionada.
              </Dialog.Description>
            </div>
            <Dialog.Close className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-paper/80 text-ink/55 backdrop-blur hover:text-ink">
              <X className="h-5 w-5" />
              <span className="sr-only">Fechar</span>
            </Dialog.Close>
          </div>

          <div className="space-y-5 p-6 sm:p-8">
            <div className="rounded-xl border border-rubber/20 bg-rubber/[0.05] px-4 py-3 text-xs leading-5 text-ink/65">
              Destino: <strong>Pactuação {selectedPactuacao}</strong>. O ano da data de pagamento é um exercício financeiro separado e não altera este destino. Sem processo SEI confiável, registros são mantidos separados para evitar fusões indevidas.
            </div>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                void readFile(event.dataTransfer.files[0]);
              }}
              className="group flex w-full items-center gap-4 rounded-2xl border border-dashed border-rubber/40 bg-rubber/[0.04] p-5 text-left hover:border-rubber hover:bg-rubber/[0.07]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-rubber text-white shadow-sm">
                <UploadCloud className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold text-ink">Escolher ou arrastar ficheiro .txt</span>
                <span className="mt-1 block truncate text-xs text-ink/50">
                  {fileName || "O ficheiro é lido localmente e não é enviado."}
                </span>
              </span>
              <FileText className="ml-auto hidden h-5 w-5 text-ink/25 sm:block" />
            </button>
            <input
              ref={fileRef}
              type="file"
              accept=".txt,text/plain"
              className="hidden"
              onChange={(event) => void readFile(event.target.files?.[0])}
            />

            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40">ou cole o texto</span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <textarea
              value={raw}
              onChange={(event) => {
                setRaw(event.target.value);
                setFileName("");
                setMessage(null);
              }}
              placeholder="Cole aqui o texto extraído do relatório…"
              className="min-h-44 w-full resize-y rounded-2xl border border-line bg-white p-4 font-mono text-xs leading-6 text-ink shadow-inner placeholder:text-ink/30 focus:border-rubber focus:outline-none"
            />

            {message && (
              <div
                role="alert"
                className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                  message.type === "success"
                    ? "border-rubber/25 bg-rubber/[0.06] text-rubber-dark"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                )}
                <span>{message.text}</span>
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 border-t border-line pt-5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => {
                  restoreOriginal();
                  setRaw("");
                  setFileName("");
                  setMessage({ type: "success", text: "Base original restaurada na Pactuação 2023; Pactuações 2024–2026 sem dados." });
                }}
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-line px-4 text-xs font-bold text-ink hover:border-clay hover:text-clay sm:mr-auto"
              >
                <RotateCcw className="h-4 w-4" />
                Restaurar base original
              </button>
              <Dialog.Close className="h-11 rounded-xl px-5 text-xs font-bold text-ink/60 hover:bg-ink/5">
                Fechar
              </Dialog.Close>
              <button
                type="button"
                onClick={submit}
                disabled={!raw.trim()}
                className="h-11 rounded-xl bg-rubber px-5 text-xs font-bold text-white shadow-sm hover:bg-rubber-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                Processar base
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
