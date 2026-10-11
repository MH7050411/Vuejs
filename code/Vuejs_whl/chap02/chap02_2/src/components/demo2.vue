<template>
    <div>
        <p>用户登录</p>
        <p><input type="text" :placeholder="username"></p>
        <p><input type="password" v-bind:placeholder="password"></p>
        <p><button>登录</button></p>
    </div>
</template>
<script setup>
    const username = "请输入用户名"
    const password = "请输入密码"
</script>