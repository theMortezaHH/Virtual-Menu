<script setup>
import { useRouter } from "vue-router"
import useDataStore from "@/store/store.js"

const props = defineProps({
    value: Object,
})
const router = useRouter()

function changeNumber(param) {
    if (props.value.count + param < 0) return
    useDataStore().data.menuItems[props.value.id].count += param
}

function route() {
    // router.push("/info/" + props.value.id)
    return
}
</script>

<template>
    <div class="item">
        <img class="item-img" :src="props.value.image" @click="route()" />
        <div class="item-info">
            <p class="item-name">{{ props.value.title }}</p>
            <div>
                <p class="item-price">{{ $filters.price(props.value.price) }}</p>
                <p class="item-time">{{ props.value.duration }} دقیقه</p>
            </div>
            <div class="add-to-card">
                <img
                    class="remove"
                    v-if="props.value.count > 1"
                    src="@/assets/remove.svg"
                    @click="changeNumber(-1)"
                    alt="remove"
                />
                <img
                    class="remove"
                    v-if="props.value.count === 1"
                    src="@/assets/trash.svg"
                    @click="changeNumber(-1)"
                    alt="remove"
                />
                <p
                    class="add-to-basket-text"
                    v-if="props.value.count === 0"
                    @click="changeNumber(1)"
                >
                    افزودن به سبد خرید
                </p>
                <p class="number" v-if="props.value.count > 0">{{ props.value.count }}</p>
                <img class="add" src="@/assets/add.svg" @click="changeNumber(1)" alt="add" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 130px;
    width: 350px;
    margin: 0 10px 20px 10px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 5px 2px #00000055;
    .item-img {
        height: 122px;
        width: 122px;
        border-radius: 15px;
        margin: 4px 0 4px 4px;
    }
    .item-info {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        height: 100%;
        width: 100%;
        .item-name {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: start;
            align-items: end;
            margin: 6px 15px 15px 0;
            height: 35px;
            width: 100%;
            font-size: 22px;
            font-weight: bold;
        }
        div {
            position: relative;
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            .item-price {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin: 0 15px 0 0;
                height: 19px;
                font-size: 19px;
                font-weight: bold;
                direction: rtl;
            }
            .item-time {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin: 0 15px 0 0;
                height: 18px;
                font-size: 18px;
                opacity: 0.55;
                direction: rtl;
            }
        }
        .add-to-card {
            display: flex;
            position: relative;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: auto 15px auto auto;
            height: 35px;
            width: fit-content;
            padding: 0 4px;
            background: #f5f5f5;
            border-radius: 20px;
            box-shadow: 0 2px 5px 2px #00000055;
            .add-to-basket-text {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 5px;
                border-radius: 10px;
            }
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
                margin: 0 10px 0 10px;
                font-size: 25px;
                text-align: center;
            }
        }
    }
}
</style>
