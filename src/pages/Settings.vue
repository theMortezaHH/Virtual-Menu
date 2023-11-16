<script setup lang="ts">
import Dropdown from "primevue/dropdown"

import { ref } from "vue"

const selectedColortheme = ref<string>()
const colorthemes = ref([
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
])
</script>

<template>
    <h2>Select colortheme</h2>
    <div class="p-float-label">
        <Dropdown
            class="colortheme-selection"
            v-model="selectedColortheme"
            inputId="dd-city"
            :options="colorthemes"
            optionLabel="name"
        />
        <label for="dd-city">Select a City</label>
    </div>
</template>

<style scoped lang="scss">
.colortheme-selection {
    width: 200px;
}
</style>
