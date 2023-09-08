import { createApp } from "vue"
import { createPinia } from "pinia"
import "./style.css"
import App from "./App.vue"

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$filters = {
    price(value) {
        return `${value.toLocaleString()} تومان`
    },
}

app.use(pinia)
app.mount("#app")
