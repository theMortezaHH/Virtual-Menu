<script setup lang="ts">
import { ref } from "vue"
import menuItemObject from "@/types/menuItemObject"
import Button from "primevue/button"
import InputNumber from "primevue/inputnumber"

interface props {
    value: menuItemObject
}
const props = defineProps<props>()

const orderCount = ref(0)
</script>

<template>
    <div class="item-card">
        <img class="image" :src="props.value.image" :alt="props.value.title" />
        <div class="item-info">
            <p class="title">{{ props.value.title }}</p>
            <p class="price">{{ props.value.price.toLocaleString() }} تومان</p>
            <p class="duration">{{ props.value.duration }} دقیقه</p>
        </div>
        <Button
            class="add-to-cart-button"
            v-if="!orderCount"
            icon="pi pi-cart-plus"
            aria-label="Add to cart"
            rounded
            @click="orderCount = 1"
        />
        <div class="order-count" v-if="orderCount >= 1">
            <Button icon="pi pi-plus" aria-label="Add" @click="orderCount += 1" />
            <InputNumber class="input-number" v-model="orderCount" :min="0" :max="15" />
            <Button
                icon="pi pi-minus"
                v-if="orderCount >= 2"
                aria-label="Minus"
                severity="danger"
                @click="orderCount -= 1"
            />
            <Button
                icon="pi pi-times"
                v-if="orderCount === 1"
                aria-label="Minus"
                severity="danger"
                @click="orderCount -= 1"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.item-card {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;
    height: 150px;
    min-width: 370px;
    max-width: 500px;
    flex-grow: 1;
    background: var(--surface-card);
    border: 2px solid var(--surface-border);
    border-radius: var(--border-radius);
    .image {
        width: 140px;
        margin: 5px 15px 5px 5px;
        border-radius: var(--border-radius);
    }
    .item-info {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        height: 100%;
        max-width: 150px;
        .title {
            display: flex;
            height: 40px;
            width: 100%;
            font-size: 20px;
            font-weight: bold;
            margin: 20px 0 0 0;
        }
        .price {
            margin: 25px 0 5px 0;
            font-size: 17px;
            font-weight: bold;
            opacity: 0.9;
        }
        .duration {
            margin: 0;
            font-weight: bold;
            opacity: 0.6;
        }
    }
    .add-to-cart-button {
        display: block;
        margin: auto 10px auto auto;
    }
    .order-count {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto 10px auto auto;
        width: 50px;
        :deep {
            .p-inputnumber-input {
                width: 50px;
                text-align: center;
            }
        }
    }
}
</style>
