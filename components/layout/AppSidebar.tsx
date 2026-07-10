import Link from "next/link";
import { navItems } from "@/data/mockData";
import { Logo } from "@/components/ui/Logo";

export function AppSidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-white/80 bg-surface/65 p-6 backdrop-blur-xl lg:block">
      <Logo />
      <nav className="mt-12 space-y-2" aria-label="Основная навигация">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-medium ${
                isActive ? "bg-sage-light text-graphite" : "text-muted hover:bg-white/70 hover:text-graphite"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-6 left-6 right-6 rounded-[26px] border border-gold/20 bg-gold-light/70 p-5">
        <p className="font-display text-2xl font-semibold">Your English, beautifully personal.</p>
        <p className="mt-3 text-sm leading-6 text-muted">Мягкое пространство для мысли, речи и ежедневного роста.</p>
      </div>
    </aside>
  );
}
