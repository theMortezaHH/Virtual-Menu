<script setup>
import useDataStore from "@/store/store.js"

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
            <svg
                viewBox="0 0 512 512"
                class="remove"
                v-if="(props.value.count > 1) & !props.disabled"
                @click="changeNumber(-1)"
            >
                <title>Remove</title>
                <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M400 256H112"
                />
            </svg>
            <svg
                viewBox="0 0 512 512"
                class="remove"
                v-if="(props.value.count === 1) & !props.disabled"
                @click="changeNumber(-1)"
            >
                <path
                    d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                />
                <path
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M80 112h352"
                />
                <path
                    d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                />
            </svg>

            <p class="number">{{ props.value.count }}</p>

            <svg
                viewBox="0 0 512 512"
                class="add"
                v-if="!props.disabled"
                @click="changeNumber(1)"
                alt="add"
            >
                <title>Add</title>
                <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M256 112v288M400 256H112"
                />
            </svg>
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
    border-bottom: 1px solid var(--border);
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

        svg {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            box-shadow: 0 2px 5px 2px var(--shadow);
            background: var(--background);
            stroke: var(--icon);
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
