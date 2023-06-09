<template>
  <div>
    x: <input v-model="x" />
    y: <input v-model="y" />
  </div>
  <div>
    position:
    x: <input v-model="position.x" />
    y: <input v-model="position.y" />
  </div>
  
  </template>
<script setup lang="ts" name="App">
import { ref,reactive,watch } from 'vue';

  const x = ref(0);
  const y = ref(0);
  const position = reactive({x:0,y:0})

  // 监测数据源：ref类型数据 x  
  watch(x,(newX)=>{
    console.log(`x to ${newX}`)
  })

  // 监测数据源：getter函数 ()=>x.value + y.value
  watch(()=>x.value + y.value,(sum)=>{
    console.log(`${x.value} + ${y.value} = ${sum}`);
  })

  // 监听多个来源组成的数组
  watch([x,()=> y.value],([newX,newY])=>{
    console.log(`x is ${newX} and y is ${newY}`);
  })

  // 监听object的属性。
  watch(
    ()=>position.x,
    (x)=>{
      console.log(`position changed: ${x}`);
    }
  )


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
