<script setup>
const props = defineProps({
    value: Array,
})
</script>

<template>
    <div class="cart">
        <div class="order-container"> </div>
        <div class="order-status">
            <p class="desk-title">شماره میز</p>
            <p class="desk-number">3</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--box);
    border: 1px solid var(--border);
    border-radius: 15px;
    .order-status {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100px;
        background: #00bb6d;
        .desk-number {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 0 0 0;
            height: 50px;
            width: 50px;
            color: #ffffff;
            font-size: 40px;
            border: 3px solid #ffffff;
            border-radius: 15px;
        }
    }
}
</style>
