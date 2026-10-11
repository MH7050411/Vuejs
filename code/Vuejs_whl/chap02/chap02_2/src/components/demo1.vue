<template>
    <div>
        <p>{{ info }}</p>
        <p v-text="info"></p>
        <p v-html="info"></p>
    </div>
</template>
<script setup>
    const info = "<h2>我叫whl</h2><p>我正在学习Vue.js框架技术</p>"
</script>