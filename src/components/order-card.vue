<script setup>
const props = defineProps({
    value: Array,
})
</script>

<template>
    <div class="cart">
        <div class="order-container">
            <p class="order-title">:سفارشات</p>
            <p class="order-item" v-for="item in props.value.Items">
                <span class="order-count"> x{{ item.Count }} </span>
                {{ item.Title }}
            </p>
            <!-- <input type="checkbox" v-for="item in props.value.Items" /> -->
        </div>
        <div class="order-status">
            <p class="desk-title">تکمیل میز</p>
            <p class="desk-number">{{ props.value.TableNumber }}</p>
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
    margin: 10px 20px;
    height: fit-content;
    width: 350px;
    background: var(--box);
    border: 1px solid var(--border);
    border-radius: 15px;
    .order-container {
        margin: 0 0 0 auto;
        .order-title {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            margin: auto 10px auto auto;
            height: 40px;
            width: 220px;
            font-weight: bold;
        }
        .order-count {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 3px;
            margin-left: 10px;
            border: 1px solid var(--border);
            border-radius: 5px;
            height: 25px;
            width: 30px;
        }
        .order-item {
            display: flex;
            flex-direction: row-reverse;
            justify-content: end;
            align-items: center;
            margin: auto 10px auto auto;
            height: 40px;
            width: 220px;
            border-top: 1px solid var(--border);
        }
    }
    .order-status {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 80px;
        background: var(--secondary-box);
        border-radius: 0 14px 14px 0;
        .desk-title {
            color: var(--secondary-text);
        }
        .desk-number {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 0 0 0;
            margin: 0 0 5px 0;
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
