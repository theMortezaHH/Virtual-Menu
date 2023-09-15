import { defineStore } from "pinia"
import { computed, ref } from "vue"

const orderStore = defineStore("order", () => {
    const order = ref({})

    const orderTotalPrice = computed(() => {
        if (!order.value) return 0

        var number = 0
        for (let index = 0; index < order.value.length; index++) {
            number += order.value[index].count * order.value[index].price
        }
        return number
    })

    const hasActiveOrder = computed(() => order.value.id !== undefined)

    return {
        order,
        orderTotalPrice,
        hasActiveOrder
    }
})

export default orderStore
