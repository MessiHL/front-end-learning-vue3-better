<script setup lang="ts">

</script>

<template>
  <div>
    <a href="https://router.vuejs.org/zh/guide/essentials/passing-props.html" target="_blank">
      <img src="./assets/vue.svg" class="logo vue"/>
    </a>
    <h2>将 props 传递给路由组件</h2>
    <p>1 组件中的路由参数和prop名称必须保持一致</p>
    <p>2 路由配置是需要添加参数：props: true</p>
  </div>

  
  <div class="router-link">
    <router-link to="/user/james">james</router-link>
    <router-link to="/user/kobe">kobe</router-link>
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
