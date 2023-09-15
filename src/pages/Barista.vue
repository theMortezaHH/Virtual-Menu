<script setup>
import { ref } from "vue"

const data = ref({})

async function GetData() {
    const response = await fetch("./database/orders")
    data.value = await response.json()
    console.log(data.value)
}

console.log(data.value)
</script>

<template> </template>

<style lang="scss" scoped></style>
