<script setup>
import { useRouter } from "vue-router"
import customerStore from "@/store/customer-store.js"
import { onMounted, ref } from "vue"

const props = defineProps({
    value: Object,
    position: Number,
    editor: Boolean,
})
// const router = useRouter()
const translateX = ref("translateX(-20px)")
const opacity = ref(0)

function changeNumber(param) {
    if (props.value.count + param < 0) return
    customerStore().data.productItems[props.value.id].count += param
}
function route() {
    // router.push("/info/" + props.value.id)
    return
}

onMounted(() => {
    setTimeout(() => {
        translateX.value = "translateX(0px)"
        opacity.value = 1
    }, props.position * 100)
})
</script>

<template>
    <div class="item">
        <img class="item-img" :src="props.value.image" @click="route()" />
        <div class="item-info">
            <p class="item-name">{{ props.value.title }}</p>
            <div>
                <p class="item-price">
                    {{ $filters.price(props.value.price) }}
                </p>
                <p class="item-time">{{ props.value.duration }} دقیقه</p>
            </div>
            <div class="add-to-cart" v-if="!props.editor">
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
                <p
                    class="add-to-basket-text"
                    v-if="props.value.count === 0"
                    @click="changeNumber(1)"
                >
                    افزودن به سبد خرید
                </p>

                <p class="number" v-if="props.value.count > 0">
                    {{ props.value.count }}
                </p>

                <svg
                    viewBox="0 0 512 512"
                    class="add"
                    v-if="!props.disabled"
                    @click="changeNumber(1)"
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
            <div class="edit" v-if="props.editor">
                <p class="edit-title">ویرایش</p>
                <svg viewBox="0 0 512 512">
                    <path
                        d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                    />
                    <path
                        d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"
                    />
                </svg>
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
    background: var(--box);
    border: 1px solid var(--border);
    border-radius: 15px;
    box-shadow: 0 2px 5px 2px var(--shadow);
    transition-duration: 0.5s;
    transform: v-bind(translateX);
    opacity: v-bind(opacity);
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
        .add-to-cart {
            display: flex;
            position: relative;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: auto 15px auto auto;
            height: 35px;
            width: fit-content;
            padding: 0 4px;
            background: var(--background);
            border-radius: 20px;
            box-shadow: 0 2px 5px 2px var(--shadow);
            .add-to-basket-text {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 5px;
                border-radius: 10px;
            }
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
                margin: 0 10px 0 10px;
                font-size: 25px;
                text-align: center;
            }
        }
        .edit {
            display: flex;
            position: relative;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: auto 15px auto auto;
            height: 35px;
            width: fit-content;
            padding: 0 4px;
            background: var(--background);
            border-radius: 20px;
            box-shadow: 0 2px 5px 2px var(--shadow);
            svg {
                width: 26px;
                height: 26px;
                fill: var(--icon);
                stroke: var(--icon);
                margin: 0 5px 0 0;
            }
            .edit-title {
                margin: 0 5px 0 5px;
            }
        }
    }
}
</style>
