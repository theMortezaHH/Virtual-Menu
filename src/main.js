import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import orderStore from "@/store/order-store.js"
import "./style.css"
import App from "./App.vue"
import Home from "@/pages/Home.vue"
import Info from "@/pages/Info.vue"
import Cart from "@/pages/Cart.vue"
import Order from "@/pages/Order.vue"
import Barista from "@/pages/admin/Barista.vue"
import Editor from "@/pages/admin/Editor.vue"
import NotFound from "@/pages/NotFound.vue"

const pinia = createPinia()
const app = createApp(App)
const routes = [
    { path: "/", component: Home },
    { path: "/info/:id", component: Info },
    { path: "/cart", component: Cart },
    { path: "/order", component: Order },
    { path: "/admin/barista", component: Barista },
    { path: "/admin/editor", component: Editor },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (from.path === "/order") {
        if (orderStore().order.length !== undefined) {
            next(false)
        }
    }
    next()
})

app.config.globalProperties.$filters = {
    price(value) {
        return `${value.toLocaleString()} تومان`
    },
}

app.use(router)
app.use(pinia)
app.mount("#app")
