import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    target: "esnext",
    chunkSizeWarningLimit: 1500,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
