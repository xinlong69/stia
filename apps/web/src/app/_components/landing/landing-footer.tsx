import { Button } from "@packages/ui/components";
import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-6 py-12 max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-linear-to-tr from-orange-600 to-red-500 flex items-center justify-center font-bold text-xs text-white">
              S
            </div>
            <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">
              stia<span className="text-orange-500">.</span>
            </span>
          </div>
          <p className="text-xs font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
            Your comprehensive desktop mapping companion built to organize multi-destination travel itineraries effortlessly.
          </p>
        </div>

        {/* Product Links */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Product</span>
          <Link href="#app-preview" className="text-sm text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors font-light">Features</Link>
          <Link href="/register" className="text-sm text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors font-light">Itinerary Planner</Link>
          <Link href="/login" className="text-sm text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors font-light">Community Guides</Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Company</span>
          <Link href="/about" className="text-sm text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors font-light">About Us</Link>
          <Link href="/privacy" className="text-sm text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors font-light">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 transition-colors font-light">Terms of Service</Link>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Stay Updated</span>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">Get planning tips and feature releases sent to your inbox.</p>
          <div className="flex items-center gap-2 max-w-sm pt-1">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full h-9 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-hidden placeholder:text-zinc-400 focus:border-zinc-400 dark:focus:border-zinc-700 transition-colors"
            />
            <Button size="sm" className="h-9 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-lg px-3 font-medium text-xs border-none">
              Join
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Band */}
      <div className="border-t border-zinc-200/60 dark:border-zinc-900/60 transition-colors">
        <div className="container mx-auto px-6 py-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-400 dark:text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Stia. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-600 dark:hover:text-zinc-400 cursor-pointer">English (US)</span>
            <span>&bull;</span>
            <span className="hover:text-zinc-600 dark:hover:text-zinc-400 cursor-pointer">USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}