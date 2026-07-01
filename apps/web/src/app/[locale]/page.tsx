import { LandingFooter } from "@web/app/_components/landing/landing-footer";
import { LandingHero } from "@web/app/_components/landing/landing-hero";
import { LandingNavbar } from "@web/app/_components/landing/landing-navbar";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden selection:bg-orange-600/30 transition-colors duration-200 flex flex-col justify-between">
      
      {/* Dynamic Main App Section Container */}
      <div className="w-full">
        <LandingNavbar />
        <LandingHero />

        {/* Embedded Interactive Application Mockup Layer */}
        <section id="app-preview" className="container mx-auto px-6 max-w-5xl mt-8 relative pb-24">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-orange-600/6 dark:bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden aspect-video transition-colors">
            <div className="bg-zinc-100 dark:bg-zinc-950 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between transition-colors">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-800" />
              </div>
              <div className="text-xs text-zinc-400 dark:text-zinc-500 bg-white dark:bg-zinc-900 px-12 py-1 rounded-md border border-zinc-200 dark:border-zinc-800/50 transition-colors">
                localhost:3000/landing
              </div>
              <div className="w-6" />
            </div>

            <div className="p-8 h-full bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-400 dark:text-zinc-600 transition-colors">
              <p className="text-sm font-mono tracking-wider uppercase">
                Dashboard UI Preview Placeholder
              </p>
            </div>
          </div>
        </section>
      </div>

      <LandingFooter />
    </main>
  );
}