import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
 

import App from './App.vue'
import router from './router'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);
Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
