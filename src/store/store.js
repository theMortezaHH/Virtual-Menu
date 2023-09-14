import { defineStore } from "pinia"
import { computed, ref } from "vue"

const useDataStore = defineStore("data", () => {
    const data = ref({})

    async function getData() {
        const response = await fetch("./database/MenuData")
        data.value = await response.json()
        for (let index = 0; index < data.value.menuItems.length; index++) {
            data.value.menuItems[index].count = 0
        }
    }
    getData()

    const basketItems = computed(() => {
        if (!data.value.menuItems) return

        return data.value.menuItems.filter((x) => x.count > 0)
    })

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

    const order = ref({})

    const orderTotalPrice = computed(() => {
        if (!order.value) return 0

        var number = 0
        for (let index = 0; index < order.value.length; index++) {
            number += order.value[index].count * order.value[index].price
        }
        return number
    })

    const orderItemsCount = computed(() => {
        if (!order.value) return 0

        var number = 0
        for (let index = 0; index < order.value.length; index++) {
            number += order.value[index].count
        }
        return number
    })

    return {
        data,
        basketItems,
        basketItemsCount,
        basketTotalPrice,
        order,
        orderTotalPrice,
        orderItemsCount,
    }
})

export default useDataStore
