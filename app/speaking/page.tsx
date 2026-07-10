import { AppShell } from "@/components/layout/AppShell";
import { SpeakingView } from "@/components/views/SpeakingView";

export default function SpeakingPage() {
  return (
    <AppShell activePath="/speaking">
      <SpeakingView />
    </AppShell>
  );
}
