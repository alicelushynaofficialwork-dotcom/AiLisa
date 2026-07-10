import type { SpeakingTopic } from "@/data/mockData";

export function SpeakingTopicCard({ topic, active }: { topic: SpeakingTopic; active?: boolean }) {
  const Icon = topic.icon;

  return (
    <button
      className={`focus-ring w-full rounded-[24px] border p-5 text-left ${
        active ? "border-sage bg-sage-light" : "border-graphite/10 bg-white/70 hover:border-sage/60"
      }`}
    >
      <Icon className="h-5 w-5 text-graphite" aria-hidden="true" />
      <h3 className="mt-4 font-semibold">{topic.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{topic.description}</p>
    </button>
  );
}
