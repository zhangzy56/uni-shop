import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from '@/uni_modules/uview-ui'
import store from './store'

import { router, RouterMount } from './router'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

Vue.use(uView)
Vue.use(router)

uni.$u.config.unit = 'rpx'

const app = new Vue({
  store,
  ...App
})

// 引入请求封装，将app参数传递到配置中
require('./api/index.js')(app)

// v1.3.5起 H5端 你应该去除原有的app.$mount(); 使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount() //为了兼容小程序及app端必须这样写才有效果
// #endif

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)

  return {
    app
  }
}
// #endif
