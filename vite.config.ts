import { defineConfig } from "vite";
import { injectIWER } from "@iwsdk/vite-plugin-iwer";

// GitHub Pages serves from /<repo>/, so the workflow sets BASE_PATH. Locally it stays "/".
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  // Injects the Meta IWER WebXR emulator on localhost only (never in the production build,
  // never on Quest Browser), so desktop dev has a simulated headset with hands.
  plugins: [injectIWER({ device: "metaQuest3", activation: "localhost", userAgentException: /OculusBrowser/ })],
  build: { target: "es2022", chunkSizeWarningLimit: 4000 },
  server: { host: true, port: 5173 },
});
