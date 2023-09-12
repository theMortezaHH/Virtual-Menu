<script setup>
import { ref } from "vue"

const sidebarVisible = ref(false)

function ShowSidebar() {
    if (!sidebarVisible.value) {
        document.querySelector(".sidebar").classList.add("show-sidebar")
        sidebarVisible.value = true
    } else {
        document.querySelector(".sidebar").classList.remove("show-sidebar")
        sidebarVisible.value = false
    }
}
</script>

<template>
    <svg viewBox="0 0 512 512" class="menu-icon" @click="ShowSidebar">
        <title>Menu</title>
        <path
            fill="none"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="48"
            d="M88 152h336M88 256h336M88 360h336"
        />
    </svg>
    <div class="prevent-click" @click="ShowSidebar" v-if="sidebarVisible"> </div>
    <div class="sidebar" @click="ShowSidebar"> </div>
</template>

<style lang="scss" scoped>
.prevent-click {
    position: fixed;
    height: 100dvh;
    width: 100dvw;
    backdrop-filter: blur(5px);
    top: 0;
    left: 0;
}
.sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    right: -165px;
    bottom: 0;
    height: 100%;
    width: 160px;
    background: var(--background);
    box-shadow: 0 2px 5px 2px var(--shadow);
    transition-duration: 0.3s;

    &.show-sidebar {
        right: 0px;
    }
}
.menu-icon {
    position: fixed;
    width: 30px;
    right: 20px;
    top: 20px;
    stroke: var(--icon);
}
</style>
