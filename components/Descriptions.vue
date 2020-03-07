<template>
  <div class="descriptions">
    <div
      v-for="(description, index) in descriptions"
      :key="index"
    >
      <h3>
        {{ description.title }}
      </h3>
      <p>
        {{ description.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    descriptions: {
      type: Array,
      default: null
    }
  }
}
</script>
