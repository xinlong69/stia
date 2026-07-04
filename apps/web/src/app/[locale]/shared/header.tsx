"use client";

import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LogOutIcon,
  SettingsIcon,
  UserIcon
} from "@packages/ui/icons";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from "@packages/ui/components";
import { authClient } from "@web/auth/client";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const pathname = usePathname();

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
    <header className="fixed top-0 left-0 w-full border-b border-zinc-200/80 dark:border-zinc-900/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md isolate z-50">
      <div className="container mx-auto px-20 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Brand Identity / Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-orange-600 to-red-500 flex items-center justify-center font-bold text-sm text-white">
              S
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100">
              stia<span className="text-orange-500">.</span>
            </span>
          </Link>

          {/* Navigation Menu right beside the brand */}
          <NavigationMenu className="hidden md:flex" viewport={false}>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/dashboard"
                    className={`text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${
                      pathname === "/dashboard" ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/plan"
                    className={`text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${
                      pathname === "/plan" ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    Plan
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/calendar"
                    className={`text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${
                      pathname === "/calendar" ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    Calendar
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/feed"
                    className={`text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${
                      pathname === "/feed" ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    Feed
                    <NavigationMenuIndicator />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Maps
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-150 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-md p-0">
                  <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md"
                          href="/maps"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">Explore Maps</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            View and organize your full workspace mapping collection.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/maps/recent" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Recent Maps</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Quickly jump back into your last edit.</p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <div className="absolute top-full left-0 flex justify-center w-full mt-2">
              <NavigationMenuViewport />
            </div>
          </NavigationMenu>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-6">
          <ModeToggle/>
          {/* Prevent UI flickering or shifting layout during initial hydration check */}
          {isPending ? (
            <div className="h-8 w-20 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-hidden cursor-pointer rounded-full">
                <div className="flex items-center gap-2">
                  {/* Profile Avatar */}
                  {user.image ? (
                    <Image 
                      src={user.image} 
                      alt={user.name || "User avatar"} 
                      className="h-8 w-8 rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
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
              </DropdownMenuTrigger>

              <DropdownMenuContent 
                align="start" 
                sideOffset={8} 
                className="w-40 p-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-lg"
              >
                <DropdownMenuLabel className="mb-1">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-zinc-900 dark:text-zinc-100">{user.name}</p>
                    <p className="text-xs leading-none text-zinc-500 dark:text-zinc-400">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <UserIcon className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="/settings">
                      <SettingsIcon className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    variant="destructive"
                    className="text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400 cursor-pointer"
                  >
                    <LogOutIcon className="h-4 w-4"/>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
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
      </div>
    </header>
  );
}