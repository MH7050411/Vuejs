<template>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <!-- 具名插槽 -->
                 <slot name="header"></slot>
            </tr>
        </thead>
        <tbody>
            <!-- 插槽 -->
            <!-- <slot name="body"></slot> -->
            <tr v-for="(item,index) in goodsList" :key="item.id">
            <!-- 作用域插槽，传递数据给父组件 -->
             <slot name="body" :row="item" :index="index"></slot>
        </tr>    
        </tbody>
    </table>
</template>
<script setup>
    // 自定义属性
    const props = defineProps({
        goodsList: {
        type: Array,
        required: true,
        default : []
        }
    })
</script>