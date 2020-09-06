<template>
  <div class="main-text">
    <div class="logo-box">
      <img src="@/assets/logo.png" alt="logo" class="logo">
    </div>

    <div class="text-box">
      <div class="text-box-wrapper">
        <p class="explore-text">Explore</p>
      </div>
      <div class="text-box-wrapper">
        <h1 class="creanomic-text">Creanomic</h1>
      </div>
      <div class="taglines-text-wrapper">
        <span class="text">Creative</span>
        <span class="circle"></span>
        <span class="text">Inovation</span>
        <span class="circle"></span>
        <span class="text">Economic</span>
        <span class="circle"></span>
        <span class="text">Center</span>
      </div>
    </div>

    <div class="link-box">
      <a href="#" class="link">Click to explore</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-text',
  mounted: function() {
    const tl = this.gsap.timeline()

    tl.fromTo(".main-text", {y: "200%", borderRadius: "0%"}, {y: "0%", borderRadius: "50%", rotate: 720, ease: "back.out(1.4)", duration: 2})
    tl.from(".creanomic-text", {y: "100%", duration: 1, delay: .4})
    tl.from(".explore-text", {y: "100px", duration: 1}, "-=1")
    tl.from(".taglines-text-wrapper span", {y: "100px", duration: 1}, "-=.75")
    tl.from(".link", {y: "100px", duration: 1}, "-=1")
    tl.from(".logo", {opacity: 0, duration: 3, delay: 1})
  }
}
</script>

<style lang="scss" scoped>
.main-text {
  margin: auto;
  position: relative;

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    border-radius: 50%;

    opacity: 0;
    animation: drippled 1s ease-out 4s alternate infinite;
  }

  .logo-box {
    margin: auto;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);

    .logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-box {
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: #FEFEFE;
    font-family: 'Open Sans', sans-serif;

    .text-box-wrapper {
      text-align: center;
      text-transform: uppercase;
      overflow: hidden;
    }

    .explore-text {
      position: relative;

      &::before,
      &::after {
        content: "";

        position: absolute;
        top: 50%;
        left: 0;

        transform: translate(0, -50%);

        border: 1px solid #FEFEFE;
        border-radius: 1px;
      }

      &::after {
        left: 100%;
        transform: translate(-100%, -50%);
      }
    }

    .taglines-text-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;

      overflow: hidden;

      .circle {
        background: rgba(254, 254, 254, 0.75);
      }
    }
  }

  .link-box {
    text-align: center;

    margin: auto;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, 50%);

    overflow: hidden;

    .link {
      display: inline-block;
      color: rgba(254, 254, 254, 0.75);
      font-family: 'Open Sans', sans-serif;
      text-decoration: none;
    }
  }
}

// Mobile Style
@media only screen and (max-width: 480px) {
  .main-text {
    width: 280px;
    height: 280px;

    border: 2px solid rgba(254, 254, 254, 0.75);

    &::before {
      border: 6px solid rgba(254, 254, 254, 0.75);
    }

    .logo-box {
      width: 50px;
      height: 50px;
    }

    .text-box {
      .explore-text {
        letter-spacing: 10px;
        font-size: 12px;
        padding-left: 12px;

        &::before,
        &::after {
          width: 30px;
        }
      }

      .creanomic-text {
        letter-spacing: 4px;
        font-size: 32px;

        margin: 6px 0 8px;
      }

      .taglines-text-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        overflow: hidden;

        .text {
          font-size: 10px;
        }

        .circle {
          width: 5px;
          height: 5px;
          border-radius: 5px;
        }
      }
    }

    .link-box {
      .link {
        font-size: 12px;
      }
    }
  }
}

// Vertical Style
@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait) {
  .main-text {
    width: 425px;
    height: 425px;

    border: 4px solid rgba(254, 254, 254, 0.75);
    
    &::before {
      border: 10px solid rgba(254, 254, 254, 0.75);
    }

    .logo-box {
      width: 75px;
      height: 75px;
    }

    .text-box {
      .explore-text {
        letter-spacing: 14px;
        font-size: 16px;
        padding-left: 16px;

        &::before,
        &::after {
          width: 50px;
        }
      }

      .creanomic-text {
        letter-spacing: 6px;
        font-size: 48px;

        margin: 10px 0 12px;
      }

      .taglines-text-wrapper {
        .text {
          font-size: 14px;
        }

        .circle {
          width: 8px;
          height: 8px;
          border-radius: 8px;
        }
      }
    }

    .link-box {
      .link {
        font-size: 16px;
      }
    }
  }
}

// Landscape Style
@media only screen and (min-width: 481px) and (max-width: 768px) and (orientation: landscape) {
  .main-text {
    width: 300px;
    height: 300px;

    border: 2px solid rgba(254, 254, 254, 0.75);
    
    &::before {
      border: 6px solid rgba(254, 254, 254, 0.75);
    }

    .logo-box {
      width: 50px;
      height: 50px;
    }

    .text-box {
      .explore-text {
        letter-spacing: 8px;
        font-size: 12px;
        padding-left: 12px;

        &::before,
        &::after {
          width: 25px;
        }
      }

      .creanomic-text {
        letter-spacing: 6px;
        font-size: 32px;

        margin: 8px 0 10px;
      }

      .taglines-text-wrapper {
        .text {
          font-size: 10px;
        }

        .circle {
          width: 5px;
          height: 5px;
          border-radius: 8px;
        }
      }
    }

    .link-box {
      .link {
        font-size: 12px;
      }
    }
  }
}

// Vertical Small Screen Style
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {
  .main-text {
    width: 600px;
    height: 600px;

    border: 6px solid rgba(254, 254, 254, 0.75);
    
    &::before {
      border: 12px solid rgba(254, 254, 254, 0.75);
    }

    .logo-box {
      width: 80px;
      height: 80px;
    }

    .text-box {
      .explore-text {
        letter-spacing: 12px;
        font-size: 24px;
        padding-left: 12px;

        &::before,
        &::after {
          width: 75px;
        }
      }

      .creanomic-text {
        letter-spacing: 10px;
        font-size: 54px;

        margin: 10px 0 12px;
      }

      .taglines-text-wrapper {
        .text {
          font-size: 18px;
        }

        .circle {
          width: 10px;
          height: 10px;
          border-radius: 10px;
        }
      }
    }

    .link-box {
      .link {
        font-size: 20px;
      }
    }
  }
}

// Horizontal Small Screen Style
@media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
  .main-text {
    width: 300px;
    height: 300px;

    border: 2px solid rgba(254, 254, 254, 0.75);
    
    &::before {
      border: 8px solid rgba(254, 254, 254, 0.75);
    }

    .logo-box {
      width: 30px;
      height: 30px;
    }

    .text-box {
      .explore-text {
        letter-spacing: 8px;
        font-size: 14px;
        padding-left: 12px;

        &::before,
        &::after {
          width: 50px;
        }
      }

      .creanomic-text {
        letter-spacing: 6px;
        font-size: 32px;

        margin: 6px 0 8px;
      }

      .taglines-text-wrapper {
        .text {
          font-size: 12px;
        }

        .circle {
          width: 5px;
          height: 5px;
          border-radius: 10px;
        }
      }
    }

    .link-box {
      .link {
        font-size: 16px;
      }
    }
  }
}

// Laptop and Big Screen Style
@media only screen and (min-width: 1025px) {
  .main-text {
    width: 500px;
    height: 500px;

    border: 6px solid rgba(254, 254, 254, 0.75);
    
    &::before {
      border: 12px solid rgba(254, 254, 254, 0.75);
    }

    .logo-box {
      width: 75px;
      height: 75px;
    }

    .text-box {
      .explore-text {
        letter-spacing: 14px;
        font-size: 24px;
        padding-left: 12px;

        &::before,
        &::after {
          width: 75px;
        }
      }

      .creanomic-text {
        letter-spacing: 6px;
        font-size: 60px;

        margin: 10px 0 12px;
      }

      .taglines-text-wrapper {
        .text {
          font-size: 18px;
        }

        .circle {
          width: 12px;
          height: 12px;
          border-radius: 16px;
        }
      }
    }

    .link-box {      
      .link {
        font-size: 20px;
        transition: .4s ease-out;

        &:hover {
          letter-spacing: 2px;
          color: #FEFEFE;
        }
      }
    }
  }
}
</style>