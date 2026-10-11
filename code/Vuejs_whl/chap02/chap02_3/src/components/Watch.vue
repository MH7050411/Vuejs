<template>
    <input type="text" v-model="city">
</template>

<script setup>
    import{ref,watch} from 'vue'
        const city = ref("北京")
        console.log(city.value)
        // 定义监听器
        watch(city, (newVal,oldVal)=>{
            console.log(newVal)
        })
</script>