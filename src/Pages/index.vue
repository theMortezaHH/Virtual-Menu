<script setup>
import { ref, computed } from "vue"
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

    <Product v-for="item in selectedCategoryItems" :value="item" :key="item.id" />

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
