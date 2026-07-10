import Link from "next/link";
import { navItems } from "@/data/mockData";

export function MobileNavigation({ activePath }: { activePath: string }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/80 bg-surface/90 px-2 py-2 backdrop-blur-xl lg:hidden" aria-label="Мобильная навигация">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-medium ${
                isActive ? "bg-sage-light text-graphite" : "text-muted hover:bg-white/75"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
