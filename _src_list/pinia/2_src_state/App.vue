<script setup lang="ts">
  import { userStore } from './store/userStore'

  const store = userStore();

  const hanleStore = ()=>{
    store.count++
  }

  const resetStore =()=>{
    store.$reset();
  }

</script>

<template>
  <div>
    <h2>pinia -state</h2>
    <a href="https://pinia.vuejs.org/zh/core-concepts/state.html" target="_blank">
      <img src="./assets/pinia.svg" class="logo vue"/>
    </a>
    <div>
      <button @click="hanleStore()">count++</button>
      <button @click="resetStore()">重置Store</button>
    </div>
    <span>
      {{ store.count }}
    </span>
    
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
