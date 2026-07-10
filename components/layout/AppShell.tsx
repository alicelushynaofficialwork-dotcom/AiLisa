"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AssistantPanel } from "@/components/layout/AssistantPanel";
import { Header } from "@/components/layout/Header";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function AppShell({ children, activePath }: { children: React.ReactNode; activePath: string }) {
  const [isAssistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AppSidebar activePath={activePath} />
      <main className="pb-28 lg:ml-72 lg:pb-10">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          <Header onAssistantOpen={() => setAssistantOpen(true)} />
          {children}
        </div>
      </main>
      <button
        className="focus-ring fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-graphite text-white shadow-lift hover:bg-[#343733] lg:bottom-8 lg:right-8"
        onClick={() => setAssistantOpen(true)}
        aria-label="Открыть AI-помощника"
      >
        <Bot className="h-6 w-6" aria-hidden="true" />
      </button>
      <AssistantPanel isOpen={isAssistantOpen} onClose={() => setAssistantOpen(false)} />
      <MobileNavigation activePath={activePath} />
    </div>
  );
}
