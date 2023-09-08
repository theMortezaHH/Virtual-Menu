<script setup>
import useDataStore from "../store/store"
import BasketItem from "./basket-item.vue"

function ShowBasket() {
    document.querySelector(".basket").classList.toggle("show-basket")
}
</script>

<template>
    <div class="basket">
        <div class="basket-header" @click="ShowBasket()">
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
                :key="index"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        height: 50px;
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
}
</style>
