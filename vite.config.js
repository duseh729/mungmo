import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl(), // plugins는 defineConfig의 최상위 속성에 위치해야 합니다.
  ],
  css: {
    modules: {
      localsConvention: "camelCase", // 또는 'dashes'로 설정 가능
    },
  },
  server: {
    https: true, // server 속성의 중복 제거
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
