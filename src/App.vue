<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router"
import basketStore from "@/store/basket-store.js"
import orderStore from "@/store/order-store.js"

const router = useRouter()
onMounted(async () => {
    await basketStore().getData()
    if (basketStore().data.order) {
        orderStore().order = basketStore().data.order
        orderStore().setOrderDuration()
        router.push("/order")
    }
})
</script>
<template>
    <RouterView />
</template>
<style lang="scss" scoped></style>
