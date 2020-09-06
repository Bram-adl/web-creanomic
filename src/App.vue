<template>
  <div id="app">

    <landing-page></landing-page>
    
  </div>
</template>

<script>
import LandingPage from './views/LandingPage'

export default {
  name: 'App',
  components: {
    LandingPage,
  }
}
</script>

<style>
body {
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}
</style>