/** Atlas Cívico: perfil individual organizado como dossiê, com identidade, contexto e trilho financeiro. */
"use client";

import { useData } from "@/contexts/DataContext";
import { formatCpf, formatCurrency, formatNumber } from "@/lib/formatters";
import type { Pagamento } from "@/lib/types";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  Check,
  Clipboard,
  FileKey2,
  GraduationCap,
  Landmark,
  ReceiptText,
  Search,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function BeneficiaryDetail({ cpf }: { cpf: string }) {
  const { records } = useData();
  const beneficiary = records.find((record) => record.cpf === cpf);

  if (!beneficiary) {
    return (
      <main className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-3xl place-items-center px-4 py-10 text-center">
        <div>
          <img
            src="/manus-storage/atlas-civico-search-v2_2ff186ff.png"
            alt="Pesquisa em registos"
            className="mx-auto h-52 w-72 object-cover mix-blend-multiply"
          />
          <h1 className="mt-5 font-serif text-3xl font-bold text-ink">Beneficiário não encontrado</h1>
          <p className="mt-2 text-sm leading-6 text-ink/50">
            Este CPF não está presente na base actualmente carregada.
          </p>
          <Link href="/pesquisa" className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-rubber px-5 text-xs font-bold text-white hover:bg-rubber-dark">
            <Search className="h-4 w-4" />
            Voltar à pesquisa
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1520px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <Link href="/pesquisa" className="mb-4 inline-flex h-9 items-center gap-2 rounded-xl border border-line bg-paper px-3 text-[11px] font-bold text-ink shadow-sm hover:border-rubber hover:text-rubber">
        <ArrowLeft className="h-4 w-4" />
        Voltar à pesquisa
      </Link>

      <section
        className="sheet relative min-h-[330px] overflow-hidden border border-white/70 bg-cover bg-[80%_center] p-6 sm:p-8 lg:p-10"
        style={{ backgroundImage: "url('/manus-storage/atlas-civico-beneficiary-v2_0e4923da.png')" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFDF8_0%,rgba(255,253,248,0.98)_48%,rgba(255,253,248,0.35)_83%,rgba(255,253,248,0.05)_100%)]" />
        <div className="relative flex min-h-[250px] max-w-3xl flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-2 rounded-full bg-rubber/10 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-rubber">
                <BadgeCheck className="h-3.5 w-3.5" />
                Registo consolidado
              </span>
              <span className="rounded-full bg-ink/6 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/55">
                {formatNumber(beneficiary.quantidadePagamentos)} {beneficiary.quantidadePagamentos === 1 ? "pagamento" : "pagamentos"}
              </span>
            </div>
            <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/42">
              Beneficiário
            </p>
            <h1 className="mt-2 max-w-2xl font-serif text-[35px] font-bold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[48px]">
              {beneficiary.nome}
            </h1>
            <p className="mono-value mt-3 text-sm text-rubber">{formatCpf(beneficiary.cpf)}</p>
          </div>
          <div className="mt-7 flex flex-wrap items-end gap-x-8 gap-y-4">
            <div>
              <p className="eyebrow text-ink/48">Valor total recebido</p>
              <p className="metric-number mt-2 text-[38px] font-bold leading-none tracking-tight text-rubber sm:text-[48px]">
                {formatCurrency(beneficiary.valorTotalRecebido)}
              </p>
            </div>
            <p className="mb-1 max-w-sm border-l border-line pl-4 text-[11px] font-semibold leading-5 text-ink/52">
              {beneficiary.curso}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="cadastro" className="mt-5">
        <div className="mb-3 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Identificação</p>
            <h2 id="cadastro" className="mt-1 font-serif text-2xl font-bold text-ink">Dados do registo</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <DetailCard icon={<Clipboard className="h-4 w-4" />} label="CPF" value={formatCpf(beneficiary.cpf)} copyValue={formatCpf(beneficiary.cpf)} />
          <DetailCard icon={<GraduationCap className="h-4 w-4" />} label="Curso" value={beneficiary.curso} />
          <DetailCard icon={<FileKey2 className="h-4 w-4" />} label="Processo SEI" value={beneficiary.processoSei || "Não informado"} copyValue={beneficiary.processoSei} />
          <DetailCard icon={<ReceiptText className="h-4 w-4" />} label="Pagamentos" value={formatNumber(beneficiary.quantidadePagamentos)} />
        </div>
      </section>

      <section aria-labelledby="historico" className="sheet mt-7 overflow-hidden border border-white/70">
        <header className="flex flex-col gap-3 border-b border-line px-5 py-5 sm:flex-row sm:items-end sm:px-6">
          <div>
            <p className="eyebrow">Trilho financeiro</p>
            <h2 id="historico" className="mt-1 font-serif text-2xl font-bold text-ink">Histórico de pagamentos</h2>
            <p className="mt-1 text-[11px] leading-5 text-ink/46">
              Todos os campos foram preservados conforme a estrutura do relatório de origem.
            </p>
          </div>
          <span className="sm:ml-auto rounded-full bg-rubber/8 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-rubber">
            {formatCurrency(beneficiary.valorTotalRecebido)} acumulados
          </span>
        </header>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1240px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line bg-canvas/55">
                {["Data", "Nota de pagamento", "Liquidação", "Empenho", "Conta financeira", "Despesa", "Fonte", "Valor"].map((heading) => (
                  <th key={heading} className="px-5 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/42">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {beneficiary.pagamentos.map((payment, index) => (
                <PaymentRow key={`${payment.notaPagamento}-${index}`} payment={payment} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="divide-y divide-line lg:hidden">
          {beneficiary.pagamentos.map((payment, index) => (
            <PaymentCard key={`${payment.notaPagamento}-${index}`} payment={payment} index={index} />
          ))}
        </div>
      </section>

      <footer className="mt-8 flex flex-col gap-2 border-t border-line py-5 text-[10px] leading-5 text-ink/42 sm:flex-row sm:justify-between">
        <p>Perfil gerado a partir da base SICAF processada localmente.</p>
        <p className="font-mono uppercase tracking-[0.08em]">CPF utilizado apenas para identificação do registo</p>
      </footer>
    </main>
  );
}

function DetailCard({ icon, label, value, copyValue }: { icon: React.ReactNode; label: string; value: string; copyValue?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    if (!copyValue) return;
    await navigator.clipboard.writeText(copyValue);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };
  return (
    <article className="sheet relative min-h-32 border border-white/70 p-5">
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-rubber/9 text-rubber">{icon}</span>
        <div className="min-w-0 flex-1">
          <p className="eyebrow text-ink/42">{label}</p>
          <p className="mt-2 break-words text-xs font-extrabold leading-5 text-ink">{value}</p>
        </div>
        {copyValue && (
          <button type="button" onClick={() => void copy()} className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-ink/35 hover:bg-rubber/8 hover:text-rubber" aria-label={`Copiar ${label}`}>
            {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          </button>
        )}
      </div>
    </article>
  );
}

function PaymentRow({ payment }: { payment: Pagamento }) {
  return (
    <tr className="hover:bg-rubber/[0.035]">
      <td className="whitespace-nowrap px-5 py-4 font-mono text-[10px] font-semibold text-ink">{payment.dataPagamento}</td>
      <td className="px-5 py-4 font-mono text-[10px] text-ink/55">{payment.notaPagamento || "—"}</td>
      <td className="px-5 py-4 font-mono text-[10px] text-ink/55">{payment.liquidacao || "—"}</td>
      <td className="px-5 py-4 font-mono text-[10px] text-ink/55">{payment.empenho || "—"}</td>
      <td className="px-5 py-4 font-mono text-[10px] text-ink/55">{payment.contaFinanceira || "—"}</td>
      <td className="px-5 py-4 font-mono text-[10px] text-ink/55">{payment.despesa || "—"}</td>
      <td className="px-5 py-4 font-mono text-[10px] text-ink/55">{payment.fonte || "—"}</td>
      <td className="whitespace-nowrap px-5 py-4 text-right font-mono text-[10px] font-semibold text-rubber">{formatCurrency(payment.valor)}</td>
    </tr>
  );
}

function PaymentCard({ payment, index }: { payment: Pagamento; index: number }) {
  const fields = [
    ["Nota de pagamento", payment.notaPagamento || "—"],
    ["Liquidação", payment.liquidacao || "—"],
    ["Empenho", payment.empenho || "—"],
    ["Conta financeira", payment.contaFinanceira || "—"],
    ["Despesa", payment.despesa || "—"],
    ["Fonte", payment.fonte || "—"],
  ];
  return (
    <article className="p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-rubber text-xs font-bold text-white">{index + 1}</span>
        <div>
          <p className="flex items-center gap-2 text-xs font-extrabold text-ink"><CalendarDays className="h-3.5 w-3.5 text-rubber" />{payment.dataPagamento}</p>
          <p className="mono-value mt-1 text-sm font-semibold text-rubber">{formatCurrency(payment.valor)}</p>
        </div>
      </div>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        {fields.map(([label, value]) => (
          <div key={label} className="rounded-xl bg-canvas/55 p-3">
            <dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/38">{label}</dt>
            <dd className="mono-value mt-1 break-words text-[10px] leading-5 text-ink/62">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
