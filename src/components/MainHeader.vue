<template>
  <header class="main-header">
    <div class="go-back-box box" @click="goToPreviousPage">
      <i class="fas fa-long-arrow-alt-left"></i>
      <span>Go Back</span>
    </div>

    <div class="logo-box box">
      <img src="@/assets/logo.png" alt="logo" class="logo">
    </div>

    <div class="link-box box">
      <router-link to="/about">About Creanomic</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'main-header',  
  methods: {
    goToPreviousPage() {
      if ( this.$route.name == "home" ) {
        this.eventBus.$emit("loadLandingPage")
      } else {
        this.eventBus.$emit("loadHomePage")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-header {  
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 16px;
  color: rgba(254, 254, 254, 0.75);

  .box {
    width: 100%;
  }

  .go-back-box {
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    cursor: pointer;

    span {
      margin-left: 16px;
      transition: .4s ease-out;
    }

    &:hover {
      span {margin-left: 20px}
    }
  }

  .logo-box {
    line-height: 0;

    .logo {
      display: block;
      width: 50px;
      height: 50px;
      margin: auto;
    }
  }

  .link-box { 
    text-align: right;
    
    a {
      display: inline-block;
      color: inherit;
      font-family: "Open Sans", sans-serif;
      font-size: 10px;
      text-decoration: none;
      position: relative;
      
      &::after {
        content: "";
        position: absolute;
        top: 100%;
        right: 0%;
        transform: translate(0, 25%);
        width: 0%;
        height: 1px;
        background: #FEFEFE;
        transition: .4s ease-out;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .main-header {
    padding: 20px 50px;
    .go-back-box {
      font-size: 20px;
    }

    .logo-box {
      .logo {
        width: 75px;
        height: 75px;
      }
    }

    .link-box a {
      font-size: 18px;
    }
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .main-header {
    .go-back-box {
      font-size: 16px;
    }

    .logo-box {
      .logo {
        width: 75px;
        height: 75px;
      }
    }

    .link-box a {
      font-size: 16px;
    }
  }
}

@media only screen and (min-width: 769px) {
  .main-header {
    padding: 20px 50px;
    .go-back-box {
      font-size: 16px;
    }

    .logo-box {
      line-height: 0;

      .logo {
        width: 75px;
        height: 75px;
      }
    }

    .link-box a {
      font-size: 16px;
    }
  }
}
</style>