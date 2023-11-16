<script setup lang="ts">
import { ref } from "vue"
import categoryCard from "@/components/categoryCard.vue"
import itemCard from "@/components/itemCard.vue"
import categoryItems from "@/database/categoryItems.ts"
import menuItems from "@/database/menuItems"

const selected = ref(1)
</script>

<template>
    <h2>Select your category</h2>
    <div class="menu-category-container">
        <categoryCard
            v-for="item in categoryItems"
            :key="item.id"
            :value="item"
            :selected="selected === item.id ? true : false"
            @click="selected = item.id"
        />
    </div>

    <h2>Menu</h2>
    <div class="menu-items-container">
        <itemCard v-for="item in menuItems" :key="item.id" :value="item" />
    </div>
</template>

<style scoped lang="scss">
.menu-category-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 10px 0 20px 0;
    overflow-x: scroll;
    border-top: 1px solid var(--text-color);
    border-bottom: 1px solid var(--text-color);
}
.menu-items-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>
