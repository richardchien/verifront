import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { blog } from '~assets/js/api.js'

const store = () => new Vuex.Store({
  state: {
    site: {}
  },
  actions: {
    async nuxtServerInit ({ commit }) {
      let { data: site } = await blog.get('/site')
      commit('updateSiteInfo', site)
    }
  },
  mutations: {
    updateSiteInfo (state, site) {
      state.site = site
    }
  }
})

export default store
