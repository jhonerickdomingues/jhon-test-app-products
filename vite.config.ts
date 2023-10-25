import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      // external: [
      //   "react",
      //   "axios",
      //   "react-dom",
      //   "react-i18next",
      //   "i18next",
      //   "antd",
      //   "zustand",
      // ],
    },
  },
});
