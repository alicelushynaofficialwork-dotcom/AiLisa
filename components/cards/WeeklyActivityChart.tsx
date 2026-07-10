import type { WeeklyActivity } from "@/data/mockData";

export function WeeklyActivityChart({ data }: { data: WeeklyActivity[] }) {
  const max = Math.max(...data.map((item) => item.minutes));

  return (
    <section className="card p-6 md:p-7">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted">Ритм роста</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Твоя неделя</h2>
        </div>
        <p className="text-sm text-muted">42 минуты</p>
      </div>
      <div className="mt-8 flex h-44 items-end gap-3">
        {data.map((item) => (
          <div key={item.day} className="flex flex-1 flex-col items-center gap-3">
            <div className="flex h-32 w-full items-end rounded-full bg-sage-light/55 p-1.5">
              <div
                className="w-full rounded-full bg-sage"
                style={{ height: `${Math.max(12, (item.minutes / max) * 100)}%` }}
                aria-label={`${item.day}: ${item.minutes} минут`}
              />
            </div>
            <span className="text-xs font-medium text-muted">{item.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
