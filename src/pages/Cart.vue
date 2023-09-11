<script setup>
import useDataStore from "@/store/store.js"
import BasketItem from "@/components/basket-item.vue"
</script>

<template>
    <div class="container">
        <div class="header">
            <router-link class="back-button-container" to="/">
                <img class="back-button" src="@/assets/chevron.svg" alt="back" />
            </router-link>
            <p class="header-title">لیست سفارشات شما:</p>
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

        <router-link class="go-to-wait" v-if="useDataStore().basketItemsCount > 0" to="/wait">
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
            background: #f5f5f5;
            border-radius: 10px;
            box-shadow: 0 2px 5px 2px #00000055;
            .back-button {
                width: 30px;
                margin-left: -2px;
                transform: rotate(-90deg);
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
        height: 100%;
        width: 100%;
        overflow: auto;
        border-top: 1px solid #aaaaaa;
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
        height: 50px;
        width: 240px;
        background: #f5f5f5;
        color: #000000;
        box-shadow: 0 2px 5px 2px #00000055;
        border-radius: 10px;
        text-decoration: none;
    }
}
</style>
