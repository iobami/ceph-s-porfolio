import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Upload from './views/Questions-Upload.vue';
import NewQuestion from './views/Create-Questions.vue';
import PageNotFound from './views/Page-Not-Found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta: {
            breadcrumb: 'Dashboard',
          },
        },
        {
          path: '/file-upload',
          name: 'upload',
          component: Upload,
          meta: {
            breadcrumb: 'Upload Questions',
          },
        },
        {
          path: '/create-question',
          name: 'create-question',
          component: NewQuestion,
          meta: {
            breadcrumb: 'Create Questions',
          },
        },
      ],
    },
    { path: '*', component: PageNotFound },
  ],
});
