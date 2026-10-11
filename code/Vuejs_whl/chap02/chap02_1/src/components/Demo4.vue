<template>
    {{ obj.info }}
</template>

<script setup>
    import { reactive } from 'vue'
    let obj = reactive({info : '原来的值'})
    setTimeout(()=>{
        obj.info = '更新后的值'
    },2000)
</script>