<script setup>
import customerStore from "@/store/customer-store.js"
import { useRoute } from "vue-router"
</script>

<template>
    <img :src="customerStore().data.menuItems[useRoute().params.id].image" />
    <p>You are in /info/{{ useRoute().params.id }}</p>
</template>

<style lang="scss" scoped></style>
