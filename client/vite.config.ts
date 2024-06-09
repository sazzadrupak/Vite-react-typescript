import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
// import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  base: "/",
  plugins: [
    react(),
    // vanillaExtractPlugin(),
  ],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
  },
  // css: {
  //   postcss: {
  //     plugins: [autoprefixer()],
  //   },
  // },
});
