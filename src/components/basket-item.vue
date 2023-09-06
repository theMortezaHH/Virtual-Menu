<script setup></script>
<template>
    <div class="basket-item-card">
        <p class="item-name">پیتزا پپرونی</p>
        <p class="items-value">13500 تومان</p>
        <div class="add-to-card" :id="id">
            <img class="add" src="src/assets/add.svg" @click="changeNumber(1)" alt="add" />
            <p class="number">20</p>
            <img
                class="remove"
                src="src/assets/remove.svg"
                @click="changeNumber(-1)"
                alt="remove"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.basket-item-card {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .add-to-card {
        display: flex;
        position: relative;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        padding: 4px 0;
        border-radius: 20px;
        img {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            margin: 0;
            box-shadow: 0 2px 5px 2px #00000055;
            background: #ffffff;
        }
        .add {
            margin: outo;
        }
        .number {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            height: 25px;
            width: 40px;
            font-size: 20px;
            text-align: center;
        }
    }
}
</style>
