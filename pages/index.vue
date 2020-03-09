<template>
  <div class="general-container">
    <Belt />
    <div
      :class="blur ? 'blur' : ''"
      class="container"
    >
      <div class="box">
        <h1>
          {{ lang.companyName }}
        </h1>
        <button
          v-if="!scroll"
          @click="goTo('firstDescriptions')"
          class="btn-scroll"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        id="firstDescriptions"
        class="box"
      >
        <Descriptions
          :descriptions="lang.firstDescriptions"
        />
        <button
          v-if="scroll2"
          @click="goTo('secondDescriptions')"
          class="btn-scroll center"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        id="secondDescriptions"
        class="box"
      >
        <Descriptions
          :descriptions="lang.secondDescriptions"
        />
        <button
          v-if="scroll3"
          @click="goTo('questionnaire')"
          class="btn-scroll center"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        id="questionnaire"
        class="box"
      >
        <Questionnaire />
      </div>
    </div>
  </div>
</template>

<script>
import Belt from '@/components/Belt'
import Descriptions from '@/components/Descriptions'
import Questionnaire from '@/components/Questionnaire'

export default {
  components: {
    Belt,
    Descriptions,
    Questionnaire
  },
  data () {
    return {
      scroll: false,
      scroll2: true,
      scroll3: true,
      blur: false
    }
  },
  computed: {
    lang () {
      return this.$store.state.lang.lang
    }
  },
  watch: {
    $route () {
      this.readingHeight()
    }
  },
  mounted () {
    window.addEventListener('scroll', this.readingHeight)
    this.readingHeight()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.readingHeight)
  },
  methods: {
    readingHeight () {
      if (window.scrollY > 200) {
        this.blur = true
      } else {
        this.blur = false
      }

      if (window.innerWidth > 1200) {
        if (window.scrollY > 200) {
          this.scroll = true
        } else {
          this.scroll = false
        }

        if (window.scrollY > 1200) {
          this.scroll2 = false
        } else {
          this.scroll2 = true
        }

        if (window.scrollY > 2000) {
          this.scroll3 = false
        } else {
          this.scroll3 = true
        }
      }

      if (window.innerHeight < 750) {
        this.scroll = true
        this.scroll2 = false
        this.scroll3 = false
      }
    },
    goTo (section) {
      document.getElementById(section).scrollIntoView(
        {
          behavior: 'smooth'
        },
        true
      )
    }
  }
}
</script>
