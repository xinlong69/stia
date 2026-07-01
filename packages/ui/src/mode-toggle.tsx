"use client";

import { Button } from "@packages/ui/button";
import { useTheme } from "@packages/ui/theme";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as React from "react";

// A safe hook to check if we are fully hydrated on the client
const emptySubscribe = () => () => undefined;
function useIsHydrated() {
  return React.useSyncExternalStore(
    emptySubscribe,
    () => true,  // Client value
    () => false  // Server value (fallback)
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isHydrated = useIsHydrated();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {/* If not hydrated yet, render a safe, consistent shell to prevent mismatch */}
      {!isHydrated ? (
        <SunIcon className="h-[15px] w-[15px]" />
      ) : theme === "dark" ? (
        <MoonIcon className="h-[15px] w-[15px] transition-all" />
      ) : (
        <SunIcon className="h-[15px] w-[15px] transition-all" />
      )}
    </Button>
  );
}