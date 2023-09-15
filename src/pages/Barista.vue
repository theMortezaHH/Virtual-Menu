<script setup>
import { ref, onMounted } from "vue"

const data = ref({})

async function getData() {
    const response = await fetch("../database/orders")
    data.value = await response.text()
}
onMounted(()=> {  getData() })

</script>

<template>
{{ data }}
</template>

<style lang="scss" scoped></style>
