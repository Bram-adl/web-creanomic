<template>
  <div class="landing-page">    
    <div class="overlay"></div>
    <div class="overlay"></div>
    <div class="overlay"></div>
    
    <menu-bar></menu-bar>
    <transition
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideOutDown">
      <menu-list v-if="showMenu"></menu-list>
    </transition>

    <div class="main-figure-container">
      <main-figure></main-figure>
    </div>
    
    <div class="main-text-container">
      <kinesis-container>
        <kinesis-element :strength="10">
          <main-text></main-text>
        </kinesis-element>
      </kinesis-container>
    </div>
    
    <transition leave-active-class="animate__animated animate__fadeOutRight">
      <main-footer v-if="showMenu"></main-footer>
    </transition>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

import MenuBar from '../components/MenuBar'
import MenuList from '../components/MenuList'
import MainFigure from '../components/MainFigure'
import MainText from '../components/MainText'
import MainFooter from '../components/MainFooter'

export default {
  name: 'landing-page',
  components: {
    MenuBar,
    MenuList,
    MainFigure,
    MainText,
    MainFooter,
    KinesisContainer,
    KinesisElement,
  },
  data: () => ({
    showMenu: false,
  }),
  mounted: function() {
    this.eventBus.$on("openMenu", () => this.toggleMenu())
    this.eventBus.$on("closeMenu", () => this.toggleMenu())

    this.eventBus.$on("goToHomePage", () => this.loadHomePage())
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },

    loadHomePage() {
      let tl = this.gsap.timeline()
      tl.to(".overlay", 
      {top: "0%", duration: 1, stagger: { amount: 0.5 }, delay: 1, onComplete: () => this.$router.push('home')})
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 100%;
  left: 0;
  
  width: 100%;
  height: 100%;

  z-index: 20;

  &:nth-child(1) {
    background: #D04940;
  }

  &:nth-child(2) {
    background: #72CB96;
  }

  &:nth-child(3) {
    background: #363C3E;
  }
}

.landing-page {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #363C3E;
  
  position: relative;
  overflow: hidden !important;

  .main-figure-container {
    position: relative;
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