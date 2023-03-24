<script setup lang="ts">

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h2>路由入门</h2>
  <div class="router-link">
    <router-link to="/">login</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
  </div>
  
  <router-view></router-view>

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
