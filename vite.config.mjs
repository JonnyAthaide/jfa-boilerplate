import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@foundation": fileURLToPath(new URL("./src/foundation", import.meta.url)),
      "@design-system": fileURLToPath(new URL("./src/design-system", import.meta.url)),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url))
    }
  }
});
