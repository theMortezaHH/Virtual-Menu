<script setup>
import useDataStore from "@/store/store.js"
import { useRoute } from "vue-router"
</script>

<template>
    <img :src="useDataStore().data.menuItems[useRoute().params.id].image" />
    <p>You are in /info/{{ useRoute().params.id }}</p>
</template>

<style lang="scss" scoped></style>
