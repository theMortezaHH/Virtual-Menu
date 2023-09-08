<script setup>
import { useRoute } from "vue-router"
const route = useRoute()
const id = route.params.id.toString()
</script>

<template> Id: {{ id }} </template>
