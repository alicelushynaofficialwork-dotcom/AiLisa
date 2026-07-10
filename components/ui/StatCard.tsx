import type { Stat } from "@/data/mockData";

const toneClass: Record<Stat["tone"], string> = {
  sage: "bg-sage-light text-graphite",
  blush: "bg-blush-light text-graphite",
  gold: "bg-gold-light text-graphite"
};

export function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-3xl border border-white/80 bg-white/65 p-4">
      <div className={`mb-4 h-2 w-12 rounded-full ${toneClass[stat.tone]}`} />
      <p className="text-sm text-muted">{stat.label}</p>
      <p className="mt-1 text-2xl font-semibold text-graphite">{stat.value}</p>
    </div>
  );
}
