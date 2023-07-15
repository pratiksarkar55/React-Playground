import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   sourcemap: true, // Source map generation must be turned on
  // },
  plugins: [
    react(),
    sentryVitePlugin({
      org: "Test",
      project: "sentry-logging-learning",

      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and need `project:releases` and `org:read` scopes
      authToken:
        "b73cfe2814e04306aeea8357de6a606c3a4b835d6ba043a6b133d605a0234ea8",
      sourcemaps: {
        assets: "./**",
        ignore: ["./node_modules/**", "./vite.config.js/**"],
      },
    }),
  ],
});
