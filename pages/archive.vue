<template>
  <div>
    <Archive type="Archive" name="All" :entries="entries" />
  </div>
</template>

<script>
import Archive from '~components/Archive.vue'
import { blog } from '~assets/js/api.js'

export default {
  components: {
    Archive
  },

  async asyncData () {
    let entries = []
    try {
      let { data } = await blog.get('/posts?fields=title,created,meta,unique_key')
      entries = data
    } catch (e) {
    }
    return {
      entries: entries
    }
  },

  head () {
    return {
      title: `All - Archive - ${this.$store.state.site.title}`
    }
  }
}
</script>
