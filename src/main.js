import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
// scss style
import './assets/sass/index.scss';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Install BoostrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
