// app/[locale]/(main)/settings/theme/page.tsx
"use client";

import { Button } from "@packages/ui/components/button";
import { useTheme } from "@packages/ui/components/theme";
import { Check, DarkIcon, LightIcon, Monitor } from "@packages/ui/icons";
import { useSyncExternalStore } from "react";

const themes = [
  { id: "light", name: "Light", icon: LightIcon, previewBg: "bg-white border-zinc-200", previewCard: "bg-zinc-50 border-zinc-200" },
  { id: "dark-slate", name: "Dark Slate", icon: DarkIcon, previewBg: "bg-zinc-950 border-zinc-800", previewCard: "bg-zinc-900 border-zinc-800" },
  { id: "dark-oled", name: "OLED Black", icon: DarkIcon, previewBg: "bg-black border-zinc-900", previewCard: "bg-zinc-950 border-zinc-900" },
  { id: "dark-navy", name: "Midnight Navy", icon: DarkIcon, previewBg: "bg-slate-900 border-slate-800", previewCard: "bg-slate-950 border-slate-800" },
  { id: "system", name: "System", icon: Monitor, previewBg: "bg-gradient-to-r from-white to-zinc-950 border-zinc-300", previewCard: "bg-zinc-100 dark:bg-zinc-900 opacity-80" },
];

const subscribe = () =>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeSettingsPage() {
  const { theme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  if (!isMounted) {
    return <div className="h-50 w-full animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-800" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Appearance</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Customize how the application looks on your device. Choose your favorite flavor of darkness.
        </p>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((t) => {
          const isActive = theme === t.id;
          const Icon = t.icon;

          return (
            <Button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-4 text-left transition-all hover:border-zinc-400 dark:hover:border-zinc-600 ${
                isActive ? "border-zinc-900 ring-2 ring-zinc-900 dark:border-zinc-50 dark:ring-zinc-50" : "border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {isActive && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-zinc-900 p-1 text-white dark:bg-zinc-50 dark:text-zinc-900">
                  <Check className="h-3 w-3" />
                </div>
              )}
              <div className={`mb-3 aspect-video w-full rounded-lg border p-2 flex gap-1 ${t.previewBg}`}>
                <div className={`w-1/4 rounded border ${t.previewCard}`} />
                <div className="flex-1 flex flex-col gap-1">
                  <div className={`h-2 w-full rounded ${t.previewCard}`} />
                  <div className={`h-2 w-2/3 rounded ${t.previewCard}`} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-50" />
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}