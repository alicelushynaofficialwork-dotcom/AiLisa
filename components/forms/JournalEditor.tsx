"use client";

import { useState } from "react";
import { Mic, Wand2 } from "lucide-react";
import { MoodSelector } from "@/components/forms/MoodSelector";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

export function JournalEditor() {
  const [showResult, setShowResult] = useState(false);
  const [text, setText] = useState("Сегодня я думаю о том, как важно говорить проще и смелее.");

  return (
    <section className="card p-6 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted">10 июля</p>
          <h2 className="mt-2 font-display text-4xl font-semibold">Расскажи о своём дне</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Пиши так, как чувствуешь. AiLisa поможет выразить это на английском.
          </p>
        </div>
        <MoodSelector />
      </div>
      <textarea
        className="focus-ring mt-7 min-h-64 w-full resize-none rounded-[26px] border border-graphite/10 bg-white/70 p-5 text-base leading-7 placeholder:text-muted"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Сегодня я думаю о..."
      />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <SecondaryButton>
          <Mic className="h-4 w-4" aria-hidden="true" />
          Голосовой ввод
        </SecondaryButton>
        <PrimaryButton>Сохранить</PrimaryButton>
        <SecondaryButton onClick={() => setShowResult(true)}>
          <Wand2 className="h-4 w-4" aria-hidden="true" />
          Показать на английском
        </SecondaryButton>
        <SecondaryButton>Объяснить исправления</SecondaryButton>
      </div>
      {showResult && (
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[24px] bg-blush-light/65 p-5">
            <h3 className="font-semibold">Мой текст</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </div>
          <div className="rounded-[24px] bg-sage-light/75 p-5">
            <h3 className="font-semibold">Естественный английский</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Today I am thinking about how important it is to speak more simply and more bravely.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
