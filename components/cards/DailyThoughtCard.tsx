"use client";

import { ArrowRight, PenLine } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

export function DailyThoughtCard() {
  return (
    <section className="card overflow-hidden p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-muted">Сегодняшняя мысль</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-graphite">Запиши день так, как он звучит внутри</h2>
          <textarea
            className="focus-ring mt-6 min-h-36 w-full resize-none rounded-[24px] border border-graphite/10 bg-white/70 p-5 text-base leading-7 text-graphite placeholder:text-muted"
            placeholder="О чём ты думаешь сегодня?"
          />
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>
              <PenLine className="h-4 w-4" aria-hidden="true" />
              Написать день
            </PrimaryButton>
            <SecondaryButton>
              Показать на английском
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </SecondaryButton>
          </div>
        </div>
        <div className="relative min-h-72 rounded-[30px] bg-gradient-to-br from-blush-light via-white to-sage-light p-6">
          <div className="absolute bottom-8 left-1/2 h-40 w-px -translate-x-1/2 bg-gold/60" />
          <div className="absolute bottom-32 left-1/2 h-20 w-20 origin-bottom -translate-x-[75%] rotate-[-28deg] rounded-[80%_20%_80%_20%] bg-sage/70" />
          <div className="absolute bottom-36 left-1/2 h-24 w-24 origin-bottom -translate-x-[18%] rotate-[28deg] rounded-[20%_80%_20%_80%] bg-blush/70" />
          <div className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full border border-gold/30 bg-gold-light/60 blur-sm" />
          <p className="relative z-10 max-w-44 text-sm leading-6 text-muted">Мягкая линия роста превращает мысль в язык.</p>
        </div>
      </div>
    </section>
  );
}
