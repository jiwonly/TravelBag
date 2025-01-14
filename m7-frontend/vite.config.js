import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import path from "path";
import { API_BASE_URL } from "./src/api/api";

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5174, // 원하는 포트 번호로 변경
    strictPort: true, // 해당 포트를 사용 중이면 에러 발생 (자동 증가 방지)
    // proxy: {
    //   "/location": {
    //     target: API_BASE_URL,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/location/, "/location"),
    //   },
    // },
  },
});
