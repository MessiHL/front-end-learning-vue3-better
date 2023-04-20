<template>
  <div class="container">
    <header>
        <slot name="hearder"></slot>
    </header>
    <main>
        <slot name="main"></slot>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>
</template>
<script setup lang='ts' name='BaseLayout'>
 
</script>
<style scoped>
 
</style>
