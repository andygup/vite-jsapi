import { defineConfig } from "vite";

const config = {
  build: {
    outDir: "./dist-raw",
    chunkSizeWarningLimit: 1500
  },
  server: {
    open: true
  }
};

export default defineConfig(config);