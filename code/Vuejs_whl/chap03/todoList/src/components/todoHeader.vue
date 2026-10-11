<template>
    <div>
        <div class="header">
            <p class="title">任务列表</p>
            <input type="text" class="new-todo" placeholder="请填写任务"
                v-model="name" @keyup.enter="enterName">
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const name = ref('')
    // 子向父传递数据第1步：声明自定义事件
    const emit = defineEmits(['add'])

    const enterName = () => {
        // 把name传递给父组件
        // 子向父传递数据第2步：调用emit方法传递数据
        emit('add',name.value)
        name.value = ''
    }
</script>

<style>
.header {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.title {
  margin: 0;
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  color: #b83f45;
}

.new-todo {
  width: 93%;
  padding: 20px 10px 20px 50px;
  height: 20px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.05);
}
</style>