<template>
  <div class="general-container">
    <Belt />
    <div class="container">
      <div
        :class="scroll ? 'blur' : ''"
        class="box"
      >
        <h1>
          Bat Towers Management
        </h1>
        <button
          v-if="!scroll"
          @click="clickToFirstDescriptions()"
          class="btn-scroll"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        id="firstDescriptions"
        :class="scroll ? 'blur' : ''"
        class="box"
      >
        <Descriptions
          :descriptions="lang.firstDescriptions"
        />
        <button
          v-if="scroll2"
          @click="clickToSecondDescriptions()"
          class="btn-scroll center"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        id="secondDescriptions"
        :class="scroll ? 'blur' : ''"
        class="box"
      >
        <Descriptions
          :descriptions="lang.secondDescriptions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Belt from '@/components/Belt'
import Descriptions from '@/components/Descriptions'

export default {
  components: {
    Belt,
    Descriptions
  },
  data () {
    return {
      scroll: false,
      scroll2: true
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
        this.scroll = true
      } else {
        this.scroll = false
      }

      if (window.scrollY > 1200) {
        this.scroll2 = false
      } else {
        this.scroll2 = true
      }
    },
    clickToFirstDescriptions () {
      document.getElementById('firstDescriptions').scrollIntoView(
        {
          behavior: 'smooth'
        },
        true
      )
    },
    clickToSecondDescriptions () {
      document.getElementById('secondDescriptions').scrollIntoView(
        {
          behavior: 'smooth'
        },
        true
      )
    }
  }
}
</script>
