<template>
  <div class="art-gallery">
    <div class="overlay"></div>
    <div class="background"></div>

    <main-header></main-header>
    <main-title></main-title>

    <div class="text-box">
      <div class="text-title-container">
        <h3 class="text-title">Competitions</h3>
      </div>
      <p class="text">Creanomic provides both international and national competitions. We are open for everyone to participate with an ease of registrations. Starting from an international photography, short movies, into national essay and many more. Grand prizes awaits you along with the certificates. To get more details about all of the competitions, please kindly hit the button below. </p>
      <div class="btn-group">
        <main-button text="International"></main-button>
        <main-button text="National"></main-button>
      </div>
    </div>

    <div class="background-image"></div>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader"
import MainTitle from "../components/MainTitle"
import MainButton from "../components/MainButton"

export default {
  name: 'art-gallery',
  components: {
    MainHeader,
    MainTitle,
    MainButton,
  },
  mounted: function () {    
    this.eventBus.$on("loadHomePage", () => this.loadHomePage())
    
    let tl = this.gsap.timeline()
    
    if ( window.innerWidth > 768 ) {
      tl.to(".title", {left: "0", x: "0", width: "0", marginLeft: "50px", fontSize: "36px", duration: 2, delay: 1, ease: "circ.inOut"})
      .from(".background-image", {x: "100%", opacity: 0, ease: "circ.inOut", duration: 1}, "-=1.5")
    } else {
      tl.to(".title", {left: "0", x: "0", width: "0", marginLeft: "50px", fontSize: "24px", duration: 2, delay: 1, ease: "circ.inOut"})
      .from(".background-image", {x: "100%", opacity: 0, ease: "circ.inOut", duration: 1}, "-=1.5")
    }

    tl.from(".text-title", {y: 50, duration: 1, delay: 1, ease: "circ.inOut"}, "-=0.5")
    .from(".text", {x: -100, opacity: 0, duration: 1, ease: "circ.inOut"}, "-=1")
    .fromTo(".btn", {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 1, ease: "circ.inOut"}, "-=0.25")
  },
  methods: {
    loadHomePage() {
      let tl = this.gsap.timeline()

      tl.to(".text-title", {y: 50, duration: 1, ease: "circ.inOut"})
      .to(".text", {x: -100, opacity: 0, duration: 1, ease: "circ.inOut"}, "-=1")
      .to(".btn", {y: -16, opacity: 0, duration: 1, ease: "circ.inOut"}, "-=0.75")
      .to(".overlay", {top: "0", duration: 1, onComplete: () => this.$router.push({ name: "home" })})
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-group {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: unset;
  }
}

.overlay {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: #363C3E;
  z-index: 10;
  top: 100%;
  left: 0;
}

.art-gallery {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    transition: .4s ease-out;

    background-image: url("../assets/img/home/competition.jpg");
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

.text-box {
  max-width: 50%;
  padding: 0 50px;

  .text-title-container {
    overflow: hidden;

    .text-title {
      color: #FEFEFE;
      font-family: "Merriweather", serif;
      font-size: 30px;
      font-weight: 300;
    }
  }

  .text {
    color: rgba(254, 254, 254, 0.75);
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 20px 0 25px;
  }
}

.background-image {
  position: absolute;
  top: 150px;
  right: 0;

  width: 50%;
  height: 400px;

  background-image: url("../assets/img/home/competition.jpg");
  background-size: cover;
}

@media only screen and (max-width: 768px) {
  .text-box {
    max-width: 100%;

    .text-title-container {      
      .text-title {
        font-size: 24px;
      }
    }
  }

  .background-image {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);

    width: 100%;
    height: 400px;

    z-index: -1;

    background-image: url("../assets/img/home/competition.jpg");
    background-size: cover;
  }
}
</style>