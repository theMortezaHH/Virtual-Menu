<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router"
import customerStore from "@/store/customer-store.js"
import orderStore from "@/store/order-store.js"
import colorThemeStore from "@/store/color-theme-store.js"

const router = useRouter()
onMounted(async () => {
    await customerStore().getData()
    if (customerStore().data.order) {
        orderStore().order = customerStore().data.order
        orderStore().setOrderDuration()
        router.push("/order")
    }
    if (localStorage.getItem("colorTheme") === "false") {
        colorThemeStore().colorTheme = true
    }
    colorThemeStore().changeColorTheme()
})
</script>
<template>
    <RouterView />
</template>
<style lang="scss" scoped></style>
