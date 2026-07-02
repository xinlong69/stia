"use client";

// 1. Import Avatar sub-components (Image and Fallback)
import { Avatar, AvatarFallback, AvatarImage } from "@packages/ui/components";
// Changed path to target the direct file structure to ensure compilation succeeds 
import { ModeToggle } from "../shared/mode-toggle";
// Import the better-auth client
import { authClient } from "@web/auth/client";

export function HomeNavbar() {
  // Fetch the session data
  const { data: session, isPending } = authClient.useSession();

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
        
        {/* Display Username / Session State */}
        {!isPending && session && (
          <div className="flex items-center gap-2">
            
            {/* 2. Fixed Avatar structure using proper sub-components */}
            <Avatar>
              <AvatarImage 
                src={session.user.image ?? undefined} 
                alt={session.user.name} 
              />
              {/* Added bg-orange-500 and white text color */}
              <AvatarFallback className="bg-orange-500 text-white font-semibold">
                {session.user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {session.user.name}
            </span>
          </div>
        )}

        {/* Pass setTheme function directly to the pure UI state slot */}
        <ModeToggle/>
      </div>

    </header>
  );
}