import { AppShell } from "@/components/layout/AppShell";
import { OnboardingView } from "@/components/views/OnboardingView";

export default function OnboardingPage() {
  return (
    <AppShell activePath="/onboarding">
      <OnboardingView />
    </AppShell>
  );
}
