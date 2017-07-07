export default {
  makeLinksTargetBlank () {
    let elems = document.getElementsByTagName('a')
    for (var i = 0; i < elems.length; i++) {
      if (elems[i].href.indexOf(document.domain) < 0) {
        elems[i].target = '_blank'
      }
    }
  }
}
