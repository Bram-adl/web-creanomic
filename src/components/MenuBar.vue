<template>
  <div class="menu-bar" @click="openMenu">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="5" fill="#E0E0E0"/>
      <circle cx="5" cy="25" r="5" fill="#E0E0E0" class="faded"/>
      <circle cx="5" cy="45" r="5" fill="#E0E0E0"/>
      <circle cx="25" cy="5" r="5" fill="#E0E0E0" class="faded"/>
      <circle cx="45" cy="5" r="5" fill="#E0E0E0"/>
      <circle cx="25" cy="25" r="5" fill="#E0E0E0"/>
      <circle cx="45" cy="25" r="5" fill="#E0E0E0" class="faded"/>
      <circle cx="25" cy="45" r="5" fill="#E0E0E0" class="faded"/>
      <circle cx="45" cy="45" r="5" fill="#E0E0E0"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'menu-bar',

  data: () => ({
    isMenuOpen: false,
  }),

  mounted () {
    this.gsap.from(".menu-bar", {
      x: 100,
      opacity: 0,
      duration: 2,
      ease: "circ.out",
      delay: 5.4,
    })
  },

  methods: {
    openMenu () {
      this.eventBus.$emit('showMenu')
      
      if ( this.isMenuOpen ) {
        this.gsap.to(".faded", {
          opacity: 1,
          duration: 1,
          ease: "bounce",
        })
        this.isMenuOpen = false
      } else {
        this.gsap.to(".faded", {
          opacity: 0,
          duration: 1,
          ease: "bounce",
        })
        this.isMenuOpen = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-bar {
  z-index: 20;
  position: absolute;
  top: 16px;
  right: 16px;
  transform: scale(0.5);
  cursor: pointer;
  &:hover {
    circle {
      opacity: 0.75;
    }
  }
  circle {
    transition: .4s ease-out;
  }
}
</style>