"use client";

import { Button, useTheme } from "@packages/ui/components";
import { DarkIcon, LightIcon } from "@packages/ui/icons";
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
        <LightIcon className="h-3.75 w-3.75" />
      ) : theme === "dark" ? (
        <DarkIcon className="h-3.75 w-3.75 transition-all" />
      ) : (
        <LightIcon className="h-3.75 w-3.75 transition-all" />
      )}
    </Button>
  );
}