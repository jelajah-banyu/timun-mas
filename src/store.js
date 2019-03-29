import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import placeList from './store/place-list'
import placeDetail from './store/place-detail'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    placeList: placeList,
    placeDetail: placeDetail,
  }
})
