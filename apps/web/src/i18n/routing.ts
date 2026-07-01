import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"], // Add extra locales here over time (e.g., 'es', 'fr')
  defaultLocale: "en",
  localePrefix: 'never' // Prevents next-intl from appending prefixes to URLs
});