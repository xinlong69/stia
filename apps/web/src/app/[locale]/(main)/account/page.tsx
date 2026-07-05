import { SidebarProvider } from "@packages/ui/components/sidebar";
import { getSession } from "@web/auth/server";
import { redirect } from "next/navigation";
import { AccountSidebar } from "./_components/account-sidebar";

export default async function AccountPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
 
  return (
    <SidebarProvider data-wrapper="account-page" className="min-h-[70vh] w-full flex gap-8">
      {/* Account Sidebar */}
      <div className="hidden md:block w-64 shrink-0">
        <AccountSidebar />
      </div>
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