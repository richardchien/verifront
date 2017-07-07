<template>
  <EntryDetail :entry="entry" />
</template>

<script>
import EntryDetail from '~components/EntryDetail.vue'
import { blog } from '~assets/js/api.js'

export default {
  components: {
    EntryDetail
  },

  async asyncData ({ route, error }) {
    try {
      let { data: entry } = await blog.get(`/pages${route.path}`)
      return {
        entry: entry
      }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },

  head () {
    return {
      title: `${this.entry.title} - ${this.$store.state.site.title}`
    }
  }
}
</script>
