import { Award, BookMarked, CheckCircle2, Compass, Sparkles } from "lucide-react";
import { TodayBloomCard } from "@/components/cards/TodayBloomCard";
import { WeeklyActivityChart } from "@/components/cards/WeeklyActivityChart";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { StatCard } from "@/components/ui/StatCard";
import { achievements, dashboardStats, vocabulary, weeklyActivity } from "@/data/mockData";

export function GrowthView() {
  return (
    <div className="space-y-7">
      <section className="card p-6 md:p-8">
        <p className="text-sm text-muted">Growth Dashboard</p>
        <h2 className="mt-2 font-display text-5xl font-semibold">Твой рост</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Не оценки, а путь, который уже стал частью твоей жизни.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>
      <div className="grid gap-5 xl:grid-cols-[1fr_0.8fr]">
        <WeeklyActivityChart data={weeklyActivity} />
        <section className="card p-6 md:p-7">
          <ProgressRing value={74} label="Регулярность и уверенность становятся твоей привычкой." />
          <div className="mt-6 rounded-[24px] bg-gold-light/65 p-5">
            <h3 className="font-semibold">Следующий мягкий шаг</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Расскажи завтра о событии, которое тебя вдохновило.
            </p>
          </div>
        </section>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <section className="card p-6 md:p-7">
          <BookMarked className="h-5 w-5 text-sage" aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-semibold">Слова, которые стали твоими</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {vocabulary.map((item) => (
              <span key={item.word} className="rounded-full bg-sage-light px-4 py-2 text-sm font-medium">
                {item.word}
              </span>
            ))}
          </div>
        </section>
        <section className="card p-6 md:p-7">
          <Compass className="h-5 w-5 text-gold" aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-semibold">Темы, о которых ты уже можешь говорить</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {["Мой день", "Мечты", "Работа", "Путешествия"].map((topic) => (
              <div key={topic} className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium">
                {topic}
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <section className="card p-6 md:p-7">
          <Award className="h-5 w-5 text-gold" aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-semibold">Последние достижения</h2>
          <div className="mt-5 space-y-3">
            {achievements.map((achievement) => (
              <div key={achievement} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm leading-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
                {achievement}
              </div>
            ))}
          </div>
        </section>
        <TodayBloomCard />
      </div>
    </div>
  );
}
