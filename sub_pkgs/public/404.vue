<template>
  <view class="page-404">
    <image class="empty-img" src="/static/images/empty_network.png" mode="aspectFill" />

    <view class="empty-text">404, 页面走丢了 ~</view>

    <view class="mt-100">
      <button class="empty-btn" @tap="$Router.pushTab('/pages/home/index')">去首页逛逛</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-404 {
  padding-top: 300rpx;
  @include flex();
  flex-direction: column;

  .empty-img {
    width: 540rpx;
    height: 290rpx;
  }

  .empty-text {
    font-size: 26rpx;
    color: #909399;
  }

  .empty-btn {
    width: 200rpx;
    height: 70rpx;
    font-size: 28rpx;
    @include flex();
    color: #fff;
    background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
    border-radius: 35rpx;

    &:after {
      border: none;
    }
  }
}
</style>
