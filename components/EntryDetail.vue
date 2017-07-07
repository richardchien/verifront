<template>
  <div>
    <div class="entry">
      <article :lang="entry.meta.language">
        <h1>{{ entry.title }}</h1>

        <EntryMeta :entry="entry" />

        <div v-html="entry.content"></div>
      </article>
    </div>
    <Disqus v-if="disqusEnabled" :key="entry.unique_key" :shortName="disqusShortName" :url="rootUrl + entry.unique_key" :uniqueKey="entry.unique_key" />
  </div>
</template>

<script>
import EntryMeta from '~components/EntryMeta.vue'
import Disqus from '~components/Disqus.vue'
import utils from '~assets/js/utils.js'
import config from '~assets/js/config.js'

export default {
  props: ['entry'],
  components: {
    EntryMeta,
    Disqus
  },
  data () {
    return {
      disqusEnabled: config.disqusEnabled,
      disqusShortName: config.disqusShortName
    }
  },
  computed: {
    rootUrl () {
      let r = ''
      if (config.rootUrl) {
        r = config.rootUrl
      } else {
        r = this.$store.state.site.root_url
      }
      if (r) {
        r = r.replace(/\/+$/, '')
      }
      return r
    }
  },
  mounted () {
    utils.makeLinksTargetBlank()
  },
  updated () {
    utils.makeLinksTargetBlank()
  }
}
</script>
