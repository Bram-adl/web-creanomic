<template>
  <div class="container">
    <div class="header">
      <div class="back">
        <i class="fas fa-arrow-left"></i>
        <h3>Go Back</h3>
      </div>
      <div class="logo">
        <img src="img/logo.png">
      </div>
      <div class="about">
        <h3>about creanomic</h3>
      </div>
    </div>

    <div class="judul">
      <h1>CREANOMIC COMPETITION</h1>
    </div>
    <div class="photography">
      <div class="hexagon">
        
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
export default {

}
</script>

<style>
  .container{
  width: 90%;
  height: 100vh;
  margin: 0 auto;
}
.header{
  display: flex;
  height: 60px;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.back{
  display: flex;
}
.back i{
  margin: 18px;

}
.back h3{
  margin-top: 12px;
}
.logo img{
  width: 70px;
  height: 70px;
  margin-top: 15px;
}
.judul{
  margin-top: 50px;
  letter-spacing: 0.8px;
}
.photography{
  font-family: 'Open Sans', sans-serif;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.hexagon {
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  background: url(img/4.jpg) no-repeat;
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