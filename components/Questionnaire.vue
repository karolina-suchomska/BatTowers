<template>
  <div class="questionnaire">
    <h2 class="title">
      {{ lang.questionnaireTitle }}
    </h2>
    <iframe
      v-if="visible"
      :src="lang.questionnaire"
      frameborder="0"
    />
    <a
      :href="lang.questionnaire"
      target="_blank"
      class="link"
    >
      {{ lang.goToQuestionnaire }}
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  computed: {
    lang () {
      return this.$store.state.lang.lang
    }
  },
  watch: {
    $route () {
      this.readingWeight()
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
      if (window.innerWidth < 768) {
        this.visible = false
      } else {
        this.visible = true
      }
    }
  }
}
</script>
