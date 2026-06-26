import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@toolings/eslint-config/base";
import { nextjsConfig } from "@toolings/eslint-config/nextjs";
import { reactConfig } from "@toolings/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess,
);
