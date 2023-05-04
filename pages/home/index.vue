<template>
  <view class="home-box">
    <u-no-network @retry="init"></u-no-network>

    <home-head />
  </view>
</template>

<script>
import HomeHead from './index-components/home-head.vue'

export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  components: {
    HomeHead
  },
  onLoad() {},
  methods: {
    init() {
      console.log(1111)
    }
  }
}
</script>

<style></style>
