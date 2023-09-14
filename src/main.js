import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
// import piniaPluginPersist from "pinia-plugin-persistedstate"
import "./style.css"
import App from "./App.vue"
import Home from "@/pages/Home.vue"
import Info from "@/pages/Info.vue"
import Cart from "@/pages/Cart.vue"
import Wait from "@/pages/Wait.vue"
import Barista from "@/pages/Barista.vue"
import NotFound from "@/pages/NotFound.vue"

const pinia = createPinia()
const app = createApp(App)
const routes = [
    { path: "/", component: Home },
    { path: "/info/:id", component: Info },
    { path: "/cart", component: Cart },
    { path: "/wait", component: Wait },
    { path: "/admin/barista", component: Barista },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.config.globalProperties.$filters = {
    price(value) {
        return `${value.toLocaleString()} تومان`
    },
}

// pinia.use(piniaPluginPersist)
app.use(router)
app.use(pinia)
app.mount("#app")
