import { defineStore } from "pinia"
import { computed, ref } from "vue"

const customerStore = defineStore("basket", () => {
    const homePageData = ref({})

    async function getData() {
        //fetching UI data for Home.vue
        const dataResponse = await fetch("http://192.168.1.161:7170/MenuData")
        homePageData.value = await dataResponse.json()
        for (let index = 0; index < homePageData.value.productItems.length; index++) {
            homePageData.value.productItems[index].count = 0
        }

        //fetching tokens and saving them for customer id management
        const tokenstResponse = await fetch("http://192.168.1.161:7170/author/new-customer")
        const tokens = await tokenstResponse.json()
        localStorage.setItem("refreshToken", tokens.refreshToken)
        localStorage.setItem("token", tokens.token)
    }

    const basketItems = computed(() => {
        if (!data.value.productItems) return

        return data.value.productItems.filter((x) => x.count > 0)
    })

    //resets counts for all items to 0
    function basketReset() {
        for (let index = 0; index < data.value.productItems.length; index++) {
            data.value.productItems[index].count = 0
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

    //the number of items in basket
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
