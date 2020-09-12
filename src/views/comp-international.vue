<template>
  <div class="container">
    <main-header></main-header>

    <div class="header">
      <h2 class="title">Creanomic Competition</h2>
      <div class="line"></div>
      <h3 class="sub-title">International</h3>
    </div>

    <div class="box-container">
      <div class="hexagon">
        test
      </div>
      <div class="photo-text">
        <h2>Photography</h2><br>
        <i>Persyaratan:</i><br><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat! Laboriosam nesciunt atque quos! Architecto repellendus nobis ex earum repellat ducimus quibusdam, ad consequatur nesciunt molestiae incidunt similique? Possimus unde illum quasi nemo accusamus rerum laudantium id, mollitia aliquid sit ipsa qui corporis, velit vitae. Ipsum minima deserunt ea repellat!</p><br>
        <p>Peraturan:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore ducimus quod, voluptas autem id ab distinctio officiis libero inventore repudiandae, iusto consectetur quaerat optio impedit? Architecto sit cum aliquam!</p><br>
        <p>Pendaftaran:</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore perspiciatis veniam fugit aliquam molestiae harum veritatis iure nobis architecto atque aliquid maiores autem iste expedita, similique, placeat ullam officia.</p><br>
        <button type="button" class="btn">Download PDF</button>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'

export default {
  name: 'international-comp',
  components: {
    MainHeader,
  }
}
</script>

<style lang="scss" scoped>
.container{
  background: #363C3E;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  padding-left: 50px;
  color: #FFB149;
  font-family: "Merriweater", serif;
  margin: 50px 0;

  .title {
    font-size: 36px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .line {
    width: 100px;
    border: 1px solid #FFB149;
    border-radius: 1px;
    margin: 0 25px;
  }

  .sub-title {
    opacity: 0.75;
    font-size: 30px;
    font-weight: 300;
  }
}

.box-container {
  border: 1px solid white;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 50px;
  padding: 0 50px;
  overflow: auto;
}
.hexagon {
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  background: red;
  background-size: cover;
  background-position: center;
  margin-top: 10px;
  margin-right: 30px;
  height: 350px;
  width: 1000px;
}
.btn{
  color: #00bfff;
  background: transparent;
  border-radius: 10px;
  padding: 5px 10px;
  outline: none;
  border: 1px solid #00bfff;
}
</style>