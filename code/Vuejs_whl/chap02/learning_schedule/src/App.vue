<script setup>
  import { ref } from 'vue';
  let subject = ref('')
  let content = ref('')
  let nextId = ref('')
  let selectedOption = ref('3204')
  let options = ref([
    {code:0, place:'3204'},
    {code:1, place:'3202'},
    {code:2, place:'3201'},
    {code:3, place:'图书馆'}
  ])
  const list = ref([
    {
      id: '1',
      subject: 'vue技术',
      content: 'vue的指令',
      place: '3204',
      status: false
    },
    {
      id: '2',
      subject: 'vue技术',
      content: '组件基础',
      place: '3204',
      status: false
    }
  ])

  let remove = (id, status)=>{
    if(status){
      list.value = list.value.filter(item=>item.id!=id)
    }else{
      alert("请完成该学习计划后在进行删除操作！")
    }
  }
  let add =() =>{
    if(subject.value==''){
      alert("学习科目不能为空")
      return
    }
    nextId.value = Math.max(...list.value.map(item=>item.id)) + 1
    const obj = {
      id:nextId.value,
      subject:subject.value,
      content:content.value,
      place:selectedOption.value,
      status:false
    }
    list.value.push(obj)
    subject.value = ''
    content.value = ''
    selectedOption.value = '3204'
  }
</script>

<template>
   <div class="card">
      <div class="card-header">学习计划表</div>
      <div class="card-body">
          <form @submit.prevent="add">
            <div class="row g-4">
              <!-- 学习科目 -->
              <div class="col-auto">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">学习科目</span>
                  <input type="text" class="form-control" placeholder="请输入学习科目" v-model.trim="subject">
                </div>
              </div>
            <!-- 学习内容 -->
            <div class="col-auto">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">学习内容</span>
                <textarea class="form-control" placeholder="请输入学习内容" v-model.trim="content" :style="{height:'32px'}" />
              </div>
            </div>
            
            <!-- 学习地点 -->
            <div class="col-auto">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">学习地点</span>
                <select class="form-select form-select-sm" v-model="selectedOption">
                  <option v-for="option in options" :value="option.place" :key="option.code">
                    {{ option.place }}
                  </option>
                </select>
              </div>
            </div>
            <!-- 添加按钮 -->
             <div class="col-auto">
              <button type="submit" class="btn btn-primary">添加</button>
             </div>
            </div>
          </form>
      </div>
   </div>

   <table class="table table=striped table=hover table=bordered">
    <thead>
      <tr>
        <th scope="col">序号</th>
      <th scope="col">学习科目</th>
      <th scope="col">学习内容</th>
      <th scope="col">学习地点</th>
      <th scope="col">完成状态</th>
      <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id"> 
        <td>{{ item.id }}</td>
        <td>{{ item.subject }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.place }}</td>
        <td>
          <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" role="switch" id="flexSwitch" v-model="item.status">
            <label class="form-check-lable" for="flexSwitch" v-if="item.status">已完成</label>
            <label class="form-check-lable" for="flexSwitch" v-else>未完成</label>
          </div>
        </td>
        <td>
          <a href="javascript:;"  @click="remove(item.id, item.status)">删除</a>
        </td>
      </tr>
    </tbody>
   </table>
</template>
