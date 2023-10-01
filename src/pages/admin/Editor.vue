<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import customerStore from "@/store/customer-store.js"
import MenuCategory from "@/components/menu-category.vue"
import Product from "@/components/product.vue"
import Sidebar from "@/components/sidebar.vue"

const selectedIndex = ref(0)
const selectedCategoryItems = computed(() => {
    if (!customerStore().data.categoryItems) {
        return
    }
    const selectedId =
        customerStore().data.categoryItems[selectedIndex.value].id
    return customerStore().data.productItems.filter(
        (x) => x.categoryId === selectedId
    )
})
const calculatedHeight = window.innerHeight - 230
</script>

<template>
    <div class="container">
        <div class="header">
            <p class="headerTitle">ویرایش منو</p>
        </div>
        <div class="category">
            <MenuCategory
                v-for="(item, index) in customerStore().data.categoryItems"
                :value="item"
                :selected="selectedIndex === index"
                :editor="true"
                :key="item.id"
                @click="selectedIndex = index"
            />
        </div>

        <div
            class="product-container"
            :style="{ height: calculatedHeight + 'px' }"
        >
            <Product
                v-for="(item, index) in selectedCategoryItems"
                :value="item"
                :position="index"
                :editor="true"
                :key="item.id"
            />
        </div>
    </div>

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
        .orderInfo {
            display: flex;
            flex-direction: row;
            margin: auto 0 auto 20px;
            padding: 5px 10px 5px 5px;
            border: 1px solid var(--border);
            border-radius: 15px;
            .loading {
                width: 35px;
                margin: auto 0 auto 0px;
            }
            .orderTitle {
                margin: auto 0 auto 0;
                font-size: 18px;
                direction: rtl;
            }
        }
        .headerTitle {
            margin: auto 80px auto auto;
            font-size: 25px;
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
