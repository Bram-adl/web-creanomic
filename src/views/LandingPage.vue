<template>
  <div class="landing-page">
    <menu-bar></menu-bar>

    <div class="main-figure-container">
      <main-figure></main-figure>
    </div>
    
    <div class="main-text-container">
      <main-text></main-text>
    </div>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar'
import MainFigure from '../components/MainFigure'
import MainText from '../components/MainText'

export default {
  name: 'landing-page',
  components: {
    MenuBar,
    MainFigure,
    MainText,
  },
}
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #363C3E;

  .main-figure-container {
    display: none;
  }
}

@media only screen and (min-width: 1025px) {
  .landing-page {
    display: flex;
    align-items: stretch;
    justify-content: start;
    
    .main-figure-container {
      display: block;
      width: auto;
      height: 100%;
    }

    .main-text-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>