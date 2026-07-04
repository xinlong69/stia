"use client";

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";
import type * as React from "react";

export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// Strictly type the hook being exported from your package
export function useTheme() {
  const { theme, setTheme, forcedTheme, resolvedTheme, systemTheme, themes } = useNextTheme();
  
  return {
    theme,
    // explicitly ensuring TypeScript sees this as a clean string callback function
    setTheme: setTheme as (theme: string) => void, 
    forcedTheme,
    resolvedTheme,
    systemTheme,
    themes
  };
}