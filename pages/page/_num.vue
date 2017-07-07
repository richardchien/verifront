<template>
  <div>
    <EntryList :entries="entries" />
    <ul class="pager">
      <li class="previous" v-if="hasOrder">
        <nuxt-link :to="`/page/${pageNum + 1}/`" class="button">← Older</nuxt-link>
      </li>
      <li class="next" v-if="hasNewer">
        <nuxt-link :to="`/page/${pageNum - 1}/`" class="button">Newer →</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import EntryList from '~components/EntryList.vue'
import { blog } from '~assets/js/api.js'
import config from '~assets/js/config.js'

export default {
  components: {
    EntryList
  },

  computed: {
    pageNum: {
      get () {
        let num = this.$route.params.num
        if (num === undefined) {
          num = 1
        }
        return parseInt(num)
      },
      set (val) {
        if (val !== this.pageNum) {
          this.$router.push(`/page/${val}/`)
        }
      }
    }
  },

  async asyncData ({ route, params, error, redirect }) {
    let { num: pageNum } = params
    if (pageNum === undefined || pageNum === '0') {
      // unrecognized page number, or from index "/"
      pageNum = 1
    } else {
      // from /page/:num/
      pageNum = parseInt(pageNum)
    }
    if (pageNum === 1 && route.path !== '/') {
      // redirect "/page/1/" to "/"
      redirect('/')
    }

    let entries = []
    let hasOlder = false
    let hasNewer = false
    if (pageNum >= 1) {
      try {
        let { data } = await blog.get('/posts', {
          params: { start: (pageNum - 1) * config.entriesPerPage, count: config.entriesPerPage }
        })
        entries = data
      } catch (e) {
      }
      if (entries.length > 0) {
        if (pageNum > 1) {
          hasNewer = true
        }
        try {
          // try to fetch the next page, if succeeded, set "hasOlder" to true
          let { data } = await blog.get('/posts', {
            params: {
              start: (pageNum) * config.entriesPerPage,
              count: 1,
              fields: ''
            }
          })
          if (data && data.length > 0) {
            hasOlder = true
          }
        } catch (e) {
        }
      }
    }
    return {
      entries: entries,
      hasOrder: hasOlder,
      hasNewer: hasNewer
    }
  },

  head () {
    let result = {}
    if (this.pageNum !== 1) {
      result.title = `Page ${this.pageNum} - ${this.$store.state.site.title}`
    }
    return result
  },

  validate ({ params }) {
    if (params.num !== undefined) {
      // accessed by "/page/:num/"
      return /^\d+$/.test(params.num)
    }
    // accessed by "/", always allow
    return true
  }
}
</script>
