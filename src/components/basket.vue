<script setup>
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
    <div class="basket" @click="ShowBasket(this)">
        <img class="basket-icon" src="src/assets/basket.svg" />
        <p class="items-in-basket">6</p>
        <p class="items-total-price">جمع کل: 538760 تومان</p>
        <img class="chevron" src="src/assets/chevron.svg" />
    </div>
</template>
<style lang="scss" scoped>
.basket {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 0;
    height: 50px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 1px 5px 2px #00000055;
    transition-duration: 0.4s;
    &.show-basket {
        bottom: 600px;

        .chevron {
            transform: rotate(180deg);
        }
    }

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
        width: 30px;
        margin: 0 30px 0 0;
        transition-duration: 0.4s;
        transform: rotate(0deg);
    }
}
</style>
