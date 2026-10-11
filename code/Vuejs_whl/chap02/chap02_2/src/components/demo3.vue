<template>
    <div>
        <p>姓名：<input type="text" v-model="name"></p>
        <p>您输入的姓名是：{{ name }}</p>
    </div>
</template>
<script setup>
    import {ref} from 'vue';
    const name = ref("whl")
</script>