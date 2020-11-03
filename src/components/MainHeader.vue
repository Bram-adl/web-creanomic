<template>
  <div class="main-header">
    <div class="box box-prev">
      <router-link class="link" :to="prevLink">
        <i class="fas fa-chevron-left"></i>
        <span @click.prevent="goToPrevPage(prevLink)">{{ $t('prev') }}</span>
      </router-link>
    </div>
    <div class="box box-logo">
      <a href="/"><img src="@/assets/logo.png" alt="logo-creanomic" class="logo"></a>
    </div>
    <div class="box box-link">
      <router-link class="link" to="/about">
        <span @click.prevent="goToAboutPage">{{ $t('about') }}</span>
        <i class="fas fa-chevron-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header',

  props: {
    prevLink: {
      type: String,
    }
  },

  mounted () {
    if ( this.$route.name == 'home' ) {
      this.runAnimation()
    }
  },

  methods: {
    runAnimation () {
      let tl = this.gsap.timeline()
      tl.from(".box-prev > a *", {
        opacity: 0,
        x: 25,
        duration: 1,
        ease: "power2.in",
        delay: 2,
        stagger: {
          amount: 0.1
        }
      }).from(".box-link > a *", {
        opacity: 0,
        x: -25,
        duration: 1,
        ease: "power2.in",
        stagger: {
          amount: 0.1
        }
      }, "-=0.75").from(".logo", {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }, "+=1")
    },

    goToPrevPage (link) {
      if ( link == '/' ) {
        this.eventBus.$emit('loadLandingPage')
      } else if ( link == 'competition' ) {
        this.eventBus.$emit('loadCompetitionPage')
      } else if ( link == 'webinar' ) {
        this.eventBus.$emit('loadWebinarPage')
      } else {
        this.eventBus.$emit('loadHomePage')
      }
    },

    goToAboutPage () {
      this.eventBus.$emit('loadAboutPage')
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
.main-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  padding: 0 25px;
  @include md {
    height: 20vh;
    padding: 0 50px;
  }
  .box {
    width: 100%;
    font-family: $serif;
    font-size: 12px;
    @include sm {
      font-size: 16px;
    }
    @include md {
      font-size: 18px;
    }
    &-prev {
      text-align: left;
      color: $white;
      &:hover {
        span {margin-left: 16px;}
      }
      span {
        display: inline-block;
        margin-left: 10px;
        transition: .4s ease-out;
      }
    }
    &-logo {
      text-align: center;
      line-height: 0;
      .logo {
        opacity: 1;
        width: 50px;
        height: 50px;
        @include md {
          width: 60px;
          height: 60px;
        }
        @include lg {
          width: 75px;
          height: 75px;
        }
      }
    }
    &-link {
      text-align: right;
      color: $white;
      &:hover {
        span {margin-right: 16px;}
      }
      span {
        display: inline-block;
        margin-right: 10px;
        transition: .4s ease-out;
      }
    }
  }
}
</style>