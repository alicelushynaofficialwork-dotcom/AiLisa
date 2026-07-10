"use client";

import { useState } from "react";
import { Mic, Pause, Sparkles } from "lucide-react";
import { AICompanionCard } from "@/components/cards/AICompanionCard";
import { SpeakingTopicCard } from "@/components/cards/SpeakingTopicCard";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { companions, speakingTopics } from "@/data/mockData";

const states = ["Начать разговор", "Я слушаю", "AiLisa думает", "Продолжить"];

export function SpeakingView() {
  const [stateIndex, setStateIndex] = useState(0);

  return (
    <div className="space-y-7">
      <section className="card p-6 md:p-8">
        <p className="text-sm text-muted">Speaking Space</p>
        <h2 className="mt-2 font-display text-5xl font-semibold">Поговорим?</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Выбери тему и практикуй английский без страха ошибиться.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {speakingTopics.map((topic, index) => (
            <SpeakingTopicCard key={topic.title} topic={topic} active={index === 1} />
          ))}
        </div>
      </section>
      <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="card p-6 md:p-7">
          <h2 className="font-display text-3xl font-semibold">Собеседник</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {companions.map((companion, index) => (
              <AICompanionCard key={companion.name} companion={companion} active={index === 0} />
            ))}
          </div>
        </section>
        <section className="card p-6 text-center md:p-8">
          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-sage/40 bg-sage-light shadow-soft">
            <button
              className="focus-ring flex h-24 w-24 items-center justify-center rounded-full bg-graphite text-white shadow-lift hover:bg-[#343733]"
              onClick={() => setStateIndex((stateIndex + 1) % states.length)}
              aria-label="Управление разговором"
            >
              {stateIndex === 1 ? <Pause className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
            </button>
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold">{states[stateIndex]}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
            Попробуй рассказать, почему эта цель важна для тебя.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton>
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Продолжить
            </PrimaryButton>
            <SecondaryButton>Можно сказать ещё естественнее</SecondaryButton>
          </div>
          <div className="mt-7 rounded-[24px] bg-white/70 p-5 text-left">
            <h3 className="font-semibold">Transcript</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Lisa: What is one dream you want to describe today?
            </p>
            <p className="mt-2 text-sm leading-6 text-graphite">
              You: I want to speak more confidently when I talk about my plans.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
