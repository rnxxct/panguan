// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
/*引入elementui*/
import 'element-ui/lib/theme-chalk/index.css'
import Axios from  'axios'
import store from './store'
import echarts from 'echarts'
import Print from 'vue-print-nb'/*引入打印的模块*/
import htmlToPdf from '@/utils/htmlToPdf'
Vue.use(htmlToPdf)
Vue.prototype.$echarts=echarts
Vue.use(Print)
Vue.config.productionTip = false
Vue.use(ElementUI)
Axios.defaults.baseURL = "http://cnn.jouletek.com:8081/panguan/"
Axios.defaults.withCredentials = true;
/*相同的session*/
Vue.prototype.$http = Axios
Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
