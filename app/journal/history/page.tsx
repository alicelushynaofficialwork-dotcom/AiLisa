import { AppShell } from "@/components/layout/AppShell";
import { JournalHistoryView } from "@/components/views/JournalHistoryView";

export default function JournalHistoryPage() {
  return (
    <AppShell activePath="/journal">
      <JournalHistoryView />
    </AppShell>
  );
}
