<template>
  <!-- 轮播 -->
  <view class="mt-10">
    <swiper
      :style="{ minHeight: height + 'rpx', height: height + 'rpx' }"
      class="screen-swiper square-dot"
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
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  props: {
    // 轮播图的数据,格式如：[{image: 'xxxx', title: 'xxxx'}，{image: 'yyyy', title: 'yyyy'}]，其中title字段可选
    list: {
      type: Array,
      default() {
        return [
          {
            image: '/static/images/home/banner-1.png',
            title: 'xxxx'
          }
        ]
      }
    },
    // list的高度，单位rpx
    height: {
      type: [Number, String],
      default: 187
    }
  },
  computed: {},
  methods: {
    onSwiper(e) {
      // this.$tools.routerTo(this.list[e].path)
    }
  }
}
</script>

<style lang="scss" scoped></style>
