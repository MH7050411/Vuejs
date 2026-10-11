<template>
    <div v-bind:class="clasaObj">春夏秋冬</div>
    <div :class="classMeal">三餐四季</div>
</template>

<script setup>
    import { ref, reactive, computed } from 'vue';
    const isInner = ref(true)
    const isMeal = ref(true)
    const clasaObj = reactive({inner:true})
    const classMeal = computed(()=>({
        meal : isMeal.value
    }))
</script>

<style>
    .inner{
        width: 500px;
        height: 50pt;
        margin-top: 100px;
        border: 2px dashed blue;
    }
    .meal{
        width: 200px;
        height: 50pt;
        margin-top: 100px;
        background-color: bisque;
    }
</style>