<template>
    <div>
        <p><button @click="showInfo">按钮</button></p>
        <p><button v-on:click="showInfo">按钮</button></p>
    </div>
</template>
<script setup>
    const showInfo = ()=>{
        alert("我正在触发摁钮的click事件")
    }
</script>