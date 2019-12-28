import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CashierTransaction from '../views/CashierTransaction.vue';
import Expenses from '../views/expenses/Expenses.vue';
import AddExpenses from '../views/expenses/AddExpenses.vue';
import ManagementUser from '../views/ManagementUser.vue';
import Contacts from '../views/contacts/Contacts.vue';
import AddContacts from '../views/contacts/AddContacts.vue';
import Coopra from '../views/sales/Coopra.vue';
import AddCoopraSale from '../views/sales/AddCoopraSale.vue';
import AddCoopraContract from '../views/sales/AddCoopraContract.vue';
import Goods from '../views/sales/Goods.vue';
import AddGoodsSale from '../views/sales/AddGoodsSale.vue';
import PurchasesCoopra from '../views/purchases/PurchasesCoopra.vue';
import AddCoopraPurchases from '../views/purchases/AddCoopraPurchases.vue';
import AddPurchasesContact from '../views/purchases/AddPurchasesContact.vue';
import PurchasesGoods from '../views/purchases/PurchasesGoods.vue';
import AddPurchasesGoods from '../views/purchases/AddPurchasesGoods.vue';
import CashBank from '../views/CashBank.vue';
import CashBankPayMoney from '../views/CashBankPayMoney.vue';
import Login from '../views/Login.vue';
import logout from '../views/Logout.vue';
import menuAssets from '../views/assets/menuAssets.vue';
import store from '@/store';
import Form1 from '../views/Form1.vue';

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
    path: '/Contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/AddContacts',
    name: 'AddContacts',
    component: AddContacts
  },
  {
    path: '/sales-coopra',
    name: 'sales-coopra',
    component: Coopra
  },
  {
    path: '/AddCoopraSale',
    name: 'addcooprasale',
    component: AddCoopraSale
  },
  {
    path: '/AddCoopraContract',
    name: 'addcoopracontract',
    component: AddCoopraContract
  },
  {
    path: '/sales-goods',
    name: 'sales-goods',
    component: Goods
  },
  {
    path: '/AddGoodsSale',
    name: 'addgoodssale',
    component: AddGoodsSale
  },
  {
    path: '/purchases-coopra',
    name: 'purchases-coopra',
    component: PurchasesCoopra
  },
  {
    path: '/AddCoopraPurchases',
    name: 'addcooprapurchases',
    component: AddCoopraPurchases
  },
  {
    path: '/AddPurchasesContact',
    name: 'addPurchasescontact',
    component: AddPurchasesContact
  },
  {
    path: '/purchases-goods',
    name: 'purchases-goods',
    component: PurchasesGoods
  },
  {
    path: '/AddPurchasesGoods',
    name: 'addpurchasesgoods',
    component: AddPurchasesGoods
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
    path: '/cashbank',
    name: 'cashbank',
    component: CashBank,
  },
  {
    path: '/cashbankpaymoney',
    name: 'cashbankpaymoney',
    component: CashBankPayMoney,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path:'/Assets',
    name:'Assets',
    component:menuAssets,
  }
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
