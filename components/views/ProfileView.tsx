import { Settings, UserRound } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { user } from "@/data/mockData";

export function ProfileView() {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="card p-6 md:p-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blush-light text-2xl font-semibold">
          {user.avatarInitials}
        </div>
        <h2 className="mt-6 font-display text-5xl font-semibold">{user.name}</h2>
        <p className="mt-3 text-base text-muted">{user.level}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-sage-light/75 p-5">
            <p className="text-sm text-muted">Дней практики</p>
            <p className="mt-1 text-3xl font-semibold">{user.practiceDays}</p>
          </div>
          <div className="rounded-3xl bg-gold-light/75 p-5">
            <p className="text-sm text-muted">Фокус</p>
            <p className="mt-1 text-2xl font-semibold">Речь</p>
          </div>
        </div>
      </section>
      <section className="card p-6 md:p-8">
        <UserRound className="h-5 w-5 text-sage" aria-hidden="true" />
        <h2 className="mt-4 font-display text-4xl font-semibold">Личное пространство</h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
          Здесь позже появятся настройки целей, уровень языка, предпочтения AI-помощника и подключение аккаунта.
        </p>
        <div className="mt-7 space-y-3">
          {["Цель: говорить увереннее", "Темы: жизнь, работа, путешествия", "Ритм: понемногу каждый день"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/70 px-5 py-4 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton>
            <Settings className="h-4 w-4" aria-hidden="true" />
            Настроить
          </PrimaryButton>
          <SecondaryButton>Обновить onboarding</SecondaryButton>
        </div>
      </section>
    </div>
  );
}
