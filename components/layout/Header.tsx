import { Bot, CalendarDays } from "lucide-react";
import { user } from "@/data/mockData";
import { SecondaryButton } from "@/components/ui/Buttons";

export function Header({ onAssistantOpen }: { onAssistantOpen: () => void }) {
  return (
    <header className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-muted">{user.greeting}, {user.name}</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-tight text-graphite md:text-6xl">
          Твой английский растёт вместе с тобой
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm text-graphite shadow-sm sm:flex">
          <CalendarDays className="h-4 w-4 text-sage" aria-hidden="true" />
          {user.practiceDays} дней практики
        </div>
        <SecondaryButton onClick={onAssistantOpen} aria-label="Открыть AI-помощника">
          <Bot className="h-4 w-4" aria-hidden="true" />
          Ai-помощник
        </SecondaryButton>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-light text-sm font-semibold text-graphite">
          {user.avatarInitials}
        </div>
      </div>
    </header>
  );
}
