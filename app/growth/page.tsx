import { AppShell } from "@/components/layout/AppShell";
import { GrowthView } from "@/components/views/GrowthView";

export default function GrowthPage() {
  return (
    <AppShell activePath="/growth">
      <GrowthView />
    </AppShell>
  );
}
