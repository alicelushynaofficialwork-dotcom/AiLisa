import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SecondaryButton } from "@/components/ui/Buttons";

export function FeatureCard({
  title,
  description,
  meta,
  button,
  icon: Icon,
  tone
}: {
  title: string;
  description: string;
  meta: string;
  button: string;
  icon: LucideIcon;
  tone: "sage" | "blush" | "gold";
}) {
  const toneClass = {
    sage: "bg-sage-light",
    blush: "bg-blush-light",
    gold: "bg-gold-light"
  }[tone];

  return (
    <article className="card p-5">
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${toneClass}`}>
        <Icon className="h-5 w-5 text-graphite" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-muted">{description}</p>
      <p className="mt-4 text-sm font-medium text-graphite">{meta}</p>
      <SecondaryButton className="mt-5 w-full">
        {button}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </SecondaryButton>
    </article>
  );
}
