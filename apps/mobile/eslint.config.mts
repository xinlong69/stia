import { defineConfig } from "eslint/config";

import { baseConfig } from "@toolings/eslint-config/base";
import { reactConfig } from "@toolings/eslint-config/react";

export default defineConfig(
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  baseConfig,
  reactConfig,
);