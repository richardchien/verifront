<template>
  <div class="entry">
    <article :lang="entry.meta.language">
      <h1>{{ entry.title }}</h1>

      <EntryMeta :entry="entry" />

      <div v-html="entry.content"></div>
    </article>
  </div>
</template>

<script>
import EntryMeta from '~components/EntryMeta.vue'
import utils from '~assets/js/utils.js'

export default {
  props: ['entry'],
  components: {
    EntryMeta
  },
  mounted () {
    utils.makeLinksTargetBlank()
  },
  updated () {
    utils.makeLinksTargetBlank()
  }
}
</script>
