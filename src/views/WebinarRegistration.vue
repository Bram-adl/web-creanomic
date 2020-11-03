<template>
  <div class="container">
    <div class="overlay"></div>
    <main-header :prevLink="prevLink"></main-header>

    <header class="header">
      <h1 class="title" style="margin-bottom: 1rem;">
        <!-- {{ $t("cPage.NationalCompTitle") }} -->
        Webinar Registration
      </h1>
    </header>

    <section class="section section-flex" style="margin-bottom: 25px">
      <div class="competition-image">
        <!-- <img src="img/national.jpg" alt="National Poster"> -->
        <video id="video" width="400" autoplay muted loop>
          <source src="video/webinar.mp4" type="video/mp4">
        </video>
      </div>
      <div class="competition-box"  style="padding: 0;">
        <div class="competition-text">
          <div class="comp-text" style="margin: 0;">
            <div style="max-width: 800px; margin: auto;" v-html="$t('webinars')">
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <lang-btn></lang-btn>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";

export default {
  name: "webinar-registration",

  components: {
    MainHeader,
  },

  data: () => ({
    prevLink: "webinar",
  }),

  mounted() {
    this.eventBus.$on("loadWebinarPage", () => this.goToWebinarPage());
    this.runAnimation();
  },

  methods: {
    runAnimation() {
      this.gsap.from(".overlay", {
        left: "0",
        duration: 1,
        delay: 1,
        ease: "circ.inOut",
      });
    },

    goToWebinarPage() {
      this.$router.push({ name: "webinar" }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
// Global Color Variables.
$white: #f5f5f5;
$yellow: #ffb149;
$blue: #00a8aa;
$grey: #363c3e;
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
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  z-index: 25;
  background: $grey;
}
.container {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: $grey;
  overflow-x: hidden;
}
.header {
  padding: 25px;
  @include md {
    padding: 25px 50px;
  }
  .title {
    color: $yellow;
    font-size: 1.8rem;
    font-weight: 300;
    text-align: center;
    @include md {
      font-size: 2rem;
    }
    @include lg {
      font-size: 2.4rem;
    }
  }
}
.section {
  padding: 0 50px;
  .competition-image {
    margin-bottom: 25px;
    line-height: 0;
    text-align: center;
    img {
      width: 100%;
      @include lg {
        width: 500px;
      }
    }
  }
  .competition-box {
    padding: 25px 0;
    display: block;
    .competition-text {
      color: $white;
      text-align: center;
      .comp-title {
        font-family: $serif;
        font-size: 1.2rem;
        font-weight: 300;
        @include md {
          font-size: 1.4rem;
        }
        @include lg {
          font-size: 1.6rem;
        }
      }
      .comp-text {
        font-family: $sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        margin: 25px 0;
        @include md {
          font-size: 0.9rem;
        }
        @include lg {
          font-size: 1rem;
        }
        table {
          margin: auto;
          text-align: left;
        }
      }
      .comp-btn {
        background: none;
        outline: none;
        border: 1px solid $blue;
        border-radius: 4px;
        color: $blue;
        font-family: $sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        padding: 10px 30px;
        transition: 0.4s ease-out;
        display: block;
        margin-right: 0;
        margin-bottom: 8px;
        cursor: pointer;
        @include md {
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 0;
          font-size: 0.9rem;
        }
        @include lg {
          font-size: 1rem;
        }
        &:hover {
          background: $blue;
          color: $white;
        }
      }
    }
  }

  #video {
    width: 100%;

    @include lg {
      width: 400px;
    }
  }

  .text-link {
    display: inline-block;
    text-decoration: underline;
    transition: .4s ease-out;

    &:hover {
      color: $blue !important;
      text-decoration: none;
      transform: translateX(4px);
    }
  }

  &-flex {
    display: block;

    .competition-image,
    .competition-box {
      @include lg {
        margin: 0 25px;
      }
    }
    
    @include lg {
      margin: 0 -25px;
      display: flex;
    }
  }
}
</style>