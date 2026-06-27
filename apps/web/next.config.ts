import { createJiti } from "jiti";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const jiti = createJiti(import.meta.url);

// Evaluates your env file immediately at build/runtime setup
jiti.import("./src/env").catch((err) => {
  console.error("Invalid environment variables:", err);
  process.exit(1);
});

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "169.254.83.107",
  ],

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@packages/api",
    "@packages/auth",
    "@packages/db",
    "@packages/ui",
    "@packages/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */
  typescript: { ignoreBuildErrors: true },
};

export default withNextIntl(nextConfig);