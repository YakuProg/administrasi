import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Form1 from '../views/Form1.vue';
// import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login,
  // },
  {
    path: '/form1',
    name: 'home',
    component: Form1,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
