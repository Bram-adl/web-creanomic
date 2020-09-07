<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'main-button',
  props: {
    text: {
      type: String,
      required: true,
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
</style>