<script setup>
import { ref } from "vue"

const orderCount = ref(0)

const socket = {
    data: JSON.stringify({
        orderCount: 10,
    }),
}
NewData(socket)

// var ws
// if (window.WebSocket) {
//     url = "ws://192.168.4.1:81"
//     ws = new WebSocket(url)
// } else {
//     console.log("Looks like you are using an old browser")
// }
// ws.onmessage = function (event) {
//     NewData(event)
// }

function NewData(event) {
    var Data = JSON.parse(event.data)
    if (Data.orderCount !== undefined) {
        orderCount.value = Data.orderCount
    }
}

async function getData() {
    const response = await fetch("./database/MenuData")
    data.value = await response.json()
    for (let index = 0; index < data.value.menuItems.length; index++) {
        data.value.menuItems[index].count = 0
    }
}
</script>

<template>
    hi barista
    <p>{{ orderCount }}</p>
</template>

<style lang="scss" scoped></style>
