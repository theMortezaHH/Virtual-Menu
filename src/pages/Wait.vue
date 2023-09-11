<script setup>
import useDataStore from "@/store/store.js"
import BasketItem from "@/components/basket-item.vue"
</script>

<template>
    <div class="container">
        <img src="@/assets/checkmark.svg" class="checkmark" />
        <div class="header">
            <p class="header-title"
                >سفارش شما ثبت شد <br />
                لطفا منتظر بمانید</p
            >
        </div>

        <div class="cart-items">
            <BasketItem
                v-for="(item, index) in useDataStore().basketItems"
                :value="item"
                :disabled="true"
                :key="index"
            />
            <p class="total-price">جمع کل: {{ $filters.price(useDataStore().basketTotalPrice) }}</p>
            <img class="loading" src="@/assets/loading.svg" />
        </div>
    </div>
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
        margin: 20px auto 0 auto;
        background-color: #00ff00;
        border-radius: 50%;
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
        border-top: 1px solid #aaaaaa;
        .total-price {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
        }
        .loading {
            width: 50px;
        }
    }
}
</style>
