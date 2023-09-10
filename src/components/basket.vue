<script setup>
import { onMounted, ref } from "vue"
import useDataStore from "../store/store"
import BasketItem from "./basket-item.vue"

const basketVisible = ref(false)

function ShowBasket() {
    if (!basketVisible.value) {
        document.querySelector(".basket").classList.add("show-basket")
        basketVisible.value = true
    } else {
        document.querySelector(".basket").classList.remove("show-basket")
        basketVisible.value = false
    }
}
</script>

<template>
    <div class="prevent-click" @click="ShowBasket" v-if="basketVisible"> </div>
    <div class="basket">
        <div class="basket-header" @click="ShowBasket">
            <img class="basket-icon" src="@/assets/basket.svg" />
            <p class="items-in-basket" v-if="useDataStore().basketItemsCount > 0">
                {{ useDataStore().basketItemsCount }}
            </p>
            <p class="items-total-price" v-if="useDataStore().basketTotalPrice > 0">
                جمع کل: {{ $filters.price(useDataStore().basketTotalPrice) }}
            </p>
            <p class="items-total-price" v-if="useDataStore().basketTotalPrice === 0">
                سبد خرید شما خالیست
            </p>
            <img class="chevron" src="@/assets/chevron.svg" />
        </div>
        <div class="basket-item-container">
            <BasketItem
                v-for="(item, index) in useDataStore().basketItems"
                :value="item"
                :disabled="false"
                :key="index"
            />
        </div>
        <router-link class="go-to-card" v-if="useDataStore().basketItemsCount > 0" to="/cart">
            ثبت سفارش
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.prevent-click {
    position: fixed;
    height: 100dvh;
    width: 100dvw;
    backdrop-filter: blur(5px);
    top: 0;
    left: 0;
}
.basket {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    bottom: -350px;
    height: 400px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 1px 5px 3px #00000066;
    transition-duration: 0.3s;

    &.show-basket {
        bottom: 0px;
        .basket-header {
            border-bottom: 1px solid #aaaaaa;
            .chevron {
                transform: rotate(180deg);
            }
        }
    }
    .basket-header {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 65px;
        width: 100%;
        background: #ffffff;

        .basket-icon {
            width: 30px;
            margin: 0 0 0 30px;
        }
        .items-in-basket {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 17px;
            width: 17px;
            padding-top: 3px;
            margin: 15px 0 0 -10px;
            font-size: 14px;
            font-weight: bolder;
            color: #ffffff;
            background: #ff0000;
            border-radius: 50%;
        }
        .items-total-price {
            font-size: 19px;
            margin: auto;
        }
        .chevron {
            width: 25px;
            margin: 0 30px 0 0;
            transition-duration: 0.3s;
            transform: rotate(0deg);
        }
    }
    .basket-item-container {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 100%;
        width: 100%;
        overflow: auto;
    }
    .go-to-card {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 0 10px 0;
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
