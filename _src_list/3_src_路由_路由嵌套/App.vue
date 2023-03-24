<script setup lang="ts">

</script>

<template>
  <div>
    <a href="https://router.vuejs.org/zh/guide/essentials/nested-routes.html" target="_blank">
      <img src="./assets/vue.svg" class="logo vue"/>
    </a>
    <h2>嵌套路由</h2>
  </div>
  <p>一些应用程序的 UI 由多层嵌套的组件组成。在这种情况下，URL 的片段通常对应于特定的嵌套组件结构，例如：</p>
  <pre>
    /user/johnny/profile                     /user/johnny/posts
      +------------------+                  +-----------------+
      | User             |                  | User            |
      | +--------------+ |                  | +-------------+ |
      | | Profile      | |  +------------>  | | Posts       | |
      | |              | |                  | |             | |
      | +--------------+ |                  | +-------------+ |
      +------------------+                  +-----------------+
  </pre>
  
  <div class="router-link">
    <router-link to="/user/1/profile">user1</router-link>
    <router-link to="/user/2/posts">user2</router-link>
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
