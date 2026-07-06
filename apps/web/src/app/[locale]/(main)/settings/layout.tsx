"use client";

import { Languages, Palette, UserStar } from "@packages/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@packages/ui/components/sidebar";

const items = [
  { title: "Theme", url: "/settings/theme", icon: Palette },
  { title: "Language", url: "/settings/language", icon: Languages },
  { title: "Preferences", url: "/settings/preferences", icon: UserStar }
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider data-wrapper="settings-page">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full hidden md:block md:w-64 shrink-0">
          <Sidebar className="border-r border-zinc-200 dark:border-zinc-800">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Settings
                </SidebarGroupLabel>
                <SidebarGroupContent className="mt-2">
                  <SidebarMenu className="w-56">
                    {items.map((item) => {
                      const isActive = pathname === item.url;
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton 
                            asChild 
                            isActive={isActive}
                            className={`w-full transition-colors ${
                              isActive 
                                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium" 
                                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            }`}
                          >
                            <Link href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md text-sm">
                              <item.icon className="h-4 w-4 shrink-0" />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </div>  
        <div className="flex-1 space-y-6">
          <SidebarInset>
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}