import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // FIX: Remove or set to 'public' (default)
  // publicDir: "./static",  // ❌ REMOVE THIS LINE
  publicDir: "public",      // ✅ Or explicitly set to 'public'
  
  base: "./", // Keep this for relative paths
  
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  
  // Optional: Better asset handling for production
  build: {
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});