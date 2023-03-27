<script setup lang="ts">
  import { userCounterStore } from './store/userCounterStore'

  const store = userCounterStore();

  function incremnet(){
    store.incremnet();
  }

  function randomizeCounter(){
    store.randomizeCounter();
  }
</script>

<template>
  <div>
    <h2>pinia - action</h2>
    <a href="https://pinia.vuejs.org/zh/core-concepts/actions.html" target="_blank">
      <img src="./assets/pinia.svg" class="logo"/>
    </a>
    <div>
      <button @click="store.count++">count.state++</button>
      <button @click="incremnet">actions incremnet</button>
      <button @click="randomizeCounter">actions randomizeCounter</button>
      <button @click="store.$reset()">重置</button>

      <p> count: {{ store.count }}</p>
      <p> doubleCount: {{ store.doubleCount }}</p>
      <p> doubleCountPlusOne: {{ store.doubleCountPlusOne }}</p>

    </div>
    
    
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
button{
  margin: 0 12px;
}
</style>
