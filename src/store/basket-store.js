import { defineStore } from "pinia"
import { computed, ref } from "vue"

const basketStore = defineStore("basket", () => {
    const data = ref({})

    async function GetData() {
        const response = await fetch("./database/MenuData")
        data.value = await response.json()
        for (let index = 0; index < data.value.menuItems.length; index++) {
            data.value.menuItems[index].count = 0
        }
    }
    GetData()

    const basketItems = computed(() => {
        if (!data.value.menuItems) return

        return data.value.menuItems.filter((x) => x.count > 0)
    })

    function basketReset() {
        for (let index = 0; index < data.value.menuItems.length; index++) {
            data.value.menuItems[index].count = 0
        }
    }

    const basketTotalPrice = computed(() => {
        if (!basketItems.value) return 0

        var number = 0
        for (let index = 0; index < basketItems.value.length; index++) {
            number += basketItems.value[index].count * basketItems.value[index].price
        }
        return number
    })

    const basketItemsCount = computed(() => {
        if (!basketItems.value) return 0

        var number = 0
        for (let index = 0; index < basketItems.value.length; index++) {
            number += basketItems.value[index].count
        }
        return number
    })

    return {
        data,
        basketItems,
        basketReset,
        basketItemsCount,
        basketTotalPrice,
    }
})

export default basketStore
