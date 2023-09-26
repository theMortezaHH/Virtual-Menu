<script setup>
import { onMounted, ref } from "vue"
import Sidebar from "@/components/sidebar.vue"
import OrderCard from "@/components/order-card.vue"

const data = ref({})
const webSocket = new WebSocket("ws://192.168.100.249:5555/Barista")
webSocket.addEventListener("open", (event) => {
    webSocket.send("Hello Server!")
})
webSocket.addEventListener("message", (event) => {
    data.value = JSON.parse(event.data)
})

// async function getData() {
//     // const response = await fetch("http://192.168.100.249:5555/Order")
//     const response = await fetch("/database/baristaData")
//     data.value = await response.json()
// }

// onMounted(() => {
//     getData()
// })
</script>

<template>
    <div class="container">
        <div class="header">
            <p class="headerTitle">لیست سفارشات</p>
        </div>
        <div class="order-card-container">
            <OrderCard
                v-for="(item, index) in data"
                :value="item"
                :key="index"
            />
        </div>
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
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 70px;
        min-height: 70px;
        width: 100%;
        border-bottom: 1px solid var(--border);
        .headerTitle {
            margin: auto 80px auto auto;
            font-size: 25px;
        }
    }
}
.order-card-container {
    position: relative;
    display: flex;
    flex-direction: unset;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    overflow: auto;
}
</style>
