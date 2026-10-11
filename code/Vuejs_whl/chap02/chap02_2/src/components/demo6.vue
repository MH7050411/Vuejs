<template>
    <p v-show="flag">使用v-show控制段落的显示和隐藏</p>
    <p v-if="flag">使用v-if控制段落的显示和隐藏</p>
    <button @click="flag = !flag">显示/隐藏</button>
</template>
<script setup>
    import { ref } from 'vue';
    let flag = ref(true)
</script>