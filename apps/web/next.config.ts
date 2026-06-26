import { createJiti } from "jiti";
import type { NextConfig } from "next";

const jiti = createJiti(import.meta.url);

const config = async (): Promise<NextConfig> => {
  // Import env files to validate at build time inside the async function block
  await jiti.import("./src/env");

  return {
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
};

export default config;