<script setup>
  // 局部注册
  // 导入子组件会自动注册
  import todoHeader from './components/todoHeader.vue'
  import todoMain from './components/todoMain.vue'
  import todoFooter from './components/todoFooter.vue'
import TodoHeader from './components/todoHeader.vue';
import TodoMain from './components/todoMain.vue';
import TodoFooter from './components/todoFooter.vue';
  // 定义任务列表
  import { ref, computed } from 'vue';
  const taskList = ref([
    {id:1,name:'跑步',done:false},
    {id:2,name:'晨读',done:true},
    {id:3,name:'作业',done:false}
  ])
  // 定义计算属性，计算出未完成任务数量
  const lastLength = computed(() => {
    return taskList.value.filter(item => !item.done).length
  })
  const addTask = name => {
    taskList.value.push({name, done:false, id:~~(Math.random()*1000)})
  }

  const delTast = (id) => {
    taskList.value = taskList.value.filter(item => item.id !== id)
  }
</script>

<template>
  <!-- 使用子组件 -->
   <!-- 子传父第3步：监听自定义事件 -->
   <TodoHeader @add="addTask" />
  <!-- 监听子组件触发的del事件 -->
  <TodoMain :list="taskList" @del="delTask" />

   <!-- 父传子第2步：绑定自定义属性 -->
   <TodoMain :list="taskList" />
   <TodoFooter :lastLength="lastLength" />  
</template>
