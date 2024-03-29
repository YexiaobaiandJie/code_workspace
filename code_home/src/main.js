// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Element,{ size:'small',zIndex:3000})
/* eslint-disable no-new */
new Vue({
  el: '#app',
 // render:h => h(APP),
  router,
  components: { App },
  template: '<App/>'
})
