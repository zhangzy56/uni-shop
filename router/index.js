import { RouterMount, createRouter } from 'uni-simple-router'

// console.log('process.env', process.env)
// $lockStatus: https://www.hhyang.cn/src/router/api/routerInsatll.html#lockstatus-v-1-5-4

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM, // eg: mp-weixin
  applet: {
    animationDuration: 0 // 默认 300ms
  },
  // 每次跳转失败时都会触发此方法并传递失败原因
  routerErrorEach: ({ type, msg }) => {
    switch (type) {
      case 0: // 表示 next(false)
        router.$lockStatus = false
        break

      case 3: // 表示在获取页面栈的时候，页面栈不够level获取  APP退出应用
        // #ifdef APP-PLUS
        router.$lockStatus = false

        uni.showModal({
          title: '提示',
          content: '您确定要退出应用吗？',
          success: res => {
            if (res.confirm) plus.runtime.quit()
          }
        })
        // #endif
        break

      default:
        // do-nothing
        break
    }
  },
  // 设置 h5 输入非定义页面的url时 跳转到 404 页
  routes: [
    ...ROUTES,
    {
      path: '*',
      redirect: to => {
        return {
          name: '404'
        }
      }
    }
  ]
})

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  console.log('跳转开始')

  // 权限控制登录
  // if (to.meta && to.meta.auth && !store.getters.isLogin) {
  //   store.dispatch('showAuthModal')
  //   next(false)
  //   return
  // }

  next()
})

// 全局路由后置守卫
router.afterEach((to, from) => {
  console.log('跳转结束')
})

export { router, RouterMount }
