<template>
  <div>
    <slot :text="text" :count="1" aaa="something"></slot>
  </div>
</template>
<script setup lang='ts' name='ScopedSlot'>
 const text="ScopedSlot";
</script>
<style scoped lang='scss'>
 
</style>
