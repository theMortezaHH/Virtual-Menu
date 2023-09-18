<script setup>
import { ref } from "vue"
import customerStore from "@/store/customer-store.js"
import BasketItem from "@/components/basket-item.vue"

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
    <div class="prevent-click" @click="ShowBasket" v-if="basketVisible"></div>
    <div class="basket">
        <div class="basket-header" @click="ShowBasket">
            <svg viewBox="0 0 512 512" class="basket-icon">
                <title>Basket</title>
                <path
                    d="M68.4 192A20.38 20.38 0 0048 212.2a17.87 17.87 0 00.8 5.5L100.5 400a40.46 40.46 0 0039.1 29.5h232.8a40.88 40.88 0 0039.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 00-20.4-20.2H68.4zm193.32 160.07A42.07 42.07 0 11304 310a42.27 42.27 0 01-42.28 42.07z"
                    fill="none"
                    stroke-linejoin="round"
                    stroke-width="32"
                />
                <path
                    fill="none"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M160 192l96-128 96 128"
                />
            </svg>
            <p
                class="items-in-basket"
                v-if="customerStore().basketItemsCount > 0"
            >
                {{ customerStore().basketItemsCount }}
            </p>
            <p
                class="items-total-price"
                v-if="customerStore().basketTotalPrice > 0"
            >
                جمع کل: {{ $filters.price(customerStore().basketTotalPrice) }}
            </p>
            <p
                class="items-total-price"
                v-if="customerStore().basketTotalPrice === 0"
            >
                سبد خرید شما خالیست
            </p>
            <svg viewBox="0 0 512 512" class="chevron">
                <title>Chevron Up</title>
                <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="48"
                    d="M112 328l144-144 144 144"
                />
            </svg>
        </div>
        <div class="basket-item-container">
            <BasketItem
                v-for="(item, index) in customerStore().basketItems"
                :value="item"
                :editDisabled="false"
                :key="index"
            />
        </div>
        <router-link
            class="go-to-card"
            v-if="customerStore().basketItemsCount > 0"
            to="/cart"
        >
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
    background: var(--background);
    box-shadow: 0 2px 5px 2px var(--shadow);
    border-top: 1px solid var(--border);
    transition-duration: 0.3s;

    &.show-basket {
        bottom: 0px;
        .basket-header {
            border-bottom: 1px solid var(--border);
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
        background: var(--background);

        .basket-icon {
            width: 30px;
            margin: 0 0 0 30px;
            stroke: var(--icon);
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
            stroke: var(--icon);
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
        background: var(--box);
        box-shadow: 0 2px 5px 2px var(--shadow);
        border: 1px solid var(--border);
        border-radius: 10px;
        text-decoration: none;
    }
}
</style>
