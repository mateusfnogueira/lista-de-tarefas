import Vue from 'vue'
import Vuex from 'vuex'

import tarefas from './modules/tarefas'
import parametro from './modules/parametro'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tarefas,
    parametro
  }
})
