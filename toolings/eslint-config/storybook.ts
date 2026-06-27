import type { Linter } from "eslint";
import storybook from "eslint-plugin-storybook";

export const storybookConfig = [
  ...storybook.configs["flat/recommended"],
] as Linter.Config[];

export default storybookConfig;