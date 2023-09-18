<script setup>
import { onMounted, ref } from "vue"
import Sidebar from "@/components/sidebar.vue"
import OrderCard from "@/components/order-card.vue"

const data = ref({})

async function getData() {
    const response = await fetch("../database/orders")
    data.value = await response.json()
}

onMounted(() => {
    getData()
})
</script>

<template>
    <div class="container">
        <div class="header">
            <p class="headerTitle">لیست سفارشات</p>
        </div>

        <OrderCard v-for="(item, index) in data.orders" :value="item" :key="index" />
    </div>

    <Sidebar />
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100dvh;
    width: 100dvw;
    .header {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        height: 70px;
        width: 100%;
        border-bottom: 1px solid var(--border);
        .headerTitle {
            margin: auto 80px auto auto;
            font-size: 25px;
        }
    }
}
</style>
