<template>
  <div class="text-center">
    <p>The page is not found.</p>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: `Page Not Found - ${this.$store.state.site.title}`
    }
  },
  layout: 'default'
}
</script>
