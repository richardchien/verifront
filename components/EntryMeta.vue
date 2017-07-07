<template>
  <div class="meta" v-if="entry.created || entry.categories || entry.tags">
    <span class="created" v-if="entry.created">
      <span class="key">Created</span>:
      <span class="value">{{ entry.created.split(' ')[0] }}</span>
    </span>
    <span class="updated" v-if="entry.updated && entry.updated !== entry.created">
      <br>
      <span class="key">Updated</span>:
      <span class="value">{{ entry.updated.split(' ')[0] }}</span>
    </span>
    <span class="categories" v-if="entry.categories && entry.categories.length > 0">
      <br>
      <span class="key">Categories</span>:
      <span class="value">
        <template v-for="(category, index) in entry.categories">
          <span v-if="index > 0">, </span>
          <router-link :to="`/category/${category}/`">{{ category }}</router-link>
        </template>
      </span>
    </span>
    <span class="tags" v-if="entry.tags && entry.tags.length > 0">
      <br>
      <span class="key">Tags</span>:
      <span class="value">
        <template v-for="(tag, index) in entry.tags">
          <span v-if="index > 0">, </span>
          <router-link :to="`/tag/${tag}/`">{{ tag }}</router-link>
        </template>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  props: ['entry']
}
</script>
