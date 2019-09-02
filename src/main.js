import Vue from 'vue'
import App from './App'
import router from './router';
import Vuex from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  Vuex,
  render: h => h(App)
}).$mount('#app')
