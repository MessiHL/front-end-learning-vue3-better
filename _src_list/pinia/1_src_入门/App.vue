<script setup lang="ts">
  import { userCountStore } from './store/userCountStore';
  const d = userCountStore();
</script>

<template>
  <div>
    <a href="https://pinia.vuejs.org/zh/introduction.html" target="_blank">
      <img src="./assets/pinia.svg" class="logo vue"/>
    </a>
  
    <h2>pinia -入门</h2>
    <button @click="d.increment()">+1</button>
    {{ d.count }}
    
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

.router-link {
  border-bottom: 1px solid #42b883aa;
}

.router-link  a {
    margin: 0 20px;
  }
</style>
