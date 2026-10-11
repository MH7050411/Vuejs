<template>
    <p v-for="(item,index) in courses" :key="index">
        索引号{{index}}  -----   内容{{ item }}
    </p>
    使用表格来显示课程列表
    <table border>
        <tr>
            <th>序号</th>
            <th>课程内容</th>
        </tr>
        <tr v-for="(item,index) in courses" :key="index">
            <td>{{ index }}</td>
            <td>{{ item }}</td>
        </tr>
    </table>
</template>
<script setup>
    import { reactive } from 'vue';
    let courses = reactive(['java web开发','vue框架技术','服务器'])
</script>