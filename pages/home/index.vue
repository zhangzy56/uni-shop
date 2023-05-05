<template>
  <view class="home-box">
    <home-head :scrollTop="scrollTop" />
    <Banner />
  </view>
</template>

<script>
import HomeHead from './index-components/home-head.vue'
import Banner from './index-components/banner.vue'

export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  components: {
    HomeHead,
    Banner
  },
  onLoad() {
    console.log('ROUTES', ROUTES)

    console.log('this.$Router', this.$Router)
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop
  },
  onPullDownRefresh() {
    // this.getIndexData()
    uni.stopPullDownRefresh()
  },
  methods: {
  }
}
</script>

<style></style>
