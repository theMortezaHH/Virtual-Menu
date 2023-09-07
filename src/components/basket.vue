<script setup>
import BasketItem from "./basket-item.vue"
import useBasketStore from "../store/basket.js"

const basketStore = useBasketStore()

function ShowBasket() {
    const item = document.querySelector(".basket")
    if (item.classList.contains("show-basket")) {
        item.classList.remove("show-basket")
    } else {
        item.classList.add("show-basket")
    }
}
</script>
<template>
    <div class="basket">
        <div class="basket-header" @click="ShowBasket()">
            <img
                class="basket-icon"
                :class="{ shake: basketStore.animatedBasket }"
                src="src/assets/basket.svg"
            />
            <p v-if="basketStore.itemsCount > 0" class="items-in-basket">{{
                basketStore.itemsCount
            }}</p>
            <p v-if="basketStore.itemsCount > 0" class="items-total-price">
                جمع کل: {{ basketStore.totalPrice }} تومان
            </p>
            <p v-else class="items-total-price"> سبد شما خالیست </p>
            <img class="chevron" src="src/assets/chevron.svg" />
        </div>
        <!-- <BasketItem v-for="item in data.value" :value="value" /> -->
    </div>
</template>
<style lang="scss" scoped>
.basket {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: -450px;
    height: 500px;
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
        margin: 0 auto auto auto;
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
}

.shake {
    -webkit-animation: shake 40s ease infinite;
    -moz-animation: shake 40s ease infinite;
    animation: shake 40s ease infinite;
}

@keyframes shake {
    1% {
        transform: rotateZ(15deg);
        transform-origin: 50% 0%;
    }

    2% {
        transform: rotateZ(-15deg);
        transform-origin: 50% 0%;
    }

    3% {
        transform: rotateZ(20deg);
        transform-origin: 50% 0%;
    }

    4% {
        transform: rotateZ(-20deg);
        transform-origin: 50% 0%;
    }

    5% {
        transform: rotateZ(15deg);
        transform-origin: 50% 0%;
    }

    6% {
        transform: rotateZ(-15deg);
        transform-origin: 50% 0%;
    }

    7% {
        transform: rotateZ(0);
        transform-origin: 50% 0%;
    }

    100% {
        transform: rotateZ(0);
        transform-origin: 50% 0%;
    }
}
</style>
