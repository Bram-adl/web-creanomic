<template>
  <div class="container">
    <!-- Overlays -->
    <div class="overlay overlay-1"></div>
    <div class="overlay overlay-2"></div>
    <div class="overlay overlay-3"></div>
    <!-- /.overlays -->
    
    <menu-bar></menu-bar>

    <transition
      enter-active-class="animate__animated animate__slideInUp animate__slow"
      leave-active-class="animate__animated animate__slideOutDown animate__slow">
      <main-menu v-if="menuIsOpen"></main-menu>
    </transition>
    
    <figure class="main-figure">
      <main-figure></main-figure>
    </figure>

    <main class="main-content">
      <kinesis-container>
        <kinesis-element :strength="4">
          <div class="circle-wrapper">
            <div class="circle-logo">
              <img src="@/assets/logo.png" alt="logo-creanomic" class="logo">
            </div>
            <div class="circle-text">
              <div class="heading">
                <div class="wrapper">
                  <p class="sub-title">{{ $t('tagline') }}</p>
                </div>
                <div class="wrapper">
                  <h1 class="title">Creanomic</h1>
                </div>
              </div>
              <div class="sub-heading">
                <span>{{ $t('creanomic.cr') }}</span>
                <span class="dot"></span>
                <span>{{ $t('creanomic.ea') }}</span>
                <span class="dot"></span>
                <span>{{ $t('creanomic.no') }}</span>
                <span class="dot"></span>
                <span>{{ $t('creanomic.mic') }}</span>
              </div>
            </div>
            <div class="circle-link">
              <router-link to="/home">
                <span class="link" @click.prevent="goToHome">{{ $t('cta') }}</span>
              </router-link>
            </div>
          </div>
        </kinesis-element>
      </kinesis-container>
    </main>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import MenuBar from "../components/MenuBar"
import MainMenu from "../components/MainMenu"
import MainFigure from "../components/MainFigure"

export default {
  name: 'landing-page',
  
  components: {
    MenuBar,
    MainMenu,
    MainFigure,
    KinesisContainer,
    KinesisElement
  },
  
  data: () => ({
    menuIsOpen: false,
  }),

  mounted () {
    this.eventBus.$on('showMenu', () => this.toggleMenu())
    this.eventBus.$on('loadHomePage', () => this.goToHome())
    
    this.runAnimation()
  },

  methods: {
    runAnimation () {
      const tl = this.gsap.timeline()
      tl.fromTo(".circle-wrapper", {
        y: 1000,
        opacity: 0,
        borderRadius: "0%"
      }, {
        rotate: 720,
        y: 0,
        opacity: 1,
        borderRadius: "50%",
        ease: "back.out(1.2)",
        duration: 2,
        delay: 2,
      }).from(".sub-title, .title", {
        y: "100%",
        opacity: 0,
        duration: 1.4,
        ease: "power2.inOut",
        stagger: {
          amount: 0.2
        }
      }).from(".sub-heading span", {
        x: -16,
        opacity: 0,
        ease: "power1.inOut",
        stagger: {
          amount: 0.6
        }
      }, "-=1").from(".link", {
        y: 16,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "-=0.5").to(".logo", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
      })
    },

    toggleMenu () {
      this.menuIsOpen = !this.menuIsOpen
    },

    goToHome () {
      this.gsap.to(".overlay", {
        top: 0,
        duration: 1,
        delay: 1,
        stagger: {
          amount: 0.6
        },
        onComplete: () => this.$router.push({ name: 'home' }).catch(() => {})
      })
    }
  }
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
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 25;
  background: $grey;
  &-1 {
    background: #D04940;
  }
  &-2 {
    background: #72CB96;
  }
}
.container {
  width: 100%;
  min-height: 100%;
  background: $grey;
  position: relative;
  overflow: hidden;
  @include lg {
    display: flex;
  }
}
.main-figure {
  width: 40%;
  height: 100vh;
  display: none;
  overflow: hidden;
  @include lg {
    display: block;
  }
}
.main-content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @include lg {
    width: 60%;
  }
  .circle-wrapper {
    width: 300px;
    height: 300px;
    padding: 50px;
    border: 6px solid $white;
    border-radius: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: $sans-serif;
    @include sm {
      width: 400px;
      height: 400px;
    }
    @include md {
      width: 500px;
      height: 500px;
      border-width: 8px;
    }
    @include lg {
      border-width: 10px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border: 3px solid darken($white, 25%);
      border-radius: 50%;
      opacity: 0;
      animation: drippled 1s ease-out 3.6s alternate infinite;
      @include md {
        border-width: 4px;
      }
      @include lg {
        border-width: 5px;
      }
    }
  }
  .circle {
    &-logo {
      line-height: 0;
      margin-top: -20px;
      margin-left: -4px;
      .logo {
        height: 50px;
        opacity: 0;
        @include sm {
          height: 60px;
        }
        @include md {
          height: 75px;
        }
      }
    }
    &-text {
      margin-top: -10px;
      width: 100%;
      color: $white;
      .heading {
        .wrapper {
          overflow: hidden;
        }
        .sub-title {
          font-size: 14px;
          font-weight: 300;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 4px;
          position: relative;
          @include sm {
            font-size: 20px;
          }
          @include md {
            font-size: 24px;
          }
          &::before, &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
            width: 20%;
            border: 1px solid $white;
            border-radius: 1px;
            @include md {
              width: 25%;
            }
          }
          &::after {
            left: unset;
            right: 0;
          }
        }
        .title {
          font-size: 30px;
          font-weight: 400;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          @include sm {
            font-size: 42px;
            letter-spacing: 4px;
          }
          @include md {
            font-size: 60px;
          }
        }
      }
      .sub-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
        opacity: 0.75;
        span {
          font-size: 10px;
          @include sm {
            font-size: 14px;
          }
          @include md {
            font-size: 16px;
          }
        }
        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: $white;
          @include sm {
            width: 6px;
            height: 6px;
          }
          @include md {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
    &-link {
      .link {
        opacity: 0.75;
        color: $white;
        font-weight: 300;
        font-size: 16px;
        display: inline-block;
        position: relative;
        z-index: 10;
        transition: all .4s ease-out;
        @include sm {
          font-size: 18px;
        }
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -2px;
          transform: translateX(-50%);
          width: 0;
          height: 1px;
          background: $white;
          transition: all .4s ease-out;
        }
        &:hover {
          opacity: 1;
          letter-spacing: 2px;
          transform: translateY(-2px);
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}

@keyframes drippled {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.15);
  }
}
</style>