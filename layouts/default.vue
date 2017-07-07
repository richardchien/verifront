<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div id="side" class="col-3">
          <Side/>
        </div>
        <div id="main" class="col-7">
          <nuxt/>
          <PageFooter/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
import Side from '~components/Side.vue'
import PageFooter from '~components/PageFooter.vue'

export default {
  components: {
    Side,
    PageFooter
  },
  computed: {
    site () {
      return this.$store.state.site
    }
  },
  head () {
    return {
      htmlAttrs: {
        lang: this.site.language
      },
      title: this.site.title,
      meta: [
        { hid: 'description', name: 'description', content: `${this.site.title} (Blog of ${this.site.author})` }
      ]
    }
  }
}
</script>
