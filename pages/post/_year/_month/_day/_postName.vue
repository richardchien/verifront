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
  async asyncData ({ params, error }) {
    try {
      let { year, month, day, postName } = params
      let { data: entry } = await blog.get(`/posts/${year}/${month}/${day}/${postName}/`)
      return {
        entry: entry
      }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },

  validate ({ params }) {
    return /^\d{4}$/.test(params.year) &&
      /^\d{2}$/.test(params.month) &&
      /^\d{2}$/.test(params.day) &&
      /^.+$/.test(params.postName)
  },

  head () {
    return {
      title: `${this.entry.title} - ${this.$store.state.site.title}`
    }
  }
}
</script>
