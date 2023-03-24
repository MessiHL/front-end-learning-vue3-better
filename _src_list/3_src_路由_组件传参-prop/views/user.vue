<template>
  <div>
    <p> props 接受路由参数</p>
    <p>name : {{ name }}</p>
  </div>
</template>
<script setup lang='ts' name='user'>
 defineProps({name:String})
</script>
<style scoped lang='scss'>
 
</style>
