import Vue from 'vue'

// uni-app 内置了 Vuex
import Vuex from 'vuex'

import getters from './getters.js'

Vue.use(Vuex)

import user from './modules/user.js'

export default new Vuex.Store({
  modules: {
    user
  },
  getters
})
