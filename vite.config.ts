import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { URL, fileURLToPath } from "node:url"
import VueI18n from "@intlify/unplugin-vue-i18n/vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 5000,
        host: true,
        hmr: {
            host: "localhost",
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    plugins: [
        vue(),
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            fullInstall: true,
            include: [path.resolve(__dirname, "locales/**")],
        }),
    ],
})
