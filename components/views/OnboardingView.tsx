"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

const steps = [
  { title: "Как тебя зовут?", options: ["Алиса", "Можно позже"] },
  { title: "Зачем тебе английский?", options: ["Для путешествий", "Для работы", "Для общения", "Для уверенности", "Для личного развития"] },
  { title: "Как тебе комфортнее учиться?", options: ["Писать мысли", "Разговаривать", "Учить слова через жизнь", "Понемногу каждый день"] },
  { title: "О чём тебе интересно говорить?", options: ["Жизнь", "Мечты", "Работа", "Отношения", "Творчество", "Путешествия"] }
];

export function OnboardingView() {
  const [step, setStep] = useState(0);
  const isFinal = step >= steps.length;
  const progress = isFinal ? 100 : Math.round(((step + 1) / (steps.length + 1)) * 100);

  return (
    <section className="card mx-auto max-w-4xl p-6 md:p-10">
      <div className="h-2 overflow-hidden rounded-full bg-sage-light">
        <div className="h-full rounded-full bg-sage" style={{ width: `${progress}%` }} />
      </div>
      {isFinal ? (
        <div className="py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-light">
            <Check className="h-7 w-7 text-graphite" aria-hidden="true" />
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-5xl font-semibold">
            AiLisa готова расти вместе с тобой
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-muted">
            Мы собрали мягкую траекторию: дневник, речь и слова из твоей жизни.
          </p>
          <PrimaryButton className="mt-8">Начать</PrimaryButton>
        </div>
      ) : (
        <div className="py-8">
          <p className="text-sm text-muted">Шаг {step + 1} из {steps.length}</p>
          <h2 className="mt-3 font-display text-5xl font-semibold">{steps[step].title}</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {steps[step].options.map((option, index) => (
              <button
                key={option}
                className={`focus-ring min-h-14 rounded-[22px] border px-5 text-left text-sm font-medium ${
                  index === 0 ? "border-sage bg-sage-light" : "border-graphite/10 bg-white/70 hover:border-sage/60"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton onClick={() => setStep(step + 1)}>
              Дальше
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
            <SecondaryButton onClick={() => setStep(Math.max(0, step - 1))}>Назад</SecondaryButton>
          </div>
        </div>
      )}
    </section>
  );
}
