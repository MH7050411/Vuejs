<script setup>
import { ref } from 'vue';
  // 定义商品列表信息
  const goodList = ref([
    {
      id : 1,
      goods_name : '夏季专柜同款女鞋',
      goods_price : 300,
      tags : ['舒适','透气'],
      inputVisible : false,
      inputValue : ''

    },
    {
    id: 2,
    goods_name: '冬季保暖女士休闲雪地靴 舒适加绒防水短靴 防滑棉鞋',
    goods_price: 89,
    tags: ['保暖', '防滑'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 3,
    goods_name: '秋冬新款女士毛衣 套头宽松针织衫 简约上衣',
    goods_price: 199,
    tags: ['秋冬', '毛衣'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 4,
    goods_name: '2023春秋装新款大码女装 衬衫 上衣',
    goods_price: 19,
    tags: ['雪纺衫', '打底'],
    inputVisible: false,
    inputValue: ''
  },
  {
    id: 5,
    goods_name: '长款长袖圆领女士毛衣 2022秋装新款假两件连衣裙',
    goods_price: 178,
    tags: ['圆领', '连衣裙'],
    inputVisible: false,
    inputValue: ''
  }
  ])
  import MyTable from './components/MyTable.vue';
  const removeGoods = id => {
    goodList.value = goodList.value.filter(item => item.id != id)
  }
  // 自定义指令
  const vFocus = (el) => {
    el.focus()
  }

  const addTags = row => {
    const val = row.inputValue
    row.inputValue = ""
    row.inputVisible = false
    if(!val || row.tags.indexOf(val)!=-1){
      return
    }
    row.tags.push(val)
  }
  // 引入图片
  import icon from './assets/2.png'
</script>

<template>
  <h4>商品管理</h4>
  <MyTable :goodsList="goodList">
    <!-- 向header插槽添加内容 -->
     <template v-slot:header>
      <th scope="col">序号</th>
      <th scope="col">商品名称</th>
      <th scope="col">商品价格</th>
      <th scope="col">商品标签</th>
      <th scope="col">操作</th>
     </template>
     <!-- 向body插槽添加内容 -->
      <!-- <template v-slot=""></template> -->
       <template #body="{row, index}">
        <td>{{ index + 1 }}</td>
        <td>{{row.goods_name}}</td>
        <td>{{ row.goods_price }}</td>
        <td>
          <!-- v-自定义指令名，使用自定义指令 -->
          <input type="text" v-if="row.inputVisible" class="form-control form-control-sm ipt-tag" v-focus v-model="row.inputValue" @keyup.enter="addTags(row)" >
          <button v-else class="btn btn-outline-primary rounded-pill" @click="row.inputVisible = true">+tag</button>
          <span class="btn btn-outline-dark" v-for="item in row.tags" :key="item">
            {{ item }}
          </span>
        </td>
        <td>
          <button type="button" class="btn btn-outline-danger btn-sm" @click="removeGoods(row.id)">删除</button>
        </td>
       </template>
  </MyTable>
  <!-- 访问 public 目录的静态资源 -->
  <img src="/1.png" />
  <!-- 访问 assets 目录的静态资源 -->
   <img :src="icon">
</template>
<style scoped>
  th{
    text-align:center;
  }
  td{
    line-height: 30px;
  }
  .ipt-tag{
    width:80px;
    display: inline;
  }
</style>