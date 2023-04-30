// 此vm参数为页面的实例, 可以通过它引用vuex中的变量
module.exports = vm => {
  // 初始化请求配置
  uni.$u.http.setConfig(config => {
    const tempConfig = {
      ...config,
      baseURL: 'https://www.example.com',
      header: {
        ...config.header,
        custom: {} // 全局自定义参数默认值
      }
    }

    // config 为默认全局配置
    return tempConfig
  })

  // 请求拦截
  uni.$u.http.interceptors.request.use(
    config => {
      // 初始化请求拦截器时, 会执行此方法, 此时data为undefined, 赋予默认 {}
      config.data = config.data || {}

      const { token } = vm.$store.state.user

      config.header.Authorization = `Bearer ${token}`

      return config
    },
    config => {
      return Promise.reject(config)
    }
  )

  // 响应拦截
  uni.$u.http.interceptors.response.use(
    response => {
      const { data } = response

      // 自定义参数
      const custom = response.config?.custom

      // 服务端返回的状态码不等于200
      if (data.code !== 200) {
        // 如果没有显式定义 custom 的 toast 参数为 false 的话, 默认对报错进行 toast 弹出提示
        if (custom.toast !== false) uni.$u.toast(data.message)

        // token过期, 直接退出登录
        // if (data.code == 401) forceLogout()

        // catch 默认为 false -> 默认不用写 .catch

        // 如果需要catch返回, 则进行reject
        if (custom?.catch) {
          return Promise.reject(data)
        } else {
          // 否则返回一个pending中的promise, 请求不会进入 .catch 中
          return new Promise(() => {})
        }
      }

      return data.data === undefined ? {} : data.data
    },
    // 对响应错误做点什么 ( statusCode !== 200 )
    response => {
      return Promise.reject(response)
    }
  )
}
