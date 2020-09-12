<template>
  <button class="btn" @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
  name: 'main-button',
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  methods: {
    handleClick() {
      if ( this.text == "Enter Art Exhibition" ) {
        console.log("SHOW ART GALLERY")
      }
      else if ( this.text == "Enroll Webinar Now" ) {
        this.eventBus.$emit("showForm")
      } else if ( this.text == "International" ) {
        this.eventBus.$emit("showInternationalComp")
      } else {
        this.eventBus.$emit("showNationalComp")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  outline: none;

  color: #FEFEFE;
  background-color: #C58B3E;
  
  font-family: "Open Sans", sans-serif;
  font-size: 18px;

  padding: 12px 32px;
  border-radius: 4px;

  opacity: 0;

  transition: .4s ease-out;
  cursor: pointer;

  &:hover {
    background: darken(#C58B3E, 15%);
  }
}

@media only screen and (max-width: 480px) {
  .btn {
    font-size: 14px;
  }
}
</style>