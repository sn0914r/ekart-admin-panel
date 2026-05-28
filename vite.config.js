import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["https://annette-nondesignate-cryptically.ngrok-free.dev"],
    host: true,
  },
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],

  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@app": path.resolve(__dirname, "src/app"),
      "@assets": path.resolve(__dirname, "src/assets")
    }
  }
});
