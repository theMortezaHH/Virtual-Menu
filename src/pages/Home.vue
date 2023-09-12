<script setup>
import { ref, computed } from "vue"
import useDataStore from "@/store/store.js"
import MenuCategory from "@/components/menu-category.vue"
import Product from "@/components/product.vue"
import Basket from "@/components/basket.vue"
import Sidebar from "@/components/sidebar.vue"

const selectedIndex = ref(0)
const selectedCategoryItems = computed(() => {
    if (!useDataStore().data.categoryItems) {
        return
    }
    const selectedId = useDataStore().data.categoryItems[selectedIndex.value].id
    return useDataStore().data.menuItems.filter((x) => x.categoryId === selectedId)
})
const calculatedHeight = window.innerHeight - 280
</script>

<template>
    <div class="container">
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
    </div>

    <Basket />
    <Sidebar />
</template>

<style lang="scss" scoped>
.container {
    height: 100dvh;
    width: 100dvw;
    .header {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 100%;
        p {
            margin: auto 80px auto auto;
            font-size: 25px;
            font-weight: 500;
        }
        .menu-icon {
            width: 30px;
            margin: auto 20px auto 0;
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
        background: var(--background);
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
        overflow: auto;
    }
    .product-container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-direction: unset;
        justify-content: center;
        align-items: start;
        padding: 20px 0 0 0;
        overflow: auto;
    }
}
</style>
