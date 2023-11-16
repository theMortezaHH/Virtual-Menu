import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persistedstate"
import PrimeVue from "primevue/config"
import "primevue/resources/themes/lara-light-teal/theme.css"
import "primeicons/primeicons.css"
import "@/style.css"
import { createI18n } from "vue-i18n"
import App from "@/App.vue"
import MenuPage from "@/pages/MenuPage.vue"
import Cart from "@/pages/Cart.vue"
import Settings from "@/pages/Settings.vue"
import NotFound from "@/pages/NotFound.vue"

const routes = [
    { path: "/", component: MenuPage },
    { path: "/settings", component: Settings },
    { path: "/cart", component: Cart },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//i18n config
const messages = Object.fromEntries(
    Object.entries(import.meta.glob<{ default: any }>("../locales/*.yaml", { eager: true })).map(([key, value]) => {
        return [key.slice(11, -5), value.default]
    }),
)
const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: "fa",
    messages,
})

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPersist) //a pinia plugin for saving store in localstorage
app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.use(i18n)
app.mount("#app")
