<template>
  <div class="container">
    <div class="overlay"></div>
    <main-header :prevLink="prevLink"></main-header>

    <header class="header">
      <h1 class="title">
        {{ $t("cPage.InternationalCompTitle") }}
      </h1>
    </header>

    <section class="section">
      <!-- <div class="competition-image"> -->
        <!-- <img src="img/international.jpg" alt="International Poster"> -->
      <!-- </div> -->
      <div class="competition-box">
        <div class="competition-text">
          <h2 class="comp-text">
                <strong>{{$t("competitions.photographyText.crea1")}}</strong>
                <p><strong>{{ $t("competitions.photographyText.crea2") }}</strong></p>
                <p><strong>{{ $t("competitions.photographyText.crea3") }} </strong></p>
          </h2>
          <div class="comp-text">
            <strong>{{$t("competitions.photographyText.crea4")}}</strong>
            <p><strong>"{{$t("competitions.photographyText.crea5")}}"</strong></p>
          </div>
          <h2 class="comp-title">
            {{ $t("competitions.photography") }}
          </h2>
          <div class="comp-text">
            <strong>{{ $t("competitions.theme") }}</strong>
            <p>"{{ $t("competitions.photographyTheme") }}"</p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.timeline") }}</strong>
            <table class="table">
            <tr>
                <td>{{ $t("competitions.photographyText.open") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.photographyText.opendate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.photographyText.scor") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.photographyText.scordate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.photographyText.win") }} </td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.photographyText.windate')"></td>
              </tr>
            </table>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.reward") }}</strong>
            <table class="table">
              <tr>
                <td>{{ $t("competitions.Winner1") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>$500 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.Winner2") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>$400 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.Winner3") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>$300 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.favwin") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>$200 + {{ $t("competitions.certificate") }}</td>
              </tr>
            </table>
            <p>({{ $t("competitions.tax") }})</p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.contactPerson") }}</strong>
            <table class="table">
              <tr>
                <td>Email</td>
                <td style="padding: 0 4px">:</td>
                <td>
                  <a
                    style="text-decoration: underline"
                    href="mailto:photographycreanomic2020@gmail.com"
                    >photographycreanomic2020@gmail.com</a
                  >
                </td>
              </tr>
              <tr>
                <td>Whatsapp</td>
                <td style="padding: 0 4px">:</td>
                <td>
                  <a
                    style="text-decoration: underline"
                    href="https://api.whatsapp.com/send?phone=6281295639608&text=Halo, Creanomic."
                    >+62 812 - 9563 - 9608 (Rachma Phebira)</a
                  >
                </td>
              </tr>
            </table>
          </div>
          <a
            href="pdf/internationalPhotography.pdf"
            target="_blank"
            class="comp-btn"
          >
            {{ $t("competitions.downloadPDF") }}
          </a>
          <a href="pdf/internationalForm.docx" target="_blank" class="comp-btn">
            {{ $t("competitions.enrollComp") }}
          </a>
        </div>
      </div>
    </section>

    <lang-btn></lang-btn>
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";

export default {
  name: "international-competition",

  components: {
    MainHeader,
  },

  data: () => ({
    prevLink: "competition",
  }),

  mounted() {
    this.eventBus.$on("loadCompetitionPage", () => this.goToCompetitionPage());
    this.runAnimation();
  },

  methods: {
    runAnimation() {
      this.gsap.from(".overlay", {
        left: "0",
        duration: 1,
        delay: 1,
        ease: "circ.inOut",
      });
    },

    goToCompetitionPage() {
      this.$router.push({ name: "competition" }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
// Global Color Variables.
$white: #f5f5f5;
$yellow: #ffb149;
$blue: #00a8aa;
$grey: #363c3e;
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
.overlay {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  z-index: 25;
  background: $grey;
}
.container {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: $grey;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.header {
  padding: 25px;
  @include md {
    padding: 25px 50px;
  }
  .title {
    color: $yellow;
    font-size: 1.8rem;
    font-weight: 300;
    text-align: center;
    @include md {
      font-size: 2rem;
    }
    @include lg {
      font-size: 2.4rem;
    }
  }
}
.section {
  padding: 0 50px;
  .competition-image {
    margin-bottom: 25px;
    line-height: 0;
    text-align: center;
    img {
      width: 100%;
      @include lg {
        width: 500px;
      }
    }
  }
  .competition-box {
    padding: 25px 0;
    display: block;
    .competition-text {
      color: $white;
      text-align: center;
      .comp-title {
        font-family: $serif;
        font-size: 1.2rem;
        font-weight: 300;
        @include md {
          font-size: 1.4rem;
        }
        @include lg {
          font-size: 1.6rem;
        }
      }
      .comp-text {
        font-family: $sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        margin: 25px 0;
        @include md {
          font-size: 0.9rem;
        }
        @include lg {
          font-size: 1rem;
        }
        table {
          margin: auto;
          text-align: left;
        }
      }
      .comp-btn {
        background: none;
        outline: none;
        border: 1px solid $blue;
        border-radius: 4px;
        color: $blue;
        font-family: $sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        padding: 10px 30px;
        transition: 0.4s ease-out;
        display: block;
        margin-right: 0;
        margin-bottom: 8px;
        cursor: pointer;
        @include md {
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 0;
          font-size: 0.9rem;
        }
        @include lg {
          font-size: 1rem;
        }
        &:hover {
          background: $blue;
          color: $white;
        }
      }
    }
  }
}
</style>