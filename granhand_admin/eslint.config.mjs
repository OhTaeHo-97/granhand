import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 여기에 @typescript-eslint/no-explicit-any 규칙을 'off'로 설정합니다.
      // 'warn'으로 설정하면 경고로 표시됩니다.
      "@typescript-eslint/no-explicit-any": "off",
    }
  }
];

export default eslintConfig;
