import Vue from 'vue'
import App from './App.vue'
import '@/styles/global.less'
import router from './router'
import { showMessage } from './utils'
import "./mock"

import './eventBus'


Vue.prototype.$showMessage = showMessage;

Vue.config.productionTip = false
//自定义指令
import vLoading from '@/directives/loading'
import vLazy from '@/directives/lazy'
Vue.directive('loading',vLoading)
Vue.directive('lazy',vLazy)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//测试区

