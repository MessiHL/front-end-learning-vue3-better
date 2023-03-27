<script setup lang="ts">
  import { userCounterStore } from './store/userCounterStore'

  const store = userCounterStore();
</script>

<template>
  <div>
    <h2>pinia - getter</h2>
    <a href="https://pinia.vuejs.org/zh/core-concepts/state.html" target="_blank">
      <img src="./assets/pinia.svg" class="logo vue"/>
    </a>
    <div>
      <button @click="store.count++">count.state++</button>
      <button @click="store.$reset()">重置</button>
      
      <p>getters -- doubleCount: {{ store.doubleCount }}</p>
      <p>getters -- doubleCountPlusOne: {{ store.doubleCountPlusOne }}</p>
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
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
button{
  margin: 0 12px;
}
</style>
