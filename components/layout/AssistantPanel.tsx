"use client";

import { X, Sparkles } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

const actions = [
  "Перевести мою мысль",
  "Объяснить фразу",
  "Помочь начать запись",
  "Предложить тему для разговора",
  "Повторить новые слова"
];

export function AssistantPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-graphite/20 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="AI-помощник AiLisa">
      <div className="ml-auto flex h-full max-w-md flex-col rounded-[30px] border border-white/80 bg-surface p-6 shadow-lift">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-light">
              <Sparkles className="h-5 w-5 text-graphite" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold">AiLisa рядом</h2>
              <p className="text-sm text-muted">Спокойная помощь без давления</p>
            </div>
          </div>
          <button className="focus-ring rounded-full p-2 text-muted hover:bg-sage-light hover:text-graphite" onClick={onClose} aria-label="Закрыть AI-помощника">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-8 rounded-[26px] bg-sage-light/70 p-5">
          <p className="text-sm leading-6 text-graphite">
            Давай начнём с одной простой мысли. Что сегодня было для тебя важным?
          </p>
        </div>
        <div className="mt-6 space-y-3">
          {actions.map((action) => (
            <SecondaryButton key={action} className="w-full justify-start">
              {action}
            </SecondaryButton>
          ))}
        </div>
        <div className="mt-auto flex gap-3 pt-6">
          <PrimaryButton className="flex-1">Начать</PrimaryButton>
          <SecondaryButton onClick={onClose}>Позже</SecondaryButton>
        </div>
      </div>
    </div>
  );
}
