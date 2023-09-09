<script setup>
import { onMounted, ref, computed } from "vue"
import useDataStore from "@/store/store.js"
import MenuCategory from "@/components/menu-category.vue"
import Product from "@/components/product.vue"
import Basket from "@/components/basket.vue"

const selectedIndex = ref(0)
const selectedCategoryItems = computed(() => {
    if (!useDataStore().data.categoryItems) {
        return
    }
    const selectedId = useDataStore().data.categoryItems[selectedIndex.value].id
    return useDataStore().data.menuItems.filter((x) => x.categoryId === selectedId)
})
const calculatedHeight = window.innerHeight - 260

onMounted(() => {
    setTimeout(() => {
        document.querySelector(".header").classList.add("goSmall")
    }, 1000)
})
</script>

<template>
    <div class="header">
        <p>منوی مجازی</p>
    </div>
    <div class="category">
        <MenuCategory
            v-for="(item, index) in useDataStore().data.categoryItems"
            :value="item"
            :selected="selectedIndex === index"
            :key="index"
            @click="selectedIndex = index"
        />
    </div>

    <div class="product-container" :style="{ height: calculatedHeight + 'px' }">
        <Product v-for="item in selectedCategoryItems" :value="item" :key="item.id" />
    </div>

    <Basket />
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    transition-duration: 0.5s;

    p {
        margin: auto 30px auto auto;
        font-size: 40px;
        font-weight: 500;
        transition-duration: 0.5s;
    }
    &.goSmall {
        height: 50px;
        p {
            font-size: 20px;
        }
    }
}

.category {
    display: flex;
    position: relative;
    flex-direction: row-reverse;
    justify-content: end;
    align-items: start;
    height: 160px;
    width: 100%;
    text-align: center;
    background: #ffffff;
    border-top: 1px solid #c0c0c0;
    border-bottom: 1px solid #c0c0c0;
    overflow: auto;
}
.product-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 20px 0 0 0;
    overflow: auto;
}
</style>
