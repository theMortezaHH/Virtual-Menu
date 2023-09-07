import { defineStore } from "pinia"

const useBasketStore = defineStore("basket", {
    state: () => {
        return {
            basket: [],
            animatedBasket: false,
        }
    },
    getters: {
        itemsCount() {
            return this.basket.reduce((a, b) => a + b.count, 0)
        },
        totalPrice() {
            return this.basket.reduce((a, b) => a + b.item.price * b.count, 0)
        },
    },
    actions: {
        addToBasket(product, count) {
            const existingItem = this.basket.find((x) => x.item.id === product.id)
            if (count > 0) {
                this.animateBasket()
            }
            if (existingItem) {
                if (count === 0) {
                    this.basket.splice(
                        this.basket.findIndex((x) => x.item.id == product.id),
                        1,
                    )
                } else {
                    existingItem.count = count
                }

                return
            }
            this.basket.push({ item: product, count })
        },
        getCount(id) {
            const existingItem = this.basket.find((x) => x.item.id === id)
            return existingItem ? existingItem.count : 0
        },
        animateBasket() {
            this.animatedBasket = true
            setTimeout(() => (this.animatedBasket = false), 1000)
        },
    },
    persist: {
        enabled: true,
    },
})

export default useBasketStore
