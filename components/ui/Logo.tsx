import { Leaf } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3" aria-label="AiLisa">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/40 bg-sage-light text-graphite">
        <Leaf className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <div className="font-display text-2xl font-semibold leading-none tracking-normal text-graphite">AiLisa</div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Write. Speak. Grow.</div>
      </div>
    </div>
  );
}
