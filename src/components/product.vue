<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
    value: Object,
})

const count = ref(JSON.parse(localStorage.getItem("data")).menuItems[props.value.id - 1].count)
const id = "removable" + props.value.id

function changeNumber(param) {
    if (count.value + param < 0) return
    if (count.value + param === 0) {
        document.querySelector("#" + id + " .number").style.display = "none"
        document.querySelector("#" + id + " .remove").style.display = "none"
    } else {
        document.querySelector("#" + id + " .number").style.display = "block"
        document.querySelector("#" + id + " .remove").style.display = "block"
    }
    if (count.value + param === 1) {
        document.querySelector("#" + id + " .remove").src = "src/assets/trash.svg"
    } else {
        document.querySelector("#" + id + " .remove").src = "src/assets/remove.svg"
    }
    count.value += param
    const data = JSON.parse(localStorage.getItem("data"))
    data.menuItems[props.value.id - 1].count = count.value
    localStorage.setItem("data", JSON.stringify(data))
}

onMounted(() => {
    changeNumber(0)
})
</script>

<template>
    <div class="item">
        <img class="item-img" :src="props.value.image" />
        <div class="item-info">
            <p class="item-name">{{ props.value.title }}</p>
            <p class="item-time">{{ props.value.duration }} دقیقه</p>
            <p class="item-price">{{ props.value.price }} تومان</p>
        </div>
        <div class="add-to-card" :id="id">
            <img class="add" src="src/assets/add.svg" @click="changeNumber(1)" alt="add" />
            <p class="number">{{ count }}</p>
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
.item {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 130px;
    width: 350px;
    margin: 0 auto 20px auto;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 2px 5px 2px #00000055;
    .item-img {
        height: 122px;
        width: 122px;
        border-radius: 15px;
        margin-left: 4px;
    }
    .item-info {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 130px;
        width: 150px;
        margin-left: 15px;
    }
    .item-name {
        height: 20px;
        margin: -10px auto 40px 0;
        font-size: 20px;
        font-weight: bold;
    }
    .item-time {
        height: 18px;
        margin: 0 0 5px 0;
        font-size: 18px;
        opacity: 0.55;
        direction: rtl;
    }
    .item-price {
        height: 20px;
        margin: 0;
        font-size: 20px;
        direction: rtl;
    }
    .add-to-card {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 110px;
        width: 35px;
        padding: 4px 0;
        background: #f5f5f5;
        border-radius: 20px;
        box-shadow: 0 2px 5px 2px #00000055;
        img {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            box-shadow: 0 2px 5px 2px #00000055;
            background: #ffffff;
        }
        .add {
            margin: outo;
        }
        .number {
            height: 25px;
            width: 40px;
            margin: 8px auto auto auto;
            padding: 0 5px 0 0;
            font-size: 25px;
            text-align: center;
        }
    }
}
</style>
