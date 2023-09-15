<script setup>
import { onMounted, ref } from "vue"

const data = ref({})

async function getData() {
    const response = await fetch("../database/orders")
    data.value = await response.json()
}

onMounted(() => {
    getData()
})
</script>

<template>
    <p>{{ data.orders }}</p>
</template>

<style lang="scss" scoped></style>
