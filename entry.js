import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/app.vue';
import routerconfig from "./config/routerconfig.js"
import './semantic/dist/semantic.min.css';
import './semantic/dist/semantic.min.js';
import './styles/main.less';

Vue.use(VueRouter);

const router = new VueRouter({
  //mode: 'history',
  routes: routerconfig,
})

const app = new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
})
