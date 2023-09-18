<script setup>
const props = defineProps({
    value: Array,
})
</script>

<template>
    <div class="orders">
        <svg class="close-icon" viewBox="0 0 512 512">
            <title>Close Circle</title>
            <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
            />
            <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M320 320L192 192M192 320l128-128"
            />
        </svg>
        <div class="order-container">
            <p v-for="item in props.value">
                {{ item.title }}
                <span>{{ item.count }}عدد</span>
            </p>
        </div>
        <input type="button" class="order-confirm" value="تکمیل شد" />
    </div>
</template>

<style lang="scss" scoped>
.orders {
    margin: 10px auto;
    width: 350px;
    background: var(--box);
    border: 1px solid var(--border);
    border-radius: 15px;
    box-shadow: 0 2px 5px 2px var(--shadow);
    .close-icon {
        display: flex;
        width: 30px;
        margin: 5px 8px 5px auto;
    }
    .order-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 100%;
        height: fit-content;
        p {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            padding: 5px 30px;
            direction: rtl;
            width: 100%;
            border-top: 1px solid var(--border);
            font-size: 18px;
            span {
                margin-right: auto;
            }
        }
    }
    .order-confirm {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 10px auto 10px auto;
        height: 30px;
        width: 150px;
        background: var(--box);
        box-shadow: 0 2px 5px 2px var(--shadow);
        border: 1px solid var(--border);
        border-radius: 10px;
        text-decoration: none;
    }
}
</style>
