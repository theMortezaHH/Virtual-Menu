<script setup>
import { useRoute } from "vue-router"
</script>

<template>
    <p>You are in /info/{{ useRoute().params.name }}</p>
</template>

<style lang="scss" scoped></style>
