<template>
  <form class="webinar-form">
    <div class="form-header">
      <h2>
        Enroll Online Webinar
        <i class="fas fa-times" @click="closeForm"></i>
      </h2>
    </div>

    <div class="form-caption">
      <p>Once you have enrolled using your verified email account, We will send you an invitation link to join the webinar. Please kindly provide the correct email address.</p>
    </div>

    <div class="form-group mt-5">
      <input type="text" class="form-control" placeholder="First Name">
    </div>

    <div class="form-group">
      <input type="text" class="form-control" placeholder="Last Name">
    </div>

    <div class="form-group mb-5">
      <input type="email" class="form-control" placeholder="Email Address">
    </div>

    <div class="form-group">
      <button type="submit" class="submit-btn">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'webinar-form',
  mounted: function () {
    this.eventBus.$on("showForm", () => this.openForm())
  },
  methods: {
    openForm() {
      this.gsap.to(".webinar-form", {left: "0", opacity: 1, duration: 1, ease: "circ.inOut"})
    },
    closeForm() {
      this.gsap.to(".webinar-form", {left: "-100%", opacity: 0, duration: 1, ease: "circ.inOut"})
    }
  }
}
</script>

<style lang="scss" scoped>
.webinar-form {
  position: absolute;
  top: 50%;
  left: -100%;
  transform: translate(0, -50%);

  opacity: 0;
  z-index: 10;

  width: 100%;
  height: auto;

  color: #FEFEFE;
  background-color: rgba(0, 0, 0, 0.95);

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  .form-header {
    padding: 25px;

    h2 {
      font-family: "Open Sans", sans-serif;
      font-size: 24px;
      font-weight: 300;
      text-align: center;

      i {
        float: right;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }

  .form-caption {
    padding: 0 16px;

    p {
      color: rgba(254, 254, 254, 0.75);
      font-family: "Open Sans", sans-serif;
      font-size: 14px;
      font-weight: 300;
      text-align: center;
    }
  }

  .form-group {
    margin-bottom: 40px;
    padding: 0 16px;

    &.mt-5 {margin-top: 50px}
    &.mb-5 {margin-bottom: 50px}

    .form-control {
      background: none;
      border: none;
      outline: none;
      
      width: 100%;
      height: auto;

      padding: 8px 12px;
      border-left: 10px solid #BA843C;
      border-bottom: 1px solid #BA843C;

      color: #FEFEFE;
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
    }

    .submit-btn {
      background: #BA843C;
      border: none;
      outline: none;
      border-radius: 4px;
      
      width: 100%;
      height: auto;

      padding: 12px 0;
      color: #FEFEFE;
      font-family: "Open Sans", sans-serif;        
      font-size: 14px;
    }
  }
}

@media screen and (min-width: 768px) {
  .webinar-form {
    position: absolute;
    top: 50%;
    left: -100%;
    transform: translate(0, -50%);

    opacity: 0;
    z-index: 10;

    width: 400px;
    height: auto;

    color: #FEFEFE;
    background-color: rgba(0, 0, 0, 0.95);

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    .form-header {
      padding: 25px;

      h2 {
        font-family: "Open Sans", sans-serif;
        font-size: 24px;
        font-weight: 300;
        text-align: center;

        i {
          float: right;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }

    .form-caption {
      padding: 0 16px;

      p {
        color: rgba(254, 254, 254, 0.75);
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
      }
    }

    .form-group {
      margin-bottom: 40px;
      padding: 0 16px;

      &.mt-5 {margin-top: 50px}
      &.mb-5 {margin-bottom: 50px}

      .form-control {
        background: none;
        border: none;
        outline: none;
        
        width: 100%;
        height: auto;

        padding: 8px 12px;
        border-left: 10px solid #BA843C;
        border-bottom: 1px solid #BA843C;

        color: #FEFEFE;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
      }

      .submit-btn {
        background: #BA843C;
        border: none;
        outline: none;
        border-radius: 4px;
        
        width: 100%;
        height: auto;

        padding: 12px 0;
        color: #FEFEFE;
        font-family: "Open Sans", sans-serif;        
        font-size: 14px;
      }
    }
  }
}
</style>