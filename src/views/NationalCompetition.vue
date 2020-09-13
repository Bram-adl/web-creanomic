<template>
  <div class="container">
    <div class="overlay"></div>
    <main-header :prevLink="prevLink"></main-header>

    <header class="header">
      <h1 class="title">
        Creanomic National Competition
      </h1>
    </header>

    <section class="section" style="margin-bottom: 25px;">
      <div class="competition-box">
        <div class="competition-image">
          <div class="comp-img"></div>
          <div class="comp-img shadow"></div>
        </div>
        <div class="competition-text">
          <h2 class="comp-title">
            Short Movie
          </h2>
          <p class="comp-text">
            <strong>Persyaratan:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <p class="comp-text">
            <strong>Peraturan:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <p class="comp-text">
            <strong>Pendaftaran:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <button class="comp-btn">
            Download PDF
          </button>
        </div>
      </div>
      <div class="competition-box flex-reversed">
        <div class="competition-image">
          <div class="comp-img"></div>
          <div class="comp-img shadow"></div>
        </div>
        <div class="competition-text">
          <h2 class="comp-title">
            Bisnis Plan
          </h2>
          <p class="comp-text">
            <strong>Persyaratan:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <p class="comp-text">
            <strong>Peraturan:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <p class="comp-text">
            <strong>Pendaftaran:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <button class="comp-btn">
            Download PDF
          </button>
        </div>
      </div>
      <div class="competition-box">
        <div class="competition-image">
          <div class="comp-img"></div>
          <div class="comp-img shadow"></div>
        </div>
        <div class="competition-text">
          <h2 class="comp-title">
            Essay
          </h2>
          <p class="comp-text">
            <strong>Persyaratan:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <p class="comp-text">
            <strong>Peraturan:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <p class="comp-text">
            <strong>Pendaftaran:</strong> <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius facilis doloribus veniam numquam facere maxime minus at neque, perspiciatis, porro laudantium pariatur voluptatibus natus illum labore nobis unde veritatis autem quia accusantium provident quisquam omnis, nesciunt nisi! Id qui tempora porro iure fugiat? Unde velit suscipit in, quasi laudantium tempore.
          </p>
          <button class="comp-btn">
            Download PDF
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader"

export default {
  name: 'international-competition',

  components: {
    MainHeader,
  },

  data: () => ({
    prevLink: 'competition',
  }),

  mounted () {
    this.eventBus.$on('loadCompetitionPage', () => this.goToCompetitionPage())
    this.runAnimation()
  },

  methods: {
    runAnimation () {
      this.gsap.from(".overlay", {
        left: "0",
        duration: 1,
        delay: 1,
        ease: "circ.inOut"
      })
    },

    goToCompetitionPage () {
      this.$router.push({ name: 'competition' }).catch(() => {})
    }
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
      text-align: left;
    }
    @include lg {
      font-size: 2.4rem;
      text-align: left;
    }
  }
}
.section {
  padding: 0 50px;
  .competition-box {
    margin-bottom: 50px;
    display: block;
    @include md {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0;
    }
    .competition-image {
      flex: 1;
      min-height: 300px;
      position: relative;
      .comp-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 250px;
        height: 300px;
        clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
        background: url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80') center center/cover;
        z-index: 1;
        @include md {
          left: unset;
          transform: translate(0, -50%);
          width: 300px;
          height: 350px;
        }
        @include lg {
          width: 450px;
          height: 500px;
        }
        &.shadow {
          background: #000;
          filter: blur(250px);
          transform: translate(-49%, -49%);
          z-index: 0;
          @include md {
            transform: translate(1%, -49%);
          }
        }
      }
    }
    .competition-text {
      margin-top: 25px;
      flex: 1;
      color: $white;
      text-align: center;
      @include md {
        text-align: left;
      }
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
        font-size: .8rem;
        font-weight: 300;
        margin: 25px 0;
        @include md {
          font-size: .9rem;
        }
        @include lg {
          font-size: 1rem;
        }
      }
      .comp-btn {
        background: none;
        outline: none;
        border: 1px solid $blue;
        border-radius: 4px;
        color: $blue;
        font-family: $sans-serif;
        font-size: .8rem;
        font-weight: 300;
        padding: 10px 30px;
        transition: .4s ease-out;
        cursor: pointer;
        @include md {
          font-size: .9rem;
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
}
.flex-reversed {
  @include md {
    .competition-image {
      order: 2;
      .comp-img {
        right: 0 !important;
      }
    }
    .competition-text {
      order: 1;
    }
  }
}
</style>