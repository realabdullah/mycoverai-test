// vite.config.js
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        Vue({
            template: {
                compilerOptions: {
                    isCustomElement: tag => ["NuxtLink"].includes(tag),
                },
            },
        }),
        Components({ dirs: ["./components"] }),
    ],
    test: {
        globals: true,
        environment: "happy-dom",
    },
});
