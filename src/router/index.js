import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import userRouters from './modules/user';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  ...userRouters,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  if (to.meta.auth) { // 验证是否需要登录
    // 判断当前用户是否登录
    if (store.state.userModule.token) {
      next();
    } else { // 跳转到登录
      router.push({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
