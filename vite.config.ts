import { defineConfig } from "vite";
import vinext from "vinext";
import { nitro } from "nitro/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: { alias: [{ find: /^tailwindcss$/, replacement: fileURLToPath(import.meta.resolve("tailwindcss/index.css")) }] },
  plugins: [vinext(), nitro()],
});
