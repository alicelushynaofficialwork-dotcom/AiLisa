import { AppShell } from "@/components/layout/AppShell";
import { DashboardView } from "@/components/views/DashboardView";

export default function DashboardPage() {
  return (
    <AppShell activePath="/">
      <DashboardView />
    </AppShell>
  );
}
