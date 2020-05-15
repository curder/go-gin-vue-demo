const userRouters = [
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */'../../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'../../views/Login.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: "profile" */'../../views/Profile.vue'),
  },
];

export default userRouters;
