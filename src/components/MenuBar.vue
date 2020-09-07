<template>
  <div class="menu-bar" @click="handleClick">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="5" fill="#E0E0E0"/>
      <circle cx="5" cy="25" r="5" fill="#E0E0E0"/>
      <circle cx="5" cy="45" r="5" fill="#E0E0E0"/>
      <circle cx="25" cy="5" r="5" fill="#E0E0E0"/>
      <circle cx="45" cy="5" r="5" fill="#E0E0E0"/>
      <circle cx="25" cy="25" r="5" fill="#E0E0E0" class="faded"/>
      <circle cx="45" cy="25" r="5" fill="#E0E0E0"/>
      <circle cx="25" cy="45" r="5" fill="#E0E0E0"/>
      <circle cx="45" cy="45" r="5" fill="#E0E0E0"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'menu-bar',
  data: () => ({
    toggleMenu: false,
  }),
  mounted: function() {
    const tl = this.gsap.timeline()

    tl.from(".menu-bar", {x: 500, duration: 2, ease: "power2.out", delay: 3})
  },
  methods: {
    handleClick() {
      if (!this.toggleMenu) {
        this.toggleMenu = true
        this.gsap.to(".faded", {opacity: 0, duration: 1, ease: "bounce"})
        this.eventBus.$emit('openMenu')
      } else {
        this.toggleMenu = false
        this.gsap.to(".faded", {opacity: 1, duration: 1, ease: "bounce"})
        this.eventBus.$emit('closeMenu')
      }
    }
  },
}
</script>

<style lang="scss">
.menu-bar {
  position: absolute;
  z-index: 15;
  cursor: pointer;

  &:hover {
    svg circle {
      fill: #FEFEFE;
    }
  }
}

@media only screen and (max-width: 480px) {
  .menu-bar {
    right: 15px;
    top: 15px;
    transform: scale(0.5);
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
  .menu-bar {
    right: 50px;
    top: 50px;
    transform: scale(0.75);
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
  .menu-bar {
    right: 15px;
    top: 15px;
    transform: scale(0.5);
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
  .menu-bar {
    right: 50px;
    top: 50px;
    transform: scale(0.75);
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
  .menu-bar {
    right: 15px;
    top: 15px;
    transform: scale(0.5);
  }
}

@media only screen and (min-width: 1025px) {
  .menu-bar {
    right: 50px;
    top: 50px;
    transform: scale(0.75);
  }
}
</style>