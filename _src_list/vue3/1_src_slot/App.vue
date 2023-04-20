<script setup lang="ts" name="App">
import FancyButton from './components/FancyButton/index.vue'
import BaseLayout from './components/BaseLayout/inde.vue'
import ScopedSlot from './components/ScopedSlot/index.vue'
import FancyList from './components/FancyList/index.vue'
</script>

<template>
  <div class="vue3-slot-container">
    <div class="vue3-slot-container-left">
      <h2>vue3-slot</h2>
      <a  class="logo" href="https://cn.vuejs.org/guide/components/slots.html#slot-content-and-outlet" target="_blank">
        插槽内容与出口
        <img src="./assets/slot1.png"/>
       
      </a>
      <a  class="logo" href="https://cn.vuejs.org/guide/components/slots.html#named-slots" target="_blank">
        具名插槽
        <img src="./assets/slot2.png"/>
      </a>
      <a  class="logo" href="https://cn.vuejs.org/guide/components/slots.html#scoped-slots" target="_blank">
        作用域插槽
        <img src="./assets/slot3.png"/>
      </a>
    </div>
    <div class="vue3-slot-container-right">
      
      <div class="right-item">
        <h4>1 插槽内容与出口 -- demo FancyButton</h4>
        <FancyButton>
        
        </FancyButton>
        <FancyButton>
          Click me! <!-- 插槽内容 -->
        </FancyButton>
        <FancyButton>
          <!-- 插槽内容 -->
          <span style="color:red">插槽传入多个元素</span> 
        </FancyButton>
      </div>
      <div class="right-item">
        <h4>2 具名插槽 -- demo BaseLayout</h4>
        <BaseLayout>
          <template v-slot:hearder><h5>hearder slot</h5></template>
          <template v-slot:main>main</template>
          <template #footer>hearder slot ,简写：#footer</template>
        </BaseLayout>

      </div>
      <div class="right-item">
        <h4>3 作用域插槽</h4>
        <p>在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点，我们需要一种方法来让子组件在渲染时将一部分数据提供给插槽。</p>
        <h5>3.1 默认插槽</h5>
        <p>默认插槽接受 props: 通过子组件标签上的 v-slot 指令，直接接收到了一个插槽 props 对象</p>
        <ScopedSlot v-slot="slotProps">
          {{ slotProps.text }} -- {{ slotProps.count }} -- {{ slotProps.aaa }}
        </ScopedSlot>
        <h5>3.2 具名作用域插槽</h5>
        <p>列表数据由子组建FancyList返回：</p>
        <FancyList>
          <template #item="{ body, username, likes }">
            <div class="item">
              <p>{{ body }}</p>
              <p class="meta">by {{ username }} | {{ likes }} likes</p>
            </div>
          </template>
        </FancyList>
      </div>
     
      
      
    </div>
  </div>

</template>

<style scoped>
.vue3-slot-container{
  display: flex;
}
.vue3-slot-container-left,.vue3-slot-container-right{
  flex: 1;
}
.logo {
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.vue3-slot-container-right{
  padding-left: 20px;
  border-left: 1px solid #646cffaa;
}

.right-item{
  height: 450px;
}
button{
  margin: 0 12px;
}

.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
