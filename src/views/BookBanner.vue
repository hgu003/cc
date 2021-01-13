<template>
  <div class="book-banner">
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      lazy-render
      :autoplay="3000"
      indicator-color="rgba(0,0,0,0.5)"
      @change="onChange"
    >
      <van-swipe-item v-for="(img, index) in imgs" :key="index" @click="pushInfo(img)">
        <van-image width="100%" :src="img.img" fit="contain" radius="10px">
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
  data() {
    return {
      // bannerList: [
      //   "https://plf-new.zhuishushenqi.com/management/images/20201218/12ddcc817cdf49f787959bb53e21b584.png",
      //   "https://plf-new.zhuishushenqi.com/management/images/20201218/574d9d74adae46a7a75a3897414cf365.png",
      // ],
    };
  },
  methods: {
    onChange(index) {
      this.$store.commit("changenavbg", this.imgs[index].navBgColor);
    // console.log(this.imgs);

    },
    pushInfo(img){
      if(this.$route.path=="/NewBook")return;
      let id=img.link.match(/\d{1}\w+/)[0];
      // console.log(id);
      // console.log(img.link);
      this.$router.push({ name: "BookInfo", params: { id: id } });
    }
  },
  activated(){
    if(this.imgs[0]){
      this.onChange(0);
    }
  },
  watch:{
    imgs(){
        //进来的时候获取背景色
      this.onChange(0);
    }
  },
  // mounted(){
  //   console.log(this.imgs);
    
  //   this.onChange('0');
  // }
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