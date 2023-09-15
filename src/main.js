import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import "./style.css"
import App from "./App.vue"
import Home from "@/pages/Home.vue"
import Info from "@/pages/Info.vue"
import Cart from "@/pages/Cart.vue"
import Order from "@/pages/Order.vue"
import Barista from "@/pages/Barista.vue"
import NotFound from "@/pages/NotFound.vue"

const pinia = createPinia()
const app = createApp(App)
const routes = [
    { path: "/", component: Home },
    { path: "/info/:id", component: Info },
    { path: "/cart", component: Cart },
    { path: "/order", component: Order },
    { path: "/admin/barista", component: Barista },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (from.path === "/order") {
        router.push("/order")
    }
    // if (to.path === "/" || to.path === "/cart") {
    //     if (orderStore().order.length !== undefined) {
    //         router.push("/order")
    //     }
    // }
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
