<template>
  <div class="menu-container">
    <div class="menu-item">
      <router-link class="menu-link" to="home">Home</router-link>
    </div>
    <div class="menu-item">
      <router-link class="menu-link" to="art-gallery">Virtual Exhibition</router-link>
    </div>
    <div class="menu-item">
      <router-link class="menu-link" to="webinar">Webinar</router-link>
    </div>
    <div class="menu-item">
      <router-link class="menu-link" to="competition">Competitions</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-menu',

  mounted () {
    this.gsap.from(".menu-item", {
      opacity: 0,
      x: -50,
      duration: 1.4,
      ease: "power2.out",
      delay: 1,
      stagger: {
        amount: 0.6,
      },
    })
  }
}
</script>

<style lang="scss" scoped>
/* 
  =========================================================
  | SCSS Variables and Mixins
  =========================================================
  Di kode ini, kita membuat beberapa variable untuk warna 
  dan fonts, sehingga berikutnya saat kita ingin menggunakan 
  warna yang sudah ditentukan dari design dan sifatnya global
  kita cukup merubah nya melalui variable ini.

  Berikutnya terdapat mixin yang fokusnya untuk mempermudah
  penulisan media queries atau bekerja untuk responsive web
  design. Mixin sudah dibuat menggunakan @mixin sehingga
  untuk menggunakannya, cukup include dengan @include 
  directive milik SCSS.

  Untuk mobile first approach, kita tidak tentukan breakpoint
  untuk ukuran xs, untuk itu kita hanya deklarasikan ukuran
  lainnya dimana sm untuk small screen seperti handphone, md
  untuk ukuran tablet atau handphone portrait, lg untuk mini
  laptop seperti notebook atau tablet pro, dan xl untuk ukuran
  desktop.
*/

// Global Color Variables.
$white: #F5F5F5;
$white-50: rgba(254, 254, 254, 0.75);
$yellow: #FFB149;
$blue: #00A8AA;
$grey: #363C3E;
$serif: "Merriweather", serif;
$sans-serif: "Open Sans", sans-serif;

// Twitter Bootstrap Grid System. 
$sm-min: 576px;
$md-min: 768px;
$lg-min: 992px;
$xl-min: 1200px;

// Media Queries Breakpoints.
@mixin sm {
  @media (min-width: #{$sm-min}) {
    @content;
  }
}

@mixin md {
  @media (min-width: #{$md-min}) {
    @content;
  }
}

@mixin lg {
  @media (min-width: #{$lg-min}) {
    @content;
  }
}

@mixin xl {
  @media (min-width: #{$xl-min}) {
    @content;
  }
}

/* 
  =========================================================
  | SCSS Bases Styles - Mobile First
  =========================================================
*/

.menu-container {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $grey;
  padding: 85px 60px;
  @include lg {
    width: 40%;
    padding: 100px 50px;
  }
}
.menu-item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $white-50;
  &:first-child {
    border-top: 1px solid $white-50;
  }
}
.menu-link {
  color: $white-50;
  font-family: $serif;
  font-size: 24px;
  transition: .4s ease-out;
  @include md {
    font-size: 32px;
  }
  &:hover {
    color: $white;
    margin-left: 16px;
  }
}
</style>