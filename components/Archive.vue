<template>
  <div class="entry">
    <article>
      <h1>{{ type }}: {{ name }}</h1>

      <table class="table-clean" v-if="entries && entries.length > 0">
        <tbody>
          <tr :lang="entry.meta.language" v-for="entry in entries">
            <td style="font-size: 85%">{{ entry.created.split(' ')[0] }}</td>
            <td>
              <nuxt-link :to="entry.unique_key">{{ entry.title }}</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <p v-if="type.toLowerCase() === 'search'">No results.</p>
        <p v-else>There is nothing here.</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ['entries', 'type', 'name']
}
</script>
