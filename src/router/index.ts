import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CashierTransaction from '../views/CashierTransaction.vue';
import Expenses from '../views/expenses/Expenses.vue';
import AddExpenses from '../views/expenses/AddExpenses.vue';
import ManagementUser from '../views/ManagementUser.vue';
import Form1 from '../views/Form1.vue';
import CashBank from '../views/CashBank.vue';
import Login from '../views/Login.vue';
import logout from '../views/Logout.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/CashierTransaction',
    name: 'CashierTransaction',
    component: CashierTransaction
  },
  {
    path: '/ManagementUser',
    name: 'ManagementUser',
    component: ManagementUser
  },
  {
    path: '/Expenses',
    name: 'expenses',
    component: Expenses
  },
  {
    path: '/addExpenses',
    name: 'addexpenses',
    component: AddExpenses
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresVisitor: true,
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout,
  },
  {
    path: '/form1',
    name: 'form1',
    component: Form1,
  },
  {
    path: '/cashbank',
    name: 'cashbank',
    component: CashBank,
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.logIn) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.logIn) {
      next({
        name: 'home'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
