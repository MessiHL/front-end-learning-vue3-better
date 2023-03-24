<template>
  <div>
    <p> 主路由</p>
    <p>$route.params.id : {{ $route.params.id }}</p>
    <p> 子路由</p>
    <router-view></router-view>
  </div>
</template>
<script setup lang='ts' name='user'>
 
</script>
<style scoped lang='scss'>
 
</style>
