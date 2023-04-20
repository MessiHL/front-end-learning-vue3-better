<script setup lang="ts" name="App">
import {useMouse} from './use/userMouse.js'
const {x,y} = useMouse();
</script>

<template>
  <div class="vue3-slot-container">
    <h2>vue3-use</h2>
      <a  class="logo" href="https://cn.vuejs.org/guide/reusability/composables.html#what-is-a-composable" target="_blank">
        <img src="./assets/vue.svg"/>
      </a>
      <p>Mouse position is at: {{ x }}, {{ y }}</p>
  </div>

</template>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
