import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import "./style.css"
import App from "./App.vue"
import routes from "~pages"

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.config.globalProperties.$filters = {
    price(value) {
        return `${value.toLocaleString()} تومان`
    },
}

app.use(pinia)
app.mount("#app")
