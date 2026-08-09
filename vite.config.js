import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so `npm run build` output also works opened from disk
  // or served from a subpath (GitHub Pages, etc.).
  base: "./",
  server: { open: true },
});
