<script setup>
import useDataStore from "../store/store"
import BasketItem from "../components/basket-item.vue"
</script>

<template>
    <div class="container">
        <p class="header">لیست سفارشات شما:</p>

        <div class="cart-items">
            <BasketItem
                v-for="(item, index) in useDataStore().basketItems"
                :value="item"
                :disabled="true"
                :key="index"
            />
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
        font-size: 30px;
        font-weight: bold;
        direction: rtl;
        margin: 30px 20px 30px 0;
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
