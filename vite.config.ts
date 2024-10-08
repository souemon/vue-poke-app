import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-poke-app/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@globals": resolve(__dirname, "src/components/globals"),
      "@pages": resolve(__dirname, "src/components/pages"),
      "@parts": resolve(__dirname, "src/components/parts"),
    },
  },
  plugins: [vue()],
});
