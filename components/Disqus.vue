<template>
  <div id="disqus_thread">
  </div>
</template>

<script>
export default {
  props: [
    'shortName', 'url', 'uniqueKey'
  ],
  mounted () {
    /* eslint-disable */
    let shortName = this.shortName;
    let url = this.url;
    let uniqueKey = this.uniqueKey;
    var disqus_config = function () {
      this.page.url = `${url}`;
      this.page.identifier = `${uniqueKey}`;
    };
    (function () { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = `//${shortName}.disqus.com/embed.js`;
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
    /* eslint-enable */
  }
}
</script>
