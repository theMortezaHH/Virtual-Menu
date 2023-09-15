<script setup>
import { ref } from "vue"
import orderStore from "@/store/order-store.js"
import BasketItem from "@/components/basket-item.vue"

const orderDuration = ref(0)
for (let index = 0; index < orderStore().order.length; index++) {
    if (orderStore().order[index].duration > orderDuration.value) {
        orderDuration.value = orderStore().order[index].duration
    }
}
setInterval(() => {
    if (orderDuration.value > 0) {
        orderDuration.value -= 1
    }
}, 60000)
</script>

<template>
    <div class="container">
        <svg viewBox="0 0 512 512" class="checkmark">
            <title>Checkmark Circle</title>
            <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
            />
            <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M352 176L217.6 336 160 272"
            />
        </svg>

        <div class="header">
            <p class="header-title" v-if="orderDuration > 0">
                سفارش شما ثبت شد <br />
                لطفا منتظر بمانید
            </p>
            <p class="header-title" v-if="orderDuration === 0">
                سفارش شما آماده است <br />
                نوش جان!
            </p>
        </div>

        <div class="cart-items">
            <BasketItem
                v-for="(item, index) in orderStore().order"
                :value="item"
                :disabled="true"
                :key="index"
            />
            <p class="total-price">جمع کل: {{ $filters.price(orderStore().orderTotalPrice) }}</p>
            <p class="time-remaining" v-if="orderDuration > 0">
                زمان تقریبی باقیمانده: {{ orderDuration }}
            </p>
            <img class="loading" src="@/assets/loading.svg" v-if="orderDuration > 0" />
        </div>
    </div>

    <router-link class="go-to-home" v-if="orderStore().orderTotalPrice > 0" to="/">
        برگشت به منو
    </router-link>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100%;
    .checkmark {
        width: 80px;
        height: 80px;
        margin: 20px auto 0 auto;
        border-radius: 50%;
        stroke: var(--icon);
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: fit-content;
        width: 100%;
        .header-title {
            text-align: center;
            font-size: 30px;
            font-weight: bold;
            direction: rtl;
            margin: 10px auto 30px auto;
        }
    }
    .cart-items {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 100%;
        width: 100%;
        overflow: auto;
        border-top: 1px solid var(--border);
        .total-price {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
        }
        .loading {
            width: 50px;
        }
    }
    .go-to-home {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: auto auto 10px auto;
        height: 50px;
        width: 240px;
        background: var(--box);
        box-shadow: 0 2px 5px 2px var(--shadow);
        border-radius: 10px;
        text-decoration: none;
    }
}
</style>
