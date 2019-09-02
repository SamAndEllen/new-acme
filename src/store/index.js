import Vue from 'vue';
import Vuex from 'vuex';

import types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      requireBackNav: false
    },
    mutations: {
      [types.REQUIRE_BACK_NAV] (state) {
        state.requireBackNav = true
      },
      [types.NOT_REQUIRE_BACK_NAV] (state) {
        state.requireBackNav = false
      }
    },
    actions: {
      setRequireBackNav ({ commit }, isRequire) {
        if (isRequire) commit('requireBackNav')
        else commit('notRequireBackNav')
      }
    },
    getters: {
      requireBackNav: state => state.requireBackNav
    }
})