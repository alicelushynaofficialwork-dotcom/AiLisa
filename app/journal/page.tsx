import { AppShell } from "@/components/layout/AppShell";
import { JournalView } from "@/components/views/JournalView";

export default function JournalPage() {
  return (
    <AppShell activePath="/journal">
      <JournalView />
    </AppShell>
  );
}
