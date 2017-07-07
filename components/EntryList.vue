<template>
  <div class="entries">
    <template v-if="entries && entries.length > 0">
      <div class="entry" v-for="entry in entries">
        <article :lang="entry.meta.language">
          <h1>
            <nuxt-link :to="entry.unique_key">{{ entry.title }}</nuxt-link>
          </h1>

          <EntryMeta :entry="entry" />

          <div v-html="entry.preview"></div>
          <template v-if="entry.has_more_content">
            <p>……</p>
            <p>
              <nuxt-link :to="entry.unique_key">READ MORE</nuxt-link>
            </p>
          </template>
        </article>
      </div>
    </template>
    <div class="text-center" v-else>
      <p>There is nothing here.</p>
    </div>
  </div>
</template>

<script>
import EntryMeta from '~components/EntryMeta.vue'
import utils from '~assets/js/utils.js'

export default {
  props: ['entries'],
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
