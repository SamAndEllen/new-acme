import Vue from 'vue';
import Vuex from 'vuex';

import types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: 'acme',
  state: {
    requireBackNav: false,
    courseImages: [
      {
          image: 'https://thenypost.files.wordpress.com/2019/03/tales-from-the-trenches.jpg?quality=90&strip=all&w=1236&h=820&crop=1'
      },
      {
          image: 'https://echo360.com/wp-content/uploads/2018/08/iStock_73362333_XXXLARGE.jpg'
      },
      {
          image: 'https://www.thoughtco.com/thmb/BovxmeLvYa1CJDMuCT-mhXUdIto=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/149629618-56a18eeb3df78cf7726c00d7.jpg'
      },
      {
          image: 'https://ak4.picdn.net/shutterstock/videos/1835644/thumb/1.jpg'
      },
      {
          image: 'http://www.cfodailynews.com/wp-content/uploads/2018/12/meeting-2-685x457.jpg'
      }
    ]
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
      if (isRequire) commit('REQUIRE_BACK_NAV')
      else commit('NOT_REQUIRE_BACK_NAV')
    }
  },
  getters: {
    requireBackNav: state => state.requireBackNav,
    courseImages: state => state.courseImages,
  }
})