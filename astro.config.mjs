import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://witdesign.cz",
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
