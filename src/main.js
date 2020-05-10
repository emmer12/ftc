import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import {routes} from './routes'


// import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
