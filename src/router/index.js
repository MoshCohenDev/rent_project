import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginPage'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/new-contract',
    name: 'NewContract',
    component: () => import('../views/NewContract'),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
