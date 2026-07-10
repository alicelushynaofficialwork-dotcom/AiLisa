import { Quote, Sprout } from "lucide-react";

const bloomItems = ["7 минут практики", "4 новые фразы", "1 запись в дневнике", "уверенность растёт"];

export function TodayBloomCard() {
  return (
    <section className="card p-6 md:p-7">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-sm font-medium text-muted">Today&apos;s Bloom</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Твой рост сегодня</h2>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light">
          <Sprout className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {bloomItems.map((item) => (
          <div key={item} className="rounded-2xl bg-white/65 px-4 py-3 text-sm text-graphite">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-[24px] bg-blush-light/75 p-5">
        <Quote className="h-5 w-5 text-gold" aria-hidden="true" />
        <p className="mt-3 text-sm leading-6 text-graphite">
          Ты уже выражаешь мысли свободнее, чем неделю назад.
        </p>
      </div>
    </section>
  );
}
