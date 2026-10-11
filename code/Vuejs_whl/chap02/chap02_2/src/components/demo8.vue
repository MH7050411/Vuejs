<template>
    <table border>
        <tr>
            <th>属性名</th>
            <th>属性值</th>
        </tr>
        <tr v-for="(value,key) in student" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
        </tr>
    </table>
</template>
<script setup>
    import { reactive } from 'vue';
    let student = reactive({num:'1001',name:'张强',age:20,gender:'男'})
</script>