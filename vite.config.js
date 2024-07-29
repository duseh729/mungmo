import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    modules: {
      localsConvention: "camelCase", // 또는 'dashes'로 설정 가능
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://223.130.157.149/api/v1",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
        secure: false,
      },
    },
  },
});
