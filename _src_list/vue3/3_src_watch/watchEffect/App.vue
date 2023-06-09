<template>
  <p><a target="_blank" href="https://cn.vuejs.org/guide/essentials/watchers.html#stopping-a-watcher">
    watchEffect </a> demo</p>
  todoId: <input v-model="todoId" />
  <div>{{ data }}</div>
  </template>
<script setup lang="ts" name="App">
import { ref,watchEffect } from 'vue';
let todoId = ref(0);
let data = ref('');


watchEffect(async ()=>{
  const res = await fetch(
  `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )

  data.value =  await res.json()
})

</script>



<style scoped>
.logo {
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
