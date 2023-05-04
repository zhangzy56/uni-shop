<template>
  <view class="home-box">
    <u-no-network @retry="init"></u-no-network>

    <home-head :scrollTop="scrollTop" />
  </view>
</template>

<script>
import HomeHead from './index-components/home-head.vue'

export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  components: {
    HomeHead
  },
  onLoad() {},
  onPageScroll(e) {
    this.scrollTop = e.scrollTop
  },
  methods: {
    init() {
      console.log(1111)
    }
  }
}
</script>

<style></style>
