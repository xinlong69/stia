import { SidebarProvider } from "@packages/ui/components/sidebar";
import { getSession } from "@web/auth/server";
import { redirect } from "next/navigation";
import { SettingsSidebar } from "./_components/settings-sidebar";

export default async function SettingsPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
 
  return (
    // We wrap it in SidebarProvider so shadcn components work correctly
    <SidebarProvider data-wrapper="settings-page">

      {/* 1. The Sidebar (Renders on desktop, hidden on mobile) */}
      <div className="hidden md:block w-64 shrink-0">
        <SettingsSidebar />
      </div>

      {/* 2. Main content area filling the remaining grid space */}
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profile Information</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your account details and public profile.
          </p>
        </div>
        
        <hr className="border-zinc-200 dark:border-zinc-800" />
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6">
           <div className="lg:col-span-4 bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Logged in as: {session.user.email}
              </p>
           </div>
        </div>
      </div>
    </SidebarProvider>
  );
}