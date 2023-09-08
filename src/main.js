import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import "./style.css"
import App from "./App.vue"
import Home from "@/pages/Home.vue"
import Cart from "@/pages/Cart.vue"

const pinia = createPinia()
const app = createApp(App)
const routes = [
    { path: "/", component: Home },
    { path: "/cart", component: Cart },
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

app.use(router)
app.use(pinia)
app.mount("#app")
