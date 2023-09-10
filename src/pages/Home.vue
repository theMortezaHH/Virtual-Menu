<script setup>
import { onMounted, ref, computed, watch } from "vue"
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
const windowHight = window.innerHeight

onMounted(() => {
    setTimeout(() => {
        document.querySelector(".header").classList.add("goSmall")
    }, 500)
})
</script>

<template>
    <div class="container">
        <div class="header">
            <p>منوی مجازی</p>
        </div>
        <div class="category">
            <MenuCategory v-for="(item, index) in useDataStore().data.categoryItems" :value="item"
                :selected="selectedIndex === index" :key="index" @click="selectedIndex = index" />
        </div>

        <div class="product-container" :style="{ height: windowHight + 'px' }">
            <Product v-for="item in selectedCategoryItems" :value="item" :key="item.id" />
            <div style="height: 200px;"></div>
        </div>
    </div>
    <Transition name="basket-transition">
        <Basket v-if="useDataStore().basketItemsCount > 0" />
    </Transition>
</template>

<style lang="scss" scoped>
.basket-transition-enter-active {
    transition: all 0.3s ease-out;
}

.basket-transition-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.basket-transition-enter-from,
.basket-transition-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.container {
    height: 100dvh;
    width: 100dvw;

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
        flex-wrap: wrap;
        flex-direction: unset;
        justify-content: center;
        align-items: start;
        padding: 20px 0 0 0;
        overflow: auto;
    }
}
</style>
