<template>
  <div class="questionnaire">
    <h2 class="title">
      {{ lang.questionnaireTitle }}
    </h2>
    <iframe
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
  computed: {
    lang () {
      return this.$store.state.lang.lang
    }
  }
}
</script>
