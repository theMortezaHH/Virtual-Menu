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

    const orderDuration = ref(0)

    function setOrderDuration() {
        for (let index = 0; index < order.value.length; index++) {
            if (order.value[index].duration > orderDuration.value) {
                orderDuration.value = order.value[index].duration
            }
        }
    }

    return {
        order,
        orderTotalPrice,
        orderDuration,
        setOrderDuration,
    }
})

export default orderStore
