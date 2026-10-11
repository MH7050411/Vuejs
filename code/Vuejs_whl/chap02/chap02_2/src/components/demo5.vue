<template>
    <div>
        <p>成绩：<input type="text" v-model="score"></p>
        <p v-if="score>=90 && score<=100">优秀</p>
        <p v-else-if="score>=80">良好</p>
        <p v-else-if="score>=60">及格</p>
        <p v-else>不合格</p>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    let score = ref(0)
</script>