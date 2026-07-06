import "./styles.css";

import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";

import { routing } from "@web/i18n/routing";
import { TRPCReactProvider } from "@web/trpc/react";

import { ThemeProvider } from "@packages/ui/components/theme";
import { Toaster } from "@packages/ui/components/toast";

export const metadata: Metadata = {
  title: "Stia",
  description: "Your Comprehensive Desktop Mapping Companion",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load the localization JSON dictionary side-effects
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${geist.variable}`}>
      <body>
        {/* 1. ThemeProvider must be top-level under body to access DOM hydration */}
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 2. Then stack localization and data-fetching providers inside */}
          <NextIntlClientProvider messages={messages}>
            <TRPCReactProvider>
              {children}
            </TRPCReactProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}