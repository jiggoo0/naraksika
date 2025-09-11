#!/bin/bash

echo "  dependencies ..."

#  dependencies 
pnpm add clsx react-helmet-async lucide-react html2pdf.js @headlessui/react

#  devDependencies  code style  testing
pnpm add -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-tailwindcss vitest @testing-library/react jsdom

echo "  config  ESLint  Prettier..."

#  .eslintrc.cjs
cat <<EOF > .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["react", "tailwindcss"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
EOF

#  .prettierrc
cat <<EOF > .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5"
}
EOF

echo "  utils/cn.ts  className..."

mkdir -p src/utils
cat <<EOF > src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-variants";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
EOF

echo "  config/ ..."

mkdir -p src/config
cat <<EOF > src/config/site.ts
export const siteConfig = {
  name: "Dev Baan Baan",
  description: "  ",
  url: "https://devbaanbaan.com",
  ogImage: "/og.png",
};
EOF

echo "  Layout ..."

mkdir -p src/components/Layout
cat <<EOF > src/components/Layout/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
EOF

echo "  vite.config.ts  Vitest..."

#  block  vite.config.ts 
if ! grep -q "test:" vite.config.ts; then
  sed -i '/defineConfig({/a \ \ test: { globals: true, environment: "jsdom" },' vite.config.ts
fi

echo "  robots.txt  .env.example..."

mkdir -p public
echo "User-agent: *\nAllow: /" > public/robots.txt

cat <<EOF > .env.example
# API_BASE_URL=https://api.devbaanbaan.com
VITE_APP_NAME=Dev Baan Baan
EOF

echo " !  Production  "