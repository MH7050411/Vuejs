<template>
    <p>info的原值：{{ info }}</p>
    <p>info的反转结果：{{ reverseInfo }}</p>
    <p><button @click="updateInfo">修改info</button></p>
</template>

<script setup>
    import { computed, ref } from 'vue'
    const info = ref("abcdef")
    // reverseInfo是计算属性
    const reverseInfo = computed(
        ()=>info.value.split('').reverse().join('')
    )
    const updateInfo = ()=>{
        info.value = "hello world"
    }
</script>