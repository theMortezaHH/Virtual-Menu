<script setup>
const props = defineProps({
    value: Object,
    selected: Boolean,
})
</script>

<template>
    <div class="category-card">
        <div :class="{ selected }">
            <img :src="props.value.image" />
            <p>{{ props.value.title }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.category-card {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100px;

    div {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 140px;
        width: 90px;
        border-radius: 15px;
        margin: 0 10px;
        background: var(--box);
        box-shadow: 0 0 0 0;
        transition-duration: 0.1s;

        img {
            width: 82px;
            height: 82px;
            margin: 4px auto 0 auto;
            border-radius: 15px;
        }
        P {
            width: 85px;
            margin: auto;
        }
    }

    .selected {
        box-shadow: 0 2px 5px 2px var(--shadow);
    }
}
</style>
