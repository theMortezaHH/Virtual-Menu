import { defineStore } from "pinia"
import {  ref } from "vue"

const colorThemeStore = defineStore("colorTheme", () => {
    const colorTheme = ref(false)

    function changeColorTheme() {
        if (colorTheme.value) {
            localStorage.setItem("colorTheme", false)
            colorTheme.value = false
            document.querySelector("body").classList.add("dark-theme")
        } else {
            localStorage.setItem("colorTheme", true)
            colorTheme.value = true
            document.querySelector("body").classList.remove("dark-theme")
        }
        
    }

    return {
        colorTheme,
        changeColorTheme,
    }
})

export default colorThemeStore
