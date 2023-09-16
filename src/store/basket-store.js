import { defineStore } from "pinia"
import { computed, ref } from "vue"
import orderStore from "@/store/order-store.js"
import { useRouter } from "vue-router"

const basketStore = defineStore("basket", () => {
    const data = ref({})
    const router = useRouter()
    async function getData() {
        const response = await fetch("./database/MenuData")
        data.value = await response.json()
        for (let index = 0; index < data.value.menuItems.length; index++) {
            data.value.menuItems[index].count = 0
        }
        if (data.value.order && data.value.order.length) {
            orderStore().order = data.value.order
            router.push("/order")
        }
    }

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

    const customerOrder = computed(() => {
        if (!data.value.order) return 0

        return data.value.order
    })

    return {
        getData,
        data,
        basketItems,
        basketReset,
        basketItemsCount,
        basketTotalPrice,
        customerOrder,
    }
})

export default basketStore
