import { BookOpen, Mic, Sprout } from "lucide-react";
import { DailyThoughtCard } from "@/components/cards/DailyThoughtCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { TodayBloomCard } from "@/components/cards/TodayBloomCard";
import { WeeklyActivityChart } from "@/components/cards/WeeklyActivityChart";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { StatCard } from "@/components/ui/StatCard";
import { dashboardStats, weeklyActivity } from "@/data/mockData";

export function DashboardView() {
  return (
    <div className="space-y-7">
      <p className="-mt-5 max-w-2xl text-base leading-7 text-muted">
        Записывай мысли, практикуй речь и замечай свой прогресс — спокойно, каждый день.
      </p>
      <DailyThoughtCard />
      <div className="grid gap-5 md:grid-cols-3">
        <FeatureCard
          title="Дневник"
          description="Записывай день, чувства, планы и мысли."
          meta="3 записи на этой неделе"
          button="Написать"
          icon={BookOpen}
          tone="blush"
        />
        <FeatureCard
          title="Практика речи"
          description="Разговаривай с AI и учись выражать свои мысли свободно."
          meta="Сегодня: разговор о мечтах"
          button="Потренировать речь"
          icon={Mic}
          tone="sage"
        />
        <FeatureCard
          title="Мой рост"
          description="Смотри, как развивается твоя речь и словарный запас."
          meta="+18 новых слов за неделю"
          button="Посмотреть прогресс"
          icon={Sprout}
          tone="gold"
        />
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_0.8fr]">
        <TodayBloomCard />
        <div className="card p-6 md:p-7">
          <ProgressRing value={68} label="Уверенность в разговоре растёт мягко и заметно." />
          <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {dashboardStats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
      <WeeklyActivityChart data={weeklyActivity} />
    </div>
  );
}
