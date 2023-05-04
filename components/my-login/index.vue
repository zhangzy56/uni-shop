<template>
  <view class="container">
    <view class="btn-wrap">
      <u-button
        type="primary"
        text="一键登录"
        :customStyle="{ width: '240rpx' }"
        open-type="getPhoneNumber"
        @getphonenumber="getUserProfile"
      ></u-button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'my-login',
  data() {
    return {}
  },
  methods: {
    getUserProfile(params) {
      console.log('params', params)
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  .btn-wrap {
    width: 100vw;
    display: flex;
    justify-content: center;
    padding-top: 60rpx;
  }
}
</style>
