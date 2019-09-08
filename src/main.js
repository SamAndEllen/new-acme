import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store'
import VueLodash from 'vue-lodash';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  VueLodash,
  render: h => h(App)
}).$mount('#app')
