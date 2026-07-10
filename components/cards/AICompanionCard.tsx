import type { Companion } from "@/data/mockData";

export function AICompanionCard({ companion, active }: { companion: Companion; active?: boolean }) {
  const tone = companion.tone === "sage" ? "bg-sage-light" : "bg-blush-light";

  return (
    <button
      className={`focus-ring w-full rounded-[24px] border p-5 text-left ${
        active ? "border-gold bg-gold-light/45" : "border-graphite/10 bg-white/70 hover:border-gold/50"
      }`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${tone} font-display text-xl font-semibold`}>
        {companion.name.charAt(0)}
      </div>
      <h3 className="mt-4 font-semibold">{companion.name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{companion.role}</p>
    </button>
  );
}
