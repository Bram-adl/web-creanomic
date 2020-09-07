<template>
  <main class="title-container">
    <h3 class="title">Explore Creanomic</h3>
  </main>
</template>

<script>
export default {
  name: 'main-title',
  mounted: function () {
    
  }
}
</script>

<style lang="scss" scoped>
.title-container {
  position: relative;
  padding: 50px 0;
  overflow: hidden;

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: "Merriweather", serif;
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;

    color: #FFB149;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .title-container {
    .title {
      font-size: 48px;

      white-space: nowrap;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .title-container {
    padding: 75px 0;

    .title {
      font-size: 48px;

      white-space: nowrap;
    }
  }
}

@media only screen and (min-width: 1025px) {
  .title-container {
    padding: 75px 0;

    .title {
      font-size: 48px;
      white-space: nowrap;
    }
  }
}
</style>