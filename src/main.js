import Vue from 'vue'
import App from './App'
import moment from 'moment';
import VueMomentJS from 'vue-moment';
import router from './router';
import store from './store';
import VueLodash from 'vue-lodash';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueMomentJS, moment);

new Vue({
  vuetify,
  router,
  store,
  VueLodash,
  render: h => h(App)
}).$mount('#app')
