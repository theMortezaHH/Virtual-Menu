<script setup>
import { onMounted, ref } from "vue"

const sidebarVisible = ref(false)
const colorTheme = ref(true)

function ShowSidebar() {
    if (!sidebarVisible.value) {
        document.querySelector(".sidebar").classList.add("show-sidebar")
        sidebarVisible.value = true
    } else {
        document.querySelector(".sidebar").classList.remove("show-sidebar")
        sidebarVisible.value = false
    }
}

function ChangeColorTheme() {
    if (!colorTheme.value) {
        document.querySelector("body").classList.remove("dark-theme")
        localStorage.setItem("colorTheme", true)
        colorTheme.value = true
    } else {
        document.querySelector("body").classList.add("dark-theme")
        localStorage.setItem("colorTheme", false)
        colorTheme.value = false
    }
}
onMounted(() => {
    if (localStorage.getItem("colorTheme") === null) {
        return
    }
    if (localStorage.getItem("colorTheme") === "true") {
        colorTheme.value = false
    }
    ChangeColorTheme()
})
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
    <div class="sidebar">
        <div class="mode-selector" :class="{ selected: colorTheme }" @click="ChangeColorTheme()">
            <p class="switch"></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu-icon {
    position: fixed;
    width: 30px;
    right: 20px;
    top: 20px;
    stroke: var(--icon);
}
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
    right: -210px;
    bottom: 0;
    height: 100%;
    width: 200px;
    background: var(--background);
    box-shadow: 0 2px 5px 2px var(--shadow);
    transition-duration: 0.3s;

    &.show-sidebar {
        right: 0px;
    }
    .mode-selector {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 20px 0 0 0;
        height: 25px;
        width: 45px;
        background: var(--box);
        border: 1px solid var(--border);
        box-shadow: inset 1px 2px 5px 2px var(--shadow);
        border-radius: 15px;
        .switch {
            margin: auto 2px auto auto;
            height: 20px;
            width: 20px;
            background: var(--background);
            border-radius: 50%;
            box-shadow: 0 2px 3px 1px var(--shadow);
            transition-duration: 0.2s;
        }
        &.selected {
            .switch {
                transform: translateX(-19px);
            }
        }
    }
}
</style>
