<template>
  <div class="belt">
    <img
      src="images/logo.png"
      alt="logo"
      class="img"
      @click="scrollTo()"
    >
    <div class="text">
      <div class="row">
        <img
          src="images/location.svg"
          alt="icon-location"
          class="icon"
        >
        <div>
          <p
            v-for="(location, index) in lang.locations"
            :key="index"
          >
            {{ location }}
          </p>
        </div>
      </div>
      <div class="row">
        <img
          src="images/mail.svg"
          alt="icon-mail"
          class="icon"
        >
        <a href="mailto:info@BatTowers.com">
          info@BatTowers.com
        </a>
      </div>
      <div class="row">
        <img
          src="images/phone.svg"
          alt="icon-phone"
          class="icon"
        >
        <a href="tel:+995591023023">
          +995 591 023 023
        </a>
      </div>
      <div class="row lang">
        <button
          :class="$store.state.lang.selectedLang === 'EN' ? 'check' : ''"
          class="btn-lang"
          @click="changeLanguage('EN')"
        >
          EN
        </button>
        <button
          :class="$store.state.lang.selectedLang === 'RU' ? 'check' : ''"
          class="btn-lang"
          @click="changeLanguage('RU')"
        >
          RU
        </button>
        <button
          :class="$store.state.lang.selectedLang === 'PL' ? 'check' : ''"
          class="btn-lang"
          @click="changeLanguage('PL')"
        >
          PL
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lang () {
      return this.$store.state.lang.lang
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$store.commit('lang/setLanguage', lang)
    },
    scrollTo () {
      document.getElementById('scrollToUp').scrollIntoView(
        {
          behavior: 'smooth'
        },
        true
      )
    }
  }
}
</script>
