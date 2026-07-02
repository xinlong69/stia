import { Button } from "@packages/ui/components";
import { HomeFooter } from "@web/app/_components/home/home-footer";
import { HomeNavbar } from "@web/app/_components/home/home-navbar";
import { StatsGrid } from "@web/app/_components/home/stats-grid";
import { TripBanner } from "@web/app/_components/home/trip-banner";
import { getSession } from "@web/auth/server";
import { redirect } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "../../../../../../packages/ui/src/components/tabs/tabs";

export default async function HomePage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden selection:bg-orange-600/30 transition-colors duration-200 flex flex-col justify-between">
      <div className="w-full">
        <HomeNavbar />
        
        {/* Main Content Area - Replicating image_29045c.jpg inside your structure */}
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
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
      </div>
      
      <HomeFooter />
    </main>
  );
}