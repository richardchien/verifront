<template>
  <ul id="nav">
    <NavigationItem v-for="item in navItems" :key="item.path" :path="item.path" :text="item.text" />
  </ul>
</template>

<script>
import NavigationItem from '~components/NavigationItem.vue'
import config from '~assets/js/config.js'

export default {
  components: {
    NavigationItem
  },
  data () {
    return {
      navItems: config.navItems
    }
  }
}
</script>
