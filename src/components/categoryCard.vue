<script setup lang="ts">
import Card from "primevue/card"
import categoryItemObject from "@/types/categoryItemObject"

interface props {
    value: categoryItemObject
    selected: boolean
}
const props = defineProps<props>()
</script>

<template>
    <Card class="card" :class="{ selected }">
        <template #header>
            <img :src="props.value.image" class="image" />
        </template>
        <template #title>
            <p class="title">{{ props.value.title }}</p>
        </template>
    </Card>
</template>

<style scoped lang="scss">
.card {
    width: 100px;
    height: 140px;
    margin: 0 10px;
    transition-duration: 0.3s;
    cursor: pointer;
    &.selected {
        box-shadow: var(--focus-ring);
    }

    :deep {
        .p-card-body {
            padding: 0;
        }
        .p-card-content {
            padding: 0;
        }
    }
    .image {
        width: 90px;
        border-radius: 6px;
        margin: 5px;
    }
    .title {
        font-size: 15px;
        margin: 0;
        padding: 7px;
        text-align: center;
    }
}
</style>
