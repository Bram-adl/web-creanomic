<template>
  <div class="menu-list">
    <div class="menu-item"><a href="/home" @click.prevent="goToHomePage">Home</a></div>
    <div class="menu-item"><router-link to="home/art-gallery">Virtual Exhibition</router-link></div>
    <div class="menu-item"><router-link to="home/webinar">Webinar</router-link></div>
    <div class="menu-item"><router-link to="home/competition">Competitions</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'menu-list',
  mounted: function () {
    this.gsap.fromTo(".menu-item a", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1, stagger: 0.2 })
  },
  methods: {
    goToHomePage () {
      this.eventBus.$emit("goToHomePage")
    },
  }
}
</script>

<style lang="scss" scoped>
.menu-list {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 100px 50px;

  width: 100%;
  height: 100%;

  background: #363C3E;
  z-index: 10;

  .menu-item {
    height: 100%;

    a {
      opacity: 0;
      height: 100%;

      display: flex;
      align-items: center;

      color: rgba(254, 254, 254, 0.75);
      border-bottom: 1px solid rgba(254, 254, 254, 0.75);

      font-family: 'Merriweather', serif;
      font-size: 24px;
      text-decoration: none;

      transition: .4s ease-out;

      &:hover {
        padding-left: 16px;
        color: #FEFEFE;
      }
    }

    &:first-child {
      a { border-top: 1px solid rgba(254, 254, 254, 0.75) }
    }
  }
}
@media only screen and (max-width: 480px) {
  .menu-list {
    padding: 100px 50px;

    .menu-item {
      a {
        font-size: 24px;
      }
    }
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
  .menu-list {
    padding: 150px 100px;

    .menu-item {
      a {
        font-size: 36px;
      }
    }
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
  .menu-list {
    padding: 80px 60px;

    .menu-item {
      a {
        font-size: 20px;
      }
    }
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
  .menu-list {
    padding: 150px 100px;

    .menu-item {
      a {
        font-size: 36px;
      }
    }
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
  .menu-list {
    padding: 100px 50px;

    .menu-item {
      a {
        font-size: 32px;
      }
    }
  }
}

@media only screen and (min-width: 1025px) {
  .menu-list {
    padding: 100px 50px;
    width: 40%;

    .menu-item {
      a {
        font-size: 36px;
      }
    }
  }
}
</style>