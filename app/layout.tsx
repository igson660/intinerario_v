/** Atlas Cívico: o layout global preserva contexto, autoridade institucional e navegação clara. */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: {
    default: "Bolsa Clara | Painel de Assistência Estudantil",
    template: "%s | Bolsa Clara",
  },
  description:
    "Consulta e análise dos pagamentos de assistência estudantil do relatório SICAF de 2023.",
  icons: {
    icon: "/manus-storage/bolsa-clara-logo-v2_3f7cd8ad.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
