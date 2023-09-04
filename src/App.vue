<script setup>
import { onMounted, ref, computed } from "vue"
import MenuCategory from "./components/menu-category.vue"
import Product from "./components/product.vue"
import Basket from "./components/basket.vue"

const categoryItems = ref([])
const menuItems = ref([])
const selectedIndex = ref(0)
// const basket = ref([])
onMounted(() => {
    getData()
})

async function getData() {
    const response = await fetch("src/database/MenuData.obj")
    const data = await response.json()
    for (let index = 0; index < data.menuItems.length; index++) {
        data.menuItems[index].count = 0
    }
    localStorage.setItem("data", JSON.stringify(data))
    categoryItems.value = JSON.parse(localStorage.getItem("data")).categoryItems
    menuItems.value = JSON.parse(localStorage.getItem("data")).menuItems
}

const selectedCategoryItems = computed(() => {
    if (!categoryItems.value.length) return
    const selectedId = categoryItems.value[selectedIndex.value].id
    return menuItems.value.filter((x) => x.categoryId === selectedId)
})

// function updateBasket(count, item) {
//     const basketItem = basket.value.findIndex((x) => x.item.id === item.id)
//     if ((basketItem === -1) & (count > 0)) {
//         basket.value[item.id - 1] = { item, count }
//     } else if (count === 0) {
//         basket.value.splice(basketItem, 1)
//     } else {
//         basket.value[basketItem].count = count
//     }
//     for (let index = 0; index < basket.value.length; index++) {
//         if (basket.value[index]) {
//             basket.push()
//         }
//     }
//     localStorage.setItem("basket", JSON.stringify(basket.value))
// const moz = JSON.parse(localStorage.getItem("basket")).filter((x) => x.item.id === "1")
// console.log(basket.value[0].count)

// for (let index = 0; index < basket.value.length; index++) {
//     console.log(basket.value[index] ? basket.value[index].count : 0)
// }
// }
</script>

<template>
    <div class="header">
        <p>منوی مجازی</p>
    </div>
    <div class="category">
        <MenuCategory
            v-for="(item, index) in categoryItems"
            :value="item"
            :selected="selectedIndex === index"
            :key="index"
            @click="selectedIndex = index"
        />
    </div>

    <Product
        v-for="(item, index) in selectedCategoryItems"
        :value="item"
        :key="item.id"
        @update-count="updateBasket($event, item)"
    />

    <Basket />
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;

    p {
        margin: auto 30px auto auto;
        font-size: 40px;
        font-weight: 500;
    }
}

.category {
    display: flex;
    position: relative;
    flex-direction: row-reverse;
    justify-content: end;
    align-items: start;
    margin-bottom: 30px;
    height: 170px;
    width: 100%;
    text-align: center;
    background: #ffffff;
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    overflow: auto;
}
</style>
