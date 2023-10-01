<script setup>
const props = defineProps({
    value: Object,
    selected: Boolean,
    editor: Boolean,
})
</script>

<template>
    <div class="category-card">
        <div :class="{ selected }">
            <img :src="props.value.image" />
            <svg
                class="edit-icon"
                viewBox="0 0 512 512"
                v-if="props.editor && props.selected"
            >
                <path
                    d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                />
                <path
                    d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"
                />
            </svg>
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
        .edit-icon {
            position: absolute;
            height: 35px;
            width: 35px;
            top: 5px;
            right: 5px;
            background: var(--box);
            fill: var(--icon);
            stroke: var(--icon);
            border-radius: 5px;
            border: 1px solid var(--border);
        }
        P {
            width: 85px;
            margin: auto;
        }
    }
    .selected {
        box-shadow: 0 2px 5px 2px var(--shadow);
        border: 1px solid var(--border);
    }
}
</style>
