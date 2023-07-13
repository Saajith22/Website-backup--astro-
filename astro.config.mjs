import { defineConfig } from 'astro/config';

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    vite: {
        resolve: {
          alias: {
            "~": resolve(__dirname, "./src"),
            "@layouts": resolve(__dirname, "./src/layouts"),
            "@components": resolve(__dirname, "./src/components"),
          },
        },
      },
});