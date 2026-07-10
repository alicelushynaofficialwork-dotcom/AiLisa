import { AppShell } from "@/components/layout/AppShell";
import { ProfileView } from "@/components/views/ProfileView";

export default function ProfilePage() {
  return (
    <AppShell activePath="/profile">
      <ProfileView />
    </AppShell>
  );
}
