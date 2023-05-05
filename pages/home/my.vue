<template>
  <view class="content">
    <my-login />

    <u-button type="primary" text="测试跳转" :customStyle="{ width: '240rpx', marginTop: '20px' }" @click="test" />
  </view>
</template>

<script>
import MyLogin from '@/components/my-login/index.vue'

export default {
  data() {
    return {}
  },
  components: {
    MyLogin
  },
  onLoad() {},
  methods: {
    test() {
      // uni.navigateTo({
      //   url: 'pages/home/test'
      // })

      this.$Router.push({ path: '/pages/home/test' })
    }
  }
}
</script>

<style></style>
