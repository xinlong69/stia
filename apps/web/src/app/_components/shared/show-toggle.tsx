"use client";

import { HideIcon, ShowIcon } from "@packages/ui/icons";

interface ShowToggleProps {
  isVisible: boolean;
  onToggle: () => void;
}

export function ShowToggle({ isVisible, onToggle }: ShowToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isVisible ? "Hide password" : "Show password"}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 focus:outline-hidden transition-colors cursor-pointer select-none inline-flex items-center justify-center p-1 rounded-sm"
    >
      {isVisible ? (
        <HideIcon className="h-5 w-5 pointer-events-none transform scale-110" aria-hidden="true" />
      ) : (
        <ShowIcon className="h-5 w-5 pointer-events-none transform scale-110" aria-hidden="true" />
      )}
    </button>
  );
}