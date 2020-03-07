<template>
  <div class="belt">
    <img
      src="images/logo.png"
      alt="logo"
      class="img"
    >
    <div class="text">
      <div class="row">
        <img
          src="images/logo.png"
          alt="icon"
          class="icon"
        >
        <p>
          info@BatTowers.com
        </p>
      </div>
      <div class="row">
        <img
          src="images/logo.png"
          alt="icon"
          class="icon"
        >
        <p>
          +995 591 023 023
        </p>
      </div>
      <div class="row lang">
        <button
          @click="changeLanguage('EN')"
          :class="$store.state.lang.selectedLang === 'EN' ? 'check' : ''"
          class="btn-lang"
        >
          EN
        </button>
        <button
          @click="changeLanguage('RU')"
          :class="$store.state.lang.selectedLang === 'RU' ? 'check' : ''"
          class="btn-lang"
        >
          RU
        </button>
        <button
          @click="changeLanguage('PL')"
          :class="$store.state.lang.selectedLang === 'PL' ? 'check' : ''"
          class="btn-lang"
        >
          PL
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage (lang) {
      this.$store.commit('lang/setLanguage', lang)
    }
  }
}
</script>
