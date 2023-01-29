/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
    test: {
        // NOTE: this is a replacement location for karma tests.
        //       moving forward we should colocate tests with the
        //       code they test.
        include: ["test/**/*.test.{js,mjs,cjs}"],
        environment: "jsdom",
        setupFiles: ["test/setup.js"],
    },
    plugins: [vue()],
    root: resolve(__dirname, "src"),
    build: {
        rollupOptions: {
            input: {
                app: "main.html",
            },
        },
    },
    server: {
        open: "main.html",
    },
});
