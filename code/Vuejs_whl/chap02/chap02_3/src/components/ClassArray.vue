<template>
    <div :class="[activeClass,borderClass]">vue框架技术</div>
</template>

<script setup>
    import { ref } from 'vue';
    const isActive = ref(true)
    const activeClass = ref('active')
    const borderClass = ref('border')
</script>

<style>
    .active{
        width: 100px;
        height: 50px;
        margin-top: 50px;
        background-color: aqua;
    }
    .border{
        border: 2px dotted blueviolet;
    }
</style>