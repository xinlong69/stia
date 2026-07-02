"use client";

import Link from "next/link";

import { Button } from "@packages/ui/components";
// Changed path to target the direct file structure to ensure compilation succeeds 
import { ModeToggle } from "../shared/mode-toggle";

export function PlanNavbar() {

  return (
    <header className="container mx-auto px-6 h-20 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-900">
      
      {/* Brand Identity / Logo */}
      <div className="flex items-center gap-2">
        {/* Swapped bg-linear-to-tr to globally supported bg-gradient-to-tr syntax */}
        <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-orange-600 to-red-500 flex items-center justify-center font-bold text-sm text-white">
          S
        </div>
        <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100">
          stia<span className="text-orange-500">.</span>
        </span>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6">
        
        {/* Pass setTheme function directly to the pure UI state slot */}
        <ModeToggle/>

        <Link 
          href="/login" 
          className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          Log in
        </Link>
        
        <Link href="/register">
          <Button 
            size="sm" 
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full px-5 border-none"
          >
            Sign up
          </Button>
        </Link>
      </div>

    </header>
  );
}