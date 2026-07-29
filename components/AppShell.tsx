/** Atlas Cívico: moldura assimétrica que mantém navegação e contexto sem comprimir a área analítica. */
"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ImportDataDialog } from "./ImportDataDialog";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <div className="min-h-screen">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggle={() => setCollapsed((value) => !value)}
        onCloseMobile={() => setMobileOpen(false)}
        onOpenImport={() => setImportOpen(true)}
      />
      <div
        className={`min-h-screen transition-[padding] duration-300 ease-snap ${
          collapsed ? "lg:pl-[88px]" : "lg:pl-[272px]"
        }`}
      >
        <Navbar onOpenMenu={() => setMobileOpen(true)} onOpenImport={() => setImportOpen(true)} />
        {children}
      </div>
      <ImportDataDialog open={importOpen} onOpenChange={setImportOpen} />
    </div>
  );
}
