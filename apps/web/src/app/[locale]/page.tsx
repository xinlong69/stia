import { Footer } from "@web/components/footer";
import { Header } from "@web/components/header";

import { Button } from "@packages/ui/components";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden selection:bg-orange-600/30 transition-colors duration-200 flex flex-col justify-between">
      {/* Dynamic Main App Section Container */}
      <div className="w-full">
        <Header/>
        <section className="container mx-auto px-6 pt-24 pb-12 text-center max-w-4xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-zinc-900 dark:text-zinc-100 leading-[1.1]">
            One app for all your <br />
            <span className="bg-clip-text text-transparent bg-linear-to-tr from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-400">
              travel planning needs
            </span>
          </h1>

          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Create detailed itineraries, explore user-shared guides, and manage your 
            bookings seamlessly &mdash; all in one place.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/register">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-8 h-12 shadow-lg shadow-orange-600/20 transition-all hover:scale-[1.02] border-none">
                Start planning
              </Button>
            </Link>
            <Link href="#app-preview">
              <Button size="lg" variant="ghost" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full px-6 h-12 font-medium group">
                Get the app 
                <span className="inline-block transform translate-x-1 group-hover:translate-x-2 transition-transform ml-1">
                  &rarr;
                </span>
              </Button>
            </Link>
          </div>
        </section>

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

      <Footer />
    </main>
  );
}