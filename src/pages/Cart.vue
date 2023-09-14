<script setup>
import useDataStore from "@/store/store.js"
import BasketItem from "@/components/basket-item.vue"

function SetOrder() {
    useDataStore().order = useDataStore().basketItems
    const data = new FormData()
    data.append("moz", useDataStore().order)
    fetch("pageData", {
        method: "POST",
        body: data,
    })
}
</script>

<template>
    <div class="container">
        <div class="header">
            <router-link class="back-button-container" to="/">
                <svg viewBox="0 0 512 512" class="back-button">
                    <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="48"
                        d="M112 328l144-144 144 144"
                    />
                </svg>
            </router-link>
            <p class="header-title">لیست سفارش شما:</p>
        </div>

        <div class="cart-items">
            <BasketItem
                v-for="(item, index) in useDataStore().basketItems"
                :value="item"
                :disabled="true"
                :key="index"
            />
            <p class="total-price">جمع کل: {{ $filters.price(useDataStore().basketTotalPrice) }}</p>
        </div>

        <router-link
            class="go-to-wait"
            v-if="useDataStore().basketItemsCount > 0"
            @click="SetOrder()"
            to="/wait"
        >
            تایید سفارش
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100%;
    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: fit-content;
        width: 100%;
        .back-button-container {
            height: 30px;
            width: 30px;
            margin: auto auto auto 10px;
            background: var(--box);
            border-radius: 10px;
            box-shadow: 0 2px 5px 2px var(--shadow);
            .back-button {
                width: 30px;
                margin-left: -2px;
                transform: rotate(-90deg);
                stroke: var(--icon);
            }
        }
        .header-title {
            font-size: 30px;
            font-weight: bold;
            direction: rtl;
            margin: 30px 20px 30px 0;
        }
    }
    .cart-items {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 80px;
        width: 100%;
        border-top: 1px solid var(--border);
        .total-price {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
        }
    }
    .go-to-wait {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: auto auto 10px auto;
        height: 37px;
        width: 240px;
        background: var(--box);
        box-shadow: 0 2px 5px 2px var(--shadow);
        border-radius: 10px;
        text-decoration: none;
    }
}
</style>
