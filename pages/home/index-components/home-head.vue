<template>
  <!-- 首页标题栏, 轮播图整合 -->
  <view class="title-swiper-wrap">
    <!-- 标题栏 -->
    <view class="navbar-box" :style="[navbarStyle]">
      <view class="navbar-bg" :style="[navBg]"></view>

      <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

      <view class="content" :style="[navbarContentStyle]">
        <view class="nav-title">
          <text :style="[navTitleStyle, navTitleColor]">{{ navTitle || '' }}</text>
        </view>

        <view class="search-icon">
          <u-icon name="search" color="#fff" size="52"></u-icon>
        </view>
      </view>
    </view>
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
      navTitleColor: {
        color: '#fff'
      }
    }
  },
  props: {
    navTitle: {
      type: String,
      default: '星品商城'
    },
    navTitleStyle: {
      type: Object,
      default: () => ({
        color: '#fff',
        fontSize: '38rpx'
      })
    }
  },
  computed: {
    // 整个导航栏的样式
    navbarStyle() {
      const style = {
        zIndex: this.$u.zIndex.navbar,
        background: 'none'
      }

      // Object.assign(style, this.background)

      return style
    },
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
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.title-swiper-wrap {
  height: 520rpx;
  position: relative;
  z-index: 100;
  background-color: gray;

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
      z-index: 980;
      width: 100%;
      height: 100%;
      background-color: #fff;
      box-shadow: 0px 4px 6px rgba(140, 140, 140, 0.32);
    }

    .status-bar {
      border: 1px solid green;
    }

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid red;

      .nav-title {
        padding: 14rpx 14rpx 14rpx 24rpx;
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
