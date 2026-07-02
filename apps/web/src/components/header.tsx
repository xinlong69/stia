"use client";

import Image from 'next/image';
import Link from "next/link";

import { Button } from "@packages/ui/components";
import { authClient } from "@web/auth/client";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          // Optional: Force a window reload or route push if state doesn't automatically trigger a sync
          window.location.reload();
        },
      },
    });
  };

  return (
    <header className="container mx-auto px-6 h-20 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-900">
      
      {/* Brand Identity / Logo */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-orange-600 to-red-500 flex items-center justify-center font-bold text-sm text-white">
          S
        </div>
        <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100">
          stia<span className="text-orange-500">.</span>
        </span>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6">
        
        <ModeToggle/>

        {/* Prevent UI flickering or shifting layout during initial hydration check */}
        {isPending ? (
          <div className="h-8 w-20 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
        ) : user ? (
          /* --- LOGGED IN STATE --- */
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Profile Avatar */}
              {user.image ? (
                <Image 
                  src={user.image} 
                  alt={user.name || "User avatar"} 
                  className="h-8 w-8 rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
                  width={32}
                  height={32}
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-semibold uppercase text-zinc-700 dark:text-zinc-300">
                  {user.name.charAt(0) || "U"}
                </div>
              )}
              
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hidden sm:inline">
                {user.name}
              </span>
            </div>

            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLogout}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Log out
            </Button>
          </div>
        ) : (
          /* --- LOGGED OUT STATE --- */
          <>
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
          </>
        )}
      </div>

    </header>
  );
}