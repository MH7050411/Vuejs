<template>
    {{ message }}
</template>

<script setup>
    import {ref} from 'vue'
    let message = ref('oldDate')
    setTimeout(() => {
        message.value = 'newDate'
    }, 2000);
</script>