import { Button } from "@packages/ui/components/button";
import { Tabs, TabsList, TabsTrigger } from "@packages/ui/components/tabs";
import { getSession } from "@web/auth/server";
import { redirect } from "next/navigation";
import { StatsGrid } from "./_components/stats-grid";
import { TripBanner } from "./_components/trip-banner";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

return (
    <div className="flex flex-col justify-between">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Left Column (Hero + Stats Metrics) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <TripBanner />
          <StatsGrid />
          
          {/* Bottom "My Trips" Tab Section Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
            <h2 className="text-2xl font-bold tracking-tight">My Trips</h2>
            <div className="flex items-center gap-3">
              <Tabs defaultValue="planned" className="w-auto">
                <TabsList className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-1 h-9">
                  <TabsTrigger value="planned" className="rounded-lg text-xs px-4">Planned</TabsTrigger>
                  <TabsTrigger value="archived" className="rounded-lg text-xs px-4">Archived</TabsTrigger>
                  <TabsTrigger value="completed" className="rounded-lg text-xs px-4">Completed</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                {/* <LayoutGrid className="h-4 w-4" /> */}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar Widgets Panel) */}
        {/* <div className="lg:col-span-1 flex flex-col gap-6">
          <CurrencyCard />
          <TimezoneCard />
          <ReservationsCard />
        </div> */}

      </div>
    </div>
  );
}