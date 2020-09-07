<template>
  <div class="home-page">
    <div class="overlay"></div>
    <div class="background" :style="`background-image: url('img/${image}')`"></div>
    
    <main-header></main-header>
    <main-title></main-title>

    <!-- Cards Section --> <br>
    <carousel 
      :perPage="1" 
      :perPageCustom="[[480, 1], [720, 2], [1024, 3]]" 
      :paginationEnabled="false">
      <slide v-for="card in cards" :key="card.id" style="padding: 16px;">
        <div 
          class="card" 
          :style="`background-image: url('img/${card.image}')`"
          @mouseenter="changeBackground(card.image)"
          @click="enterPage(card.path)">
          <h2 class="card-text">{{ card.title }}</h2>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader"
import MainTitle from "../components/MainTitle"
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'home-page',
  components: {
    MainHeader,
    MainTitle,
    Carousel,
    Slide,
  },
  data: () => ({
    image: 'art-gallery.jpg',
    cards: [
      {
        id: 1,
        title: "1. Virtual Art Exhibition",
        image: "art-gallery.jpg",
        path: "art-gallery"
      },
      {
        id: 2,
        title: "2. Online Webinar",
        image: "webinar.jpg",
        path: "webinar"
      },
      {
        id: 3,
        title: "3. Competitions",
        image: "competition.jpg",
        path: "competition"
      },
    ]
  }),
  mounted: function () {
    this.eventBus.$on("loadLandingPage", () => this.loadLandingPage())

    let tl = this.gsap.timeline()
    tl.from(".overlay", {top: "0", duration: 1, delay: 1, ease: "circ.inOut"})
    .from(".title", {y: 100, duration: 1, ease: "circ.inOut"}, "+=0.5")
    .from(".card", {scale: 0, duration: 1, ease: "circ.inOut", stagger: {amount: 0.4, from: "center"}}, "-=1")
  },
  methods: {
    loadLandingPage() {
      this.gsap.to(".overlay", {top: "0", duration: 1, delay: 1, ease: "circ.inOut", onComplete: () => this.$router.push("/")})
    },

    changeBackground(image) {
      this.image = image
    },

    enterPage(path) {
      this.gsap.to(".card", {opacity: 0, duration: 1, delay: 1, ease: "circ.inOut", onComplete: () => this.$router.push('home/' + path)})
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100%;

  position: absolute;
  top: -100%;
  left: 0;

  background-color: #363C3E;
  z-index: 10;
}

.home-page {
  width: 100%;
  min-height: 100%;
  position: relative;
  overflow: hidden;

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    transition: .4s ease-out;

    background-size: 100%;
    transform: scale(1.5);
    filter: blur(50px);

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}

.card {
  width: 250px;
  height: 250px;
  margin: auto;

  background-size: 150%;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  transition: background-size .4s ease-out;

  cursor: pointer;

  &:hover {
    background-size: 175%;

    &::after {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 5px;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(254, 254, 254, 0.75);
    transition: .4s ease-out;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .card-text {
    color: #FEFEFE;
    font-family: "Merriweather", serif;
    font-size: 24px;
    font-weight: 300;
    white-space: nowrap;

    position: absolute;
    left: -30px;
    bottom: 30px;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .card {
    width: 350px;
    height: 350px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .card {
    width: 300px;
    height: 300px;
  }
}

@media only screen and (min-width: 1025px) {
  .card {
    width: 325px;
    height: 325px;
  }
}
</style>