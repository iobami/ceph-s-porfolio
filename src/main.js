import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'popper.js/dist/popper.min';
import 'jquery/src/jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
