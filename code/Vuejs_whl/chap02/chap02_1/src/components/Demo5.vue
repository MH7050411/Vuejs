<template>
    {{ obj.message }}<br></br>
    {{ message }}
</template>

<script setup>
    import { reactive,toRefs } from 'vue'
    let obj = reactive({message : "java"})
    let {message} = toRefs(obj)
    setTimeout (()=>{
        message.value = "python"
    },2000)
</script>