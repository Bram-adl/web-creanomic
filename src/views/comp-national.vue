<template>
  <div class="container">
    <div class="header">
      <div class="back">
        <h3>GO Back</h3>
      </div>
      <div class="logo">
        <img src="img/logo.png" class="logo">
      </div>
      <div class="about">
        <h3>About Creanomic</h3>
      </div>
    </div>


    <div class="judul">
      <h1>CREANOMIC COMPETITION</h1>
    </div>


    <div class="short-movie">
      <div class="hexagon">
        
      </div>
      <div class="movie-text">
        <h2>Short Movie</h2><br>
        <i>Persyaratan:</i><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat! Laboriosam nesciunt atque quos! Architecto repellendus nobis ex earum repellat ducimus quibusdam, ad consequatur nesciunt molestiae incidunt similique? Possimus unde illum quasi nemo accusamus rerum laudantium id, mollitia aliquid sit ipsa qui corporis, velit vitae. Ipsum minima deserunt ea repellat!</p><br>
        <p>Peraturan:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore ducimus quod, voluptas autem id ab distinctio officiis libero inventore repudiandae, iusto consectetur quaerat optio impedit? Architecto sit cum aliquam!</p><br>
        <p>Pendaftaran:</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore perspiciatis veniam fugit aliquam molestiae harum veritatis iure nobis architecto atque aliquid maiores autem iste expedita, similique, placeat ullam officia.</p><br>
        <button type="button" class="btn">Download PDF</button>
      </div>
    </div>
    <div class="bisnis-plan">
      <div class="bisnis-text">
        <h2>Bisnis Plan</h2><br>
        <i>Persyaratan:</i><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat! Laboriosam nesciunt atque quos! Architecto repellendus nobis ex earum repellat ducimus quibusdam, ad consequatur nesciunt molestiae incidunt similique? Possimus unde illum quasi nemo accusamus rerum laudantium id, mollitia aliquid sit ipsa qui corporis, velit vitae. Ipsum minima deserunt ea repellat!</p><br>
        <p>Peraturan:</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore ducimus quod, voluptas autem id ab distinctio officiis libero inventore repudiandae, iusto consectetur quaerat optio impedit? Architecto sit cum aliquam!</p><br>
        <p>Pendaftaran:</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore perspiciatis veniam fugit aliquam molestiae harum veritatis iure nobis architecto atque aliquid maiores autem iste expedita, similique, placeat ullam officia.</p><br>
        <button type="button" class="btn2">Download PDF</button>
      </div>
      <div class="hexagon2">

      </div>
    </div>
     <div class="essay">
    <div class="hexagon3">
      
    </div>
    <div class="essay-text">
      <h2>Essay</h2><br>
      <i>Persyaratan:</i><br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat! Laboriosam nesciunt atque quos! Architecto repellendus nobis ex earum repellat ducimus quibusdam, ad consequatur nesciunt molestiae incidunt similique? Possimus unde illum quasi nemo accusamus rerum laudantium id, mollitia aliquid sit ipsa qui corporis, velit vitae. Ipsum minima deserunt ea repellat!</p><br>
      <p>Peraturan:</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet labore ducimus quod, voluptas autem id ab distinctio officiis libero inventore repudiandae, iusto consectetur quaerat optio impedit? Architecto sit cum aliquam!</p><br>
      <p>Pendaftaran:</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore perspiciatis veniam fugit aliquam molestiae harum veritatis iure nobis architecto atque aliquid maiores autem iste expedita, similique, placeat ullam officia.</p><br>
      <button type="button" class="btn3">Download PDF</button>
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
  height: 2000px;
  margin: 0 auto;
}
.header{
  display: flex;
  width: 100%;
  height: 60px;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
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
.short-movie{
  font-family: 'Open Sans', sans-serif;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.hexagon {
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  /* background: url(img/short-movie.jpg) no-repeat; */
  background-size: cover;
  margin-top: 10px;
  margin-right: 30px;
  height: 350px;
  width: 1000px;
}
.hexagon2 {
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  /* background: url(img/2.jpg) no-repeat; */
  background-size: cover;
  margin-top: 10px;
  margin-right: 30px;
  height: 350px;
  width: 1000px;
}

.hexagon3 {
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  /* background: url(img/3.jpg) no-repeat; */
  background-size: cover;
  margin-top: 10px;
  margin-right: 30px;
  height: 350px;
  width: 1000px;
}
.btn{
  background: #00bfff;
  border-radius: 10px;
  padding: 5px 10px;
  outline: none;  
  border: none;
}
.bisnis-plan{
  font-family: 'Open Sans', sans-serif;;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.bisnis-plan img{
  width: 500px;
  height: 400px;
  border: 3px solid gold;
  margin-left: 40px;
}
.btn2{
  color: #00bfff;
  background: transparent;
  border-radius: 10px;
  padding: 5px 10px;
  outline: none;
  border: 1px solid #00bfff;
}
.essay{
  font-family: 'Open Sans', sans-serif;;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.essay img{
  width: 500px;
  height: 400px;
  border: 3px solid gold;
  margin-right: 40px;
}
.btn3{
  color: #00bfff;
  background: transparent;
  border-radius: 10px;
  padding: 5px 10px;
  outline: none;
  border: 1px solid #00bfff;
}
</style>