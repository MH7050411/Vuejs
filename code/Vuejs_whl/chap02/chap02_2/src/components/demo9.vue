<template>
    <table border>
        <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>课程</th>
            <th>成绩</th>
        </tr>
        <tr v-for="item in student" :key="item.num">
            <td>{{ item.num }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.course }}</td>
            <td>{{ item.score }}</td>
        </tr>
    </table>
</template>
<script setup>
    import { reactive } from 'vue';
    let student = reactive([
        {num:'1001',name:'w',course:'java',score:98},
        {num:'1002',name:'h',course:'java',score:78},
        {num:'1001',name:'l',course:'java',score:88}
    ])
</script>