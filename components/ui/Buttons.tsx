import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function PrimaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-graphite px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#343733] active:bg-[#1d1f1c] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-graphite/10 bg-white/75 px-5 py-2.5 text-sm font-medium text-graphite hover:border-sage hover:bg-sage-light/70 active:bg-sage-light ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
