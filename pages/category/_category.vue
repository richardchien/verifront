<template>
  <div>
    <Archive type="Category" :name="category" :entries="entries" :key="'category ' + category" />
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
          categories: params.category
        }
      })
      entries = data
    } catch (e) {
    }
    return {
      category: params.category,
      entries: entries
    }
  },

  head () {
    return {
      title: `${this.category} - Category - ${this.$store.state.site.title}`
    }
  }
}
</script>
