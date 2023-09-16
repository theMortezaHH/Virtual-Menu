<script setup>
import { onMounted, ref } from "vue"
import Sidebar from "@/components/sidebar.vue"

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

        <div class="orders">
            <svg class="close-icon" viewBox="0 0 512 512">
                <title>Close Circle</title>
                <path
                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M320 320L192 192M192 320l128-128"
                />
            </svg>
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
    .orders {
        width: 350px;
        background: var(--box);
        border: 1px solid var(--border);
        border-radius: 15px;
        box-shadow: 0 2px 5px 2px var(--shadow);
        .close-icon {
            display: flex;
            width: 30px;
            margin: 8px 8px 0 auto;
        }
    }
}
</style>
