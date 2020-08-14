import Vue from 'vue';
import Notifications from 'vue-notification';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';
import 'popper.js/dist/popper.min';
import 'jquery/src/jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify';
// import loader from './assets/images/loader.gif';

Vue.config.productionTip = false;
Vue.mixin(mixins);
Vue.use(Notifications);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '',
  attempt: 1,
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
