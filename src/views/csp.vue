<template>
  <div class="container">
    <div class="header">
      <div class="back">
        <i class="fas fa-arrow-left"></i>
        <h3>Back</h3>
      </div>
      <div class="logo">
        <img src="img/logo.png" alt="">
      </div>
      <div class="about">
        <h3>About</h3>
      </div>
    </div>
    <div class="content">
      <div class="coming-soon">
        <h2 class="title">Coming Soon!</h2>
        <h3 class="intro">
          We are working hard to give you a better experience.
      </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt facilis, unde veniam quisquam dolorum autem praesentium accusantium quia architecto impedit perferendis deserunt tempore dicta quo debitis, voluptas beatae eligendi sit?</p>
        <div class="countdown">
          <div class="time"><div id="day"></div><span>Days</span></div>
          <div class="time"><div id="hour"></div><span>Hours</span></div>
          <div class="time"><div id="minute"></div><span>Minutes</span></div>
          <div class="time"><div id="second"></div><span>Seconds</span></div>
        </div>
        <a href="#">Notify Me!</a>
      </div>
      <div class="figure">

      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data(){
     var countDate = new Date('Jan 1, 2021 00:00:00').getTime();

    function newYear(){
      var now = new Date().getTime();
      gap = countDate - now;

      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;

      var d = Math.floor(gap /(day));
      var h = Math.floor((gap % (day)) / (hour));
      var m = Math.floor((gap % (hour)) / (minute));
      var s = Math.floor((gap % (minute)) / second);

      document.getElementById('day').innerText = d;
      document.getElementById('hour').innerText = h;
      document.getElementById('minute').innerText = m;
      document.getElementById('second').innerText = s;
    }
    setInterval(function(){
      newYear();
    },1000)
  }
}
</script>

<style>
.container{
  width: 100%;
  height: 100vh;
  background: #363C3E;
}
.header{
  width: 100%;
  height: 60px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
}
.back{
  display: flex;
  align-items: center;
}
.back h3{
  margin-left: 15px;
  cursor: pointer;
}
.about{
  cursor: pointer;
}
.logo img{
  width: 60px;
  height: 60px;
}
.content{
  color: #fff;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  height: 84vh;
}
.coming-soon{
  flex-basis: 60%;
  padding: 20px;
}
.title{
  display: inline-block;
  font-size: 40px;
  position: relative;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}
.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: #fff;
  width: 140px;
}
.intro {
  font-size: 15px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}
.figure{
  display: flex;
  flex-basis: 40%;
  align-items: center;
  background: url(img/main-figure.svg);
}
.countdown{
  display: flex;
  margin: 20px 0;
}
.countdown .time{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  margin-right: 20px;
  font-size: 25px;
  min-width: 100px;
  font-weight: 700;
  padding: 10px 5px 15px;
  border-radius: 4px;
  color: #000;
  font-family: 'Poppins', sans-serif;
}
.countdown .time span{
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color:black;
  font-family: 'Poppins', sans-serif;
}
.content a{
  position: relative;
  margin-top: 10px;
  display: inline-block;
  background-color: #fff;
  color: #000;
  font-size: 20px;
  letter-spacing: 2px;
  padding: 15px 35px;
  text-decoration: none;
  border-radius: 40px;
}
</style>