<template>
  <h1 id="logo">
    <nuxt-link :to="'/'">
      <img src="/logo.svg" alt="Logo">
      <span>{{ $store.state.site.title }}</span>
    </nuxt-link>
  </h1>
</template>
