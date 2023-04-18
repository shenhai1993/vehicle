import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    server: {
      proxy: {
        "/api": {
          target: env.VITE_SERVER_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
      Pages(),
    ],
    define: { "process.env": {} },
  });
};
