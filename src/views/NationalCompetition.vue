<template>
  <div class="container">
    <div class="overlay"></div>
    <main-header :prevLink="prevLink"></main-header>

    <header class="header">
      <h1 class="title">
        {{ $t("cPage.NationalCompTitle") }}
      </h1>
    </header>

    <section class="section" style="margin-bottom: 25px">
      <!-- <div class="competition-image">
        <img src="img/national.JPEG" alt="National Poster">
      </div> -->
      <div class="competition-box">
        <div class="competition-text">
          <h2 class="comp-title">
                <strong>{{$t("competitions.essayAnn.text1")}}</strong>
                <p><strong>{{ $t("competitions.essayAnn.text2") }}</strong></p>
          </h2>
          <br>
          <!-- <div class="comp-text">
            <strong>{{$t("competitions.photographyText.crea4")}}</strong>
            <p><strong>"{{$t("competitions.photographyText.crea5")}}"</strong></p>
          </div> -->
          <div class="comp-title">
            {{ $t("competitions.shortMovie") }}
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner1") }}</strong> <br/>
            <p><strong>{{ $t("competitions.shortmovieAnn.theme1") }}</strong></p>
            <p>{{ $t("competitions.shortmovieAnn.tim11") }}</p>
            <p>{{ $t("competitions.shortmovieAnn.tim12") }}</p>
            <p>{{ $t("competitions.shortmovieAnn.tim13") }}</p>
            <p><strong>{{ $t("competitions.shortmovieAnn.univ1") }}</strong></p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner2") }}</strong> <br/>
            <p><strong>{{ $t("competitions.shortmovieAnn.theme2") }}</strong></p>
            <p>{{ $t("competitions.shortmovieAnn.tim2") }}</p>
            <p><strong>{{ $t("competitions.shortmovieAnn.univ2") }}</strong></p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner3") }}</strong> <br/>
            <p><strong>{{ $t("competitions.shortmovieAnn.theme3") }}</strong></p>
            <p>{{ $t("competitions.shortmovieAnn.tim31") }}</p>
            <p>{{ $t("competitions.shortmovieAnn.tim32") }}</p>
            <p>{{ $t("competitions.shortmovieAnn.tim33") }}</p>
            <p>{{ $t("competitions.shortmovieAnn.tim34") }}</p>
            <p><strong>{{ $t("competitions.shortmovieAnn.univ3") }}</strong></p>
          </div>
           <div class="comp-text">
            <strong>{{ $t("competitions.essayAnn.cok1") }}</strong>
            <strong><p>{{ $t("competitions.essayAnn.cok2") }}</p></strong>
            <br>
            <p><strong><i>{{ $t("competitions.essayAnn.cok3") }}</i></strong></p>
            <p><strong><i>{{ $t("competitions.essayAnn.cok4") }}</i></strong></p>
            <p><strong>{{ $t("competitions.essayAnn.cok5") }}</strong></p>
          </div>
          <!-- <div class="comp-text">
            <strong>{{ $t("competitions.timeline") }}</strong> <br />
            <table class="table">
              <tr>
                <td>{{ $t("competitions.pendaftarantech") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.shortMovieText.pendaftarandate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.techmeet") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.shortMovieText.techmeetdate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.penilaian") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.shortMovieText.penilaiandate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.pengumuman") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.shortMovieText.pengumumandate')"></td>
              </tr>
            </table>
          </div> -->
          <!-- <div class="comp-text">
            <strong>{{ $t("competitions.reward") }}</strong> <br />
            <table class="table">
              <tr>
                <td>{{ $t("competitions.Winner1") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 5.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.Winner2") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 4.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.Winner3") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 3.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
            </table>
            <p>({{ $t("competitions.tax") }})</p>
          </div> -->
          <!-- <div class="comp-text">
            <table class="table">
              <tr>
                <td>Line</td>
                <td style="padding: 0 4px">:</td>
                <td>riyadhussh</td>
              </tr>
              <tr>
                <td>Whatsapp</td>
                <td style="padding: 0 4px">:</td>
                <td>
                  <a
                    href="https://api.whatsapp.com/send?phone=6285806553948&text=Halo, Creanomic."
                    >0858 - 0655 - 5394 (Galuh)</a
                  >
                </td>
              </tr>
            </table>
          </div> -->
          <!-- <a href="pdf/nationalShortMovie.pdf" target="_blank" class="comp-btn">
            {{ $t("competitions.downloadPDF") }}
          </a> -->
          <!-- <a
            href="pdf/nationalShortMovie.docx"
            target="_blank"
            class="comp-btn"
          >
            {{ $t("competitions.enrollComp") }}
          </a> -->
        </div>
      </div>
      <div class="competition-box flex-reversed">
        <div class="competition-text">
          <h2 class="comp-title">
            {{ $t("competitions.bussinessPlan") }}
          </h2>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner1") }}</strong> <br/>
            <p><strong>{{ $t("competitions.bussinessplanAnn.theme1") }}</strong></p>
            <p>{{ $t("competitions.bussinessplanAnn.tim11") }}</p>
            <p>{{ $t("competitions.bussinessplanAnn.tim12") }}</p>
            <p>{{ $t("competitions.bussinessplanAnn.tim13") }}</p>
            <p><strong>{{ $t("competitions.bussinessplanAnn.univ1") }}</strong></p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner2") }}</strong> <br/>
            <p><strong>{{ $t("competitions.bussinessplanAnn.theme2") }}</strong></p>
            <p>{{ $t("competitions.bussinessplanAnn.tim21") }}</p>
            <p>{{ $t("competitions.bussinessplanAnn.tim22") }}</p>
            <p>{{ $t("competitions.bussinessplanAnn.tim23") }}</p>
            <p><strong>{{ $t("competitions.bussinessplanAnn.univ2") }}</strong></p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner3") }}</strong> <br/>
            <p><strong>{{ $t("competitions.bussinessplanAnn.theme3") }}</strong></p>
            <p>{{ $t("competitions.bussinessplanAnn.tim31") }}</p>
            <p>{{ $t("competitions.bussinessplanAnn.tim32") }}</p>
            <p><strong>{{ $t("competitions.bussinessplanAnn.univ3") }}</strong></p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.essayAnn.cok1") }}</strong>
            <strong><p>{{ $t("competitions.essayAnn.cok2") }}</p></strong>
            <br>
            <p><strong><i>{{ $t("competitions.essayAnn.cok3") }}</i></strong></p>
            <p><strong><i>{{ $t("competitions.essayAnn.cok4") }}</i></strong></p>
            <p><strong>{{ $t("competitions.essayAnn.cok5") }}</strong></p>
          </div>
          <!-- <div class="comp-text">
            <strong>{{ $t("competitions.timeline") }}</strong> <br />
            <table class="table">
              <tr>
                <td>{{ $t("competitions.pendaftarantech") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.bussinessPlanText.pendaftarandate')">
                </td>
              </tr>
              <tr>
                <td>{{ $t("competitions.techmeet") }} I</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.bussinessPlanText.techmeetdate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.penyisihan") }} I</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.bussinessPlanText.penyisihandate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.techmeet") }} II</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.bussinessPlanText.techmeetdate2')"></td>
              </tr>
              <tr>
                <td>
                  {{ $t("competitions.penyisihan") }} II (Wawancara)
                </td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.bussinessPlanText.penyisihandate2')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.pengumuman") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.bussinessPlanText.pengumumandate')"></td>
              </tr>
            </table>
          </div> -->
          <!-- <div class="comp-text">
            <strong>{{ $t("competitions.reward") }}</strong> <br />
            <table class="table">
              <tr>
                <td>{{ $t("competitions.Winner1") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 5.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.Winner2") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 4.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.Winner3") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 3.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
            </table>
            <p>({{ $t("competitions.tax") }})</p>
          </div> -->
          <!-- <div class="comp-text">
            <table class="table">
              <tr>
                <td>Line</td>
                <td style="padding: 0 4px">:</td>
                <td>veniamantikasari</td>
              </tr>
              <tr>
                <td>Whatsapp</td>
                <td style="padding: 0 4px">:</td>
                <td>
                  <a
                    href="https://api.whatsapp.com/send?phone=6285157235221&text=Halo, Creanomic."
                    >0851 - 5723 - 5221 (Mikail)</a
                  >
                </td>
              </tr>
            </table>
          </div> -->
          <!-- <a
            href="pdf/nationalBusinessPlan.pdf"
            target="_blank"
            class="comp-btn"
          >
            {{ $t("competitions.downloadPDF") }}
          </a> -->
          <!-- <a
            href="pdf/nationalBusinessPlan.docx"
            target="_blank"
            class="comp-btn"
          >
            {{ $t("competitions.enrollComp") }}
          </a> -->
        </div>
      </div>
      <div class="competition-box">
        <div class="competition-text">
          <h2 class="comp-title">
            {{ $t("competitions.essay") }}
          </h2>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner1") }}</strong> <br/>
            <p><strong>{{ $t("competitions.essayAnn.name1") }}</strong></p>
            <p><strong>{{ $t("competitions.essayAnn.univ1") }}</strong></p>
            <p>{{ $t("competitions.essayAnn.theme1") }}</p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner2") }}</strong> <br/>
            <p><strong>{{ $t("competitions.essayAnn.name2") }}</strong></p>
            <p><strong>{{ $t("competitions.essayAnn.univ2") }}</strong></p>
            <p>{{ $t("competitions.essayAnn.theme2") }}</p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.Winner3") }}</strong> <br/>
            <p><strong>{{ $t("competitions.essayAnn.name3") }}</strong></p>
            <p><strong>{{ $t("competitions.essayAnn.univ3") }}</strong></p>
            <p>{{ $t("competitions.essayAnn.theme3") }}</p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.runnerup") }}</strong> <br/>
            <p><strong>{{ $t("competitions.essayAnn.name4") }}</strong></p>
            <p><strong>{{ $t("competitions.essayAnn.univ4") }}</strong></p>
            <p>{{ $t("competitions.essayAnn.theme4") }}</p>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.essayAnn.cok1") }}</strong>
            <strong><p>{{ $t("competitions.essayAnn.cok2") }}</p></strong>
            <br>
            <p><strong><i>{{ $t("competitions.essayAnn.cok3") }}</i></strong></p>
            <p><strong><i>{{ $t("competitions.essayAnn.cok4") }}</i></strong></p>
            <p><strong>{{ $t("competitions.essayAnn.cok5") }}</strong></p>
          </div>
          <!-- <div class="comp-text">
            <table class="table" style="text-align:center">
            <tr>
            <td><p><strong>"{{ $t("competitions.essayText.ttp") }}"</strong></p></td>
            </tr>
            </table>
          </div>
          <div class="comp-text"> 
            <strong>{{ $t("competitions.timeline") }}</strong> <br />
            <table class="table">
              <tr>
                <td>{{ $t("competitions.pendaftarantech") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.essayText.pendaftarandate')"> </td>
              </tr>
              <tr>
                <td>{{ $t("competitions.techmeet") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.essayText.techmeetdate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.penilaian") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.essayText.penilaiandate')"></td>
              </tr>
              <tr>
                <td>{{ $t("competitions.pengumuman") }}</td>
                <td style="padding: 0 4px">:</td>
                <td v-html="$t('competitions.essayText.pengumumandate')"></td>
              </tr>
            </table>
          </div>
          <div class="comp-text">
            <strong>{{ $t("competitions.reward") }}</strong> <br />
            <table class="table">
              <tr>
                <td>{{ $t("competitions.Winner1") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 5.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.Winner2") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 4.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.Winner3") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 3.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
              <tr>
                <td>{{ $t("competitions.runnerup") }}</td>
                <td style="padding: 0 4px">:</td>
                <td>Rp 2.000.000 + {{ $t("competitions.certificate") }}</td>
              </tr>
            </table>
            <p>({{ $t("competitions.tax") }})</p>
          </div> 
          <div class="comp-text">
            <table class="table"> 
              <tr>
                <td>Line</td>
                <td style="padding: 0 4px">:</td>
                <td>novymjth89</td>
              </tr>
              <tr>
                <td>Whatsapp</td>
                <td style="padding: 0 4px">:</td>
                <td>
                  <a
                    href="https://api.whatsapp.com/send?phone=6281336781434&text=Halo, Creanomic."
                    >0813 - 3678 - 1434 (Edwin)</a
                  >
                </td>
              </tr>
            </table>
          </div>
          <a href="pdf/nationalEssay.pdf" target="_blank" class="comp-btn">
            {{ $t("competitions.downloadPDF") }}
          </a>
          <a href="pdf/nationalEssay.docx" target="_blank" class="comp-btn">
            {{ $t("competitions.enrollComp") }}
          </a> -->
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