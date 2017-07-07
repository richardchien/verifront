<template>
  <div>
    <Archive type="Tag" :name="tag" :entries="entries" />
  </div>
</template>

<script>
import Archive from '~components/Archive.vue'
import { blog } from '~assets/js/api.js'

export default {
  components: {
    Archive
  },

  async asyncData ({ params }) {
    let entries = []
    try {
      let { data } = await blog.get('/posts?fields=title,created,meta,unique_key', {
        params: {
          tags: params.tag
        }
      })
      entries = data
    } catch (e) {
    }
    return {
      tag: params.tag,
      entries: entries
    }
  },

  head () {
    return {
      title: `${this.tag} - Tag - ${this.$store.state.site.title}`
    }
  }
}
</script>
