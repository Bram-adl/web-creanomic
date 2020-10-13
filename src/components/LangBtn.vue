<template>
  <div class="lang-support">
    <button 
      class="lang-btn"
      :class="[ entry.active ? 'active' : ''  ]"
      v-for="entry in languages" 
      :key="entry.title" 
      @click="changeLocale(entry.language)">
      <flag :iso="entry.flag" :squared="false" />
    </button>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n"

export default {
  data: () => ({
    languages: [
      { flag: 'id', language: 'id', title: 'Bahasa', active: false },
      { flag: 'us', language: 'en', title: 'English', active: true },
    ]
  }),

  methods: {
    changeLocale(locale) {
      this.languages.forEach(entry => {
        entry.active = !entry.active
      })
      i18n.locale = locale
    }
  }
}
</script>

<style lang="scss">
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

.lang-support {
  position: fixed;
  bottom: 8px;
  right: 8px;
  @include lg {
    bottom: 16px;
    right: 16px;
  }
}

.lang-btn {
    font-size: 10px;
    width: 30px;
    height: 30px;
    display: block;
    @include lg {
      font-size: 16px;
      width: 50px;
      height: 50px;
    }
    margin-top: 8px;
    line-height: 0;
    background: transparent;
    border: 1px solid $blue;
    border-radius: 50px;
    outline: none;
    transition: .4s ease-out;
    cursor: pointer;
    &:hover,
    &.active {
      background: $blue;
      color: $white;
    }
  }

</style>