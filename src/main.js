// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Button, Cell ,Row, Col,Swipe, SwipeItem ,Lazyload } from 'vant';
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(Button).use(Cell).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
