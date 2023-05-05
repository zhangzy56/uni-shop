<template>
  <!-- 首页标题栏, 轮播图整合 -->
  <view class="title-swiper-wrap">
    <!-- 标题栏 -->
    <view class="navbar-box">
      <!-- 下面是两个 正常dom : 撑起父元素的高度 -->

      <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

      <view class="content" :style="[navbarContentStyle]">
        <view class="nav-title">
          <text :style="{ color: navTitleColor }">星品商城</text>
        </view>

        <view class="search-icon" @click="onSearchClick">
          <u-icon name="search" color="#fff" size="52"></u-icon>
        </view>
      </view>

      <!-- 父元素的背景色dom 透明度 0 -> 1 -->
      <view class="navbar-bg" :style="[navBg]"></view>
    </view>

    <!-- 轮播组件 -->
    <swiper
      class="screen-swiper square-dot"
      @change="onSwiperChange"
      style="height: 520rpx"
      :indicator-dots="true"
      :circular="true"
      :autoplay="true"
      interval="5000"
      duration="500"
    >
      <swiper-item v-for="(item, index) in list" :key="index" @tap="onSwiper(index)">
        <image :src="item.image" mode="aspectFill"></image>
      </swiper-item>
    </swiper>
  </view>

  <!-- 轮播组件 -->
</template>

<script>
// 获取系统状态栏的高度
const systemInfo = uni.getSystemInfoSync()

let menuButtonInfo = {}

// #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ
// 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
menuButtonInfo = uni.getMenuButtonBoundingClientRect()
// #endif

export default {
  data() {
    return {
      statusBarHeight: systemInfo.statusBarHeight,
      navBg: { opacity: 0 },
      navTitleColor: '#fff',
      swiperCur: 0
    }
  },
  props: {
    scrollTop: {
      type: [String, Number],
      default: 0
    },
    // 轮播图的数据,格式如：[ {image: 'xxxx', title: 'xxxx'}, ... ]，其中title字段可选
    list: {
      type: Array,
      default() {
        return [
          {
            image: '/static/images/home/swiper-1.jpg',
            title: 'xxxx'
          },
          {
            image: '/static/images/home/swiper-2.png',
            title: 'xxxx222'
          }
        ]
      }
    }
  },
  computed: {
    navbarHeight() {
      // #ifdef MP
      return ['devtools', 'ios'].includes(systemInfo.platform) ? 44 : 48
      // #endif

      // #ifdef APP-PLUS || H5
      return 44
      // #endif
    },
    // 导航栏内部盒子的样式
    navbarContentStyle() {
      const style = {
        height: this.navbarHeight + 'px'
      }

      // #ifdef MP
      const rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left
      style.marginRight = rightButtonWidth + 'px'
      // #endif

      return style
    }
  },
  watch: {
    scrollTop(newVal) {
      const top = newVal

      // 透明 -> 白色 背景
      this.navBg = {
        opacity: top > this.navbarHeight ? 1 : top * 0.01
      }

      this.navTitleColor = top > this.navbarHeight ? '#000' : '#fff'

      // #ifndef H5
      this.setStatusStyle(top > this.navbarHeight ? 'dark' : 'light')
      // #endif
    }
  },
  onLoad() {},
  methods: {
    onSearchClick() {
      console.log('this.$u.zIndex.navbar', 22222)
    },
    setStatusStyle(status) {
      if (status == 'light') {
        uni.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#000000',
          animation: {
            duration: 200,
            timingFunc: 'easeIn'
          }
        })

        // #ifdef APP-PLUS
        plus.navigator.setStatusBarStyle('light')
        // #endif
      } else {
        uni.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#ffffff',
          animation: {
            duration: 200,
            timingFunc: 'easeIn'
          }
        })

        // #ifdef APP-PLUS
        plus.navigator.setStatusBarStyle('dark')
        // #endif
      }
    },
    onSwiperChange(e) {
      this.swiperCur = e.detail.current
    },
    onSwiper(e) {
      // this.$tools.routerTo(this.list[e].path)
    }
  }
}
</script>

<style lang="scss" scoped>
.title-swiper-wrap {
  height: 520rpx;
  position: relative;
  z-index: 100;

  .navbar-box {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 991;

    .navbar-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      box-shadow: 0px 4px 6px rgba(140, 140, 140, 0.32);
      z-index: 500;
    }

    .status-bar {
      position: relative;
      z-index: 700;
    }

    .content {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 700;

      .nav-title {
        padding: 14rpx 14rpx 14rpx 24rpx;
        color: '#fff';
        font-size: 38rpx;
      }

      .search-icon {
        width: 66rpx;
        height: 66rpx;
        background: rgba(#000, 0.18);
        border-radius: 100%;
        margin-right: 15px;
        @include flex();
      }
    }
  }
}
</style>
