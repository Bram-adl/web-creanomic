<template>
  <div class="container">
    <div class="background">
      <div class="background-image" :style="`background-image: url('img/${image}.jpg')`"></div>
    </div>
    
    <div class="overlay"></div>
    <main-header :prevLink="prevLink"></main-header>
    
    <header class="heading">
      <h2 class="heading-text">{{ $t('tagline') }} Creanomic</h2>
    </header>

    <div class="cards-container">
      <carousel 
        style="width: 100%;"
        :perPage="1" 
        :perPageCustom="[[480, 1], [720, 2], [1024, 3]]" 
        :paginationEnabled="false">
        <slide v-for="card in cards" :key="card.id" style="padding: 50px 0;">
          <div 
            class="card" 
            :style="`background-image: url('img/${card.image}.jpg')`"
            @mouseenter="changeBackground(card.image)"
            @click="goToPage(card.link)">
            <h3 class="card-title">{{ card.title }}</h3>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n"

import MainHeader from "../components/MainHeader"
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'home-page',

  components: {
    MainHeader,
    Carousel,
    Slide,
  },

  data: () => ({
    prevLink: '/',
    image: 'art-gallery',
    cards: [
      {
        id: 1,
        title: i18n.locale == 'id' ? 'Pameran Seni Virtual' : 'Virtual Art Exhibition',
        image: 'art-gallery',
        link: 'virtual-art-exhibition'
      },
      {
        id: 2,
        title: i18n.locale == 'id' ? 'Webinar ' : ' Webinar',
        image: 'webinar',
        link: 'webinar',
      },
      {
        id: 3,
        title: i18n.locale == 'id' ? 'Perlombaan' : 'Competitions',
        image: 'competition',
        link: 'competition',
      },
    ]
  }),

  mounted () {
    this.runAnimation()

    this.eventBus.$on('loadLandingPage', () => this.loadLandingPage())
    this.eventBus.$on('loadAboutPage', () => this.loadAboutPage())
  },

  methods: {
    changeBackground (image) {
      this.image = image
    },

    runAnimation () {
      let tl = this.gsap.timeline()
      tl.to(".overlay", {
        top: "-100vh",
        delay: 1,
        duration: 1,
        ease: "circ.inOut"
      }).from(".card", {
        scale: 0,
        duration: 2,
        ease: "circ.inOut",
        stagger: {
          amount: 0.2,
          from: "center"
        }
      }, "+=1").from(".heading-text", {
        opacity: 0,
        top: "150%",
        duration: 3,
        ease: "power2.inOut"
      }, "-=2")
    },

    goTo (link) {
      this.gsap.to(".overlay", {
        top: 0,
        delay: 1,
        duration: 1,
        ease: "circ.inOut",
        onComplete: () => this.$router.push({ name: link }).catch(() => {})
      })
    },

    loadLandingPage () {
      this.goTo('landing')
    },

    loadAboutPage () {
      this.goTo('about')
    },

    goToPage (link) {
      this.gsap.to(".card", {
        scale: 0,
        delay: 1,
        duration: 1,
        ease: "circ.inOut",
        stagger: {
          amount: 0.2
        },
        onComplete: () => this.$router.push({ name: link }).catch(() => {})
      })
    }
  },
}
</script>

<style lang="scss" scoped>
/* 
  =========================================================
  | SCSS Variables and Mixins
  =========================================================
  Di kode ini, kita membuat beberapa variable untuk warna 
  dan fonts, sehingga berikutnya saat kita ingin menggunakan 
  warna yang sudah ditentukan dari design dan sifatnya global
  kita cukup merubah nya melalui variable ini.

  Berikutnya terdapat mixin yang fokusnya untuk mempermudah
  penulisan media queries atau bekerja untuk responsive web
  design. Mixin sudah dibuat menggunakan @mixin sehingga
  untuk menggunakannya, cukup include dengan @include 
  directive milik SCSS.

  Untuk mobile first approach, kita tidak tentukan breakpoint
  untuk ukuran xs, untuk itu kita hanya deklarasikan ukuran
  lainnya dimana sm untuk small screen seperti handphone, md
  untuk ukuran tablet atau handphone portrait, lg untuk mini
  laptop seperti notebook atau tablet pro, dan xl untuk ukuran
  desktop.
*/

// Global Color Variables.
$white: #F5F5F5;
$white-50: rgba(254, 254, 254, 0.75);
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
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 25;
  background: $grey;
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
  .background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(25px);
    transform: scale(1.15);
    transition: .4s ease-out;
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
.cards-container {
  height: 70vh;
  display: flex;
  align-items: center;
  @include md {
    height: 65vh;
  }
}
.card {
  position: relative;
  width: 275px;
  height: 275px;
  margin: auto;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @include sm {
    width: 400px;
    height: 400px;
  }
  @include md {
    width: 300px;
    height: 300px;
  }
  &:hover {
    &::after {
      transform: translate(-50%, -50%);
    }
    .card-title {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &::before, &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &::before {
    background: rgba(0, 0, 0, 0.5);
  }
  &::after {
    top: 50%;
    left: 50%;
    transform: translate(-45%, -55%);
    border: 1px solid $white-50;
    transition: .4s ease-out;
  }
  &-title {
    color: $white;
    font-family: $serif;
    font-size: 1.15rem;
    font-weight: 300;
    white-space: nowrap;
    position: absolute;
    left: -25px;
    bottom: 25px;
    transition: .4s ease-out;
  }
}
</style>