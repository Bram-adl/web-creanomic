<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  #cursor {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>