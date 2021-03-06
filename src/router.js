import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Overview from './views/Overview-v1.vue';
import Info from './views/My-Info.vue';
import PageNotFound from './views/Page-Not-Found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/overview' },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/overview',
          name: 'overview',
          component: Overview,
          meta: {
            breadcrumb: 'Overview',
          },
        },
        {
          path: '/info',
          name: 'info',
          component: Info,
          meta: {
            breadcrumb: 'Info',
          },
        },
      ],
    },
    { path: '*', component: PageNotFound },
  ],
});
