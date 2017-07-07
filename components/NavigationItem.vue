<template>
  <li v-bind:class="{ active }">
    <nuxt-link :to="path">{{ text }}</nuxt-link>
  </li>
</template>

<script>
export default {
  props: [
    'path', 'text'
  ],
  computed: {
    active () {
      return this.$route.path === this.path
    }
  }
}
</script>
