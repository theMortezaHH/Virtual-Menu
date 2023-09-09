<script setup>
import useDataStore from "../store/store"

const props = defineProps({
    value: Object,
    disabled: Boolean,
})

function changeNumber(param) {
    if (props.value.count + param < 0 || props.disabled === true) return
    useDataStore().data.menuItems[props.value.id].count += param
}
</script>

<template>
    <div class="basket-item-card">
        <p class="item-name">{{ props.value.title }}</p>
        <p class="item-price">{{ $filters.price(props.value.price) }}</p>
        <div class="add-to-card">
            <img
                class="remove"
                v-if="(props.value.count > 1) & !props.disabled"
                src="@/assets/remove.svg"
                @click="changeNumber(-1)"
                alt="remove"
            />
            <img
                class="remove"
                v-if="(props.value.count === 1) & !props.disabled"
                src="@/assets/trash.svg"
                @click="changeNumber(-1)"
                alt="remove"
            />
            <p class="number">{{ props.value.count }}</p>
            <img
                class="add"
                v-if="!props.disabled"
                src="@/assets/add.svg"
                @click="changeNumber(1)"
                alt="add"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.basket-item-card {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 8px 0 0 0;
    padding: 0 0 8px 0;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #aaaaaa;
    .item-name {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        margin: auto;
        height: 35px;
        width: fit-content;
        font-size: 18px;
        font-weight: bold;
    }
    .item-price {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: auto 15px auto 0;
        height: 19px;
        width: fit-content;
        font-size: 16px;
        direction: rtl;
    }
    .add-to-card {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: auto 15px auto 15px;
        height: 35px;
        width: fit-content;

        img {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            box-shadow: 0 2px 5px 2px #00000055;
            background: #ffffff;
        }
        .number {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 25px;
            width: 40px;
            margin: 0 5px 0 5px;
            font-size: 25px;
            text-align: center;
        }
    }
}
</style>
