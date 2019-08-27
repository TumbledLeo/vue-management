// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* import { Button, Select } from 'element-ui'
Vue.use(Button)
Vue.use(Select) */

Vue.use(ElementUI)
Vue.config.productionTip = false

axios.create({
  // 创建实例时设置配置的默认值
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
})

Vue.prototype.$http = axios
Vue.config.productionTip = false // 阻止生产信息

axios.defaults.withCredentials = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
