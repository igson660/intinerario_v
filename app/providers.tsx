/** Atlas Cívico: fornecedores globais sem interface visual, preservando processamento local e privacidade. */
"use client";

import { DataProvider } from "@/contexts/DataContext";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <DataProvider>{children}</DataProvider>;
}
