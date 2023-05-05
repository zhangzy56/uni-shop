import { RouterMount, createRouter } from 'uni-simple-router'

// console.log('process.env', process.env)

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM, // eg: mp-weixin
  applet: {
    animationDuration: 0 // 默认 300ms
  },
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
  next()
})

// 全局路由后置守卫
router.afterEach((to, from) => {
  console.log('跳转结束')
})

export { router, RouterMount }
