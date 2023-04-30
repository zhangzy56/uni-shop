import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from '@/uni_modules/uview-ui'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

Vue.use(uView)

uni.$u.config.unit = 'rpx'

const app = new Vue({
  store,
  ...App
})

// 引入请求封装，将app参数传递到配置中
require('./api/index.js')(app)

app.$mount()
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
