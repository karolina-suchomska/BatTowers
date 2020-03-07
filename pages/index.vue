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
          @click="click()"
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
      </div>
      <div
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
      scroll: false
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
    },
    click () {
      document.getElementById('firstDescriptions').scrollIntoView(
        {
          behavior: 'smooth'
        },
        true
      )
    }
  }
}
</script>
