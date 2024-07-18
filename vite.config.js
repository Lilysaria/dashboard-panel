import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssnano from 'cssnano';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    },
    cors: true
  },
  plugins: [react()],
  build: {
    manifest: true,
    outDir: 'dist',
    rollupOptions: {
      input: "./src/main.jsx",
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
    cssCodeSplit: true,
    css: {
      postcss: {
        plugins: [
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
  },
});
