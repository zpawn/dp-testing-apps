import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      name: "app-builder",
      fileName: (format, name) => {
        if (format === "es") {
          return `${name}.js`;
        }

        return `${name}.${format}`;
      },
    },
    sourcemap: true,
  },
  plugins: [dts()],
});
