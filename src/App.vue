<script setup lang="ts">
import { ref } from "vue"
import TabMenu from "primevue/tabmenu"

const items = ref([
    {
        label: "Menu",
        icon: "pi pi-th-large",
        to: "/",
    },
    {
        label: "Cart",
        icon: "pi pi-shopping-cart",
        to: "/cart",
    },
    {
        label: "Settings",
        icon: "pi pi-cog",
        to: "/settings",
    },
])
</script>

<template>
    <TabMenu :model="items" class="header" />

    <RouterView />
</template>

<style scoped lang="scss">
.header {
    margin: 0 0 20px 0;
}
</style>
