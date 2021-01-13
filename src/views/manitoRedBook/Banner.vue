<template>
  <div class="book-banner">
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      lazy-render
      :autoplay="3000"
      indicator-color="rgba(0,0,0,0.5)"
    >
      <van-swipe-item v-for="(img, index) in imgs" :key="index">
        <van-image width="100%" :src="img.img" fit="contain" radius="5px">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ["imgs"],
};
</script>

<style lang="less">
.book-banner {
  margin-top: 10px;
  min-height: 140px;
  .my-swipe {
    width: 95%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    // height: 200px;
    overflow: hidden;
    .van-swipe__indicator {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>