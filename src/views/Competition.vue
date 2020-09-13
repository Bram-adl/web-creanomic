<template>
  <div class="container">
    <div class="background">
      <div class="background-image"></div>
    </div>

    <div class="overlay"></div>
    <main-header :prevLink="prevLink"></main-header>
    
    <header class="heading">
      <h2 class="heading-text">{{ $t('tagline') }} Creanomic</h2>
    </header>

    <section class="section">
      <h3 class="section-title">{{ $t('competition') }}</h3>
      <p class="section-text" v-html="$t('cPage.CompetitionText')"></p>
      <button class="section-btn" @click="goTo('international-competition')">
        {{ $t('cPage.CompetitionBtn1') }}
      </button>
      <button class="section-btn" @click="goTo('national-competition')">
        {{ $t('cPage.CompetitionBtn2') }}
      </button>
    </section>

    <div class="image-showcase">
      <img src="@/assets/img/home/competition.jpg" alt="Virtual Art Exhibition">
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'

export default {
  name: 'virtual-art-exhibition',

  components: {
    MainHeader,
  },

  data: () => ({
    prevLink: 'home'
  }),

  mounted () {
    this.runAnimation()
    this.eventBus.$on('loadHomePage', () => this.goToHomePage())
    this.eventBus.$on('loadAboutPage', () => this.goToAboutPage())
  },

  methods: {
    runAnimation () {
      let fontSize = null
      let left = null
      if ( window.screen.width < 768 ) {
        fontSize = '1.2rem' 
        left = '25px'
      } else {
        fontSize = '2rem'
        left = '50px'
      }
      
      let tl = this.gsap.timeline()
      tl.to(".heading-text", {
        left: left,
        fontSize: fontSize,
        transform: "translate(0, -50%)",
        duration: 1,
        delay: 1,
        ease: "circ.inOut"
      }).from(".image-showcase", {
        x: "100%",
        duration: 1,
        ease: "circ.inOut",
      }, "-=1").fromTo(".section-title, .section-text, .section-btn", {
        x: -50,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2
      }, "-=0.5")
    },

    goTo (link) {
      this.gsap.to(".overlay", {
        left: 0,
        delay: 1,
        duration: 1,
        ease: "circ.inOut",
        onComplete: () => this.$router.push({ name: link }).catch(() => {})
      })
    },

    goToHomePage () {
      this.goTo('home')
    },

    goToAboutPage () {
      this.goTo('about')
    },
  }
}
</script>

<style lang="scss" scoped>
// Global Color Variables.
$white: #F5F5F5;
$yellow: #FFB149;
$blue: #00A8AA;
$grey: #363C3E;
$serif: "Merriweather", serif;
$sans-serif: "Open Sans", sans-serif;

// Twitter Bootstrap Grid System. 
$sm-min: 576px;
$md-min: 768px;
$lg-min: 992px;
$xl-min: 1200px;

// Media Queries Breakpoints.
@mixin sm {
  @media (min-width: #{$sm-min}) {
    @content;
  }
}

@mixin md {
  @media (min-width: #{$md-min}) {
    @content;
  }
}

@mixin lg {
  @media (min-width: #{$lg-min}) {
    @content;
  }
}

@mixin xl {
  @media (min-width: #{$xl-min}) {
    @content;
  }
}

/* 
  =========================================================
  | SCSS Bases Styles - Mobile First
  =========================================================
*/
.overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  z-index: 25;
  background: $grey;
}
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  &-image {
    width: 100%;
    height: 100%;
    background: url('../assets/img/home/competition.jpg') center center/cover;
    filter: blur(25px);
    transform: scale(1.15);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
.container {
  width: 100%;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
}
.heading {
  height: 15vh;
  position: relative;
  overflow: hidden;
  .heading-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    color: $yellow;
    font-family: $serif;
    font-size: 1.4rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    @include md {
      font-size: 1.8rem;
    }
    @include lg {
      font-size: 2.2rem;
    }
    @include xl {
      font-size: 2.6rem;
    }
  }
}
.section {
  color: $white;
  padding: 0 25px;
  @include md {
    max-width: 40%;
    padding-left: 50px;
  }
  &-title {
    font-family: $serif;
    font-size: 1.4rem;
    font-weight: 300;
  }
  &-text {
    font-family: $sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 25px 0 30px;
  }
  &-btn {
    opacity: 0;
    display: block;
    margin-bottom: 16px;
    background: #C58B3E;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 14px 24px;
    font-family: $sans-serif;
    font-size: .8rem;
    color: $white;
    transition: .4s ease-out;
    cursor: pointer;
    @include md {
      font-size: 1rem;
    }
    &:hover {
      background: darken(#C58B3E, 15%);
    }
  }
}
.image-showcase {
  width: 100%;
  height: 450px;
  position: absolute;
  top: 20vh;
  right: 0;
  z-index: -1;
  @include md {
    width: 55%;
    &::after {
      display: none;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>