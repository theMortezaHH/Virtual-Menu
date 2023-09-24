import { defineStore } from "pinia"
import { computed, ref } from "vue"

const customerStore = defineStore("basket", () => {
    const data = ref({})

    async function getData() {
        const response = await fetch("http://localhost:5058/MenuData")
        data.value = await response.json()
        for (let index = 0; index < data.value.productItmes.length; index++) {
            data.value.productItmes[index].count = 0
        }
    }

    const basketItems = computed(() => {
        if (!data.value.productItmes) return

        return data.value.productItmes.filter((x) => x.count > 0)
    })

    function basketReset() {
        for (let index = 0; index < data.value.productItmes.length; index++) {
            data.value.productItmes[index].count = 0
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

    const customerOrder = computed(() => {
        if (!data.value.order) return 0

        return data.value.order
    })

    return {
        data,
        getData,
        basketItems,
        basketReset,
        basketItemsCount,
        basketTotalPrice,
        customerOrder,
    }
})

export default customerStore
