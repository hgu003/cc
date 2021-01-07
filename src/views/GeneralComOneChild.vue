<template>
  <div class="GeneralComOneChild">
    <div class="header">
      <span @click="$router.back()">返回</span>
      <h3 align="center">{{ query.title }}</h3>
    </div>
    <van-card
      :desc="item.shortIntro"
      :title="item.title"
      v-for="(item, index) in query.books"
      :key="index"
      @click="$router.push({name:'BookInfo',query:{id:item._id}})"
    >
      <template #thumb>
        <img
          src="../assets/images/bookvip.png"
          alt=""
          class="vip"
          v-if="item.allowMonthly"
        />
        <img
          src="../assets/images/已完结.png"
          alt=""
          class="finish"
          v-if="!item.isSerial"
        />
        <img :src="item.cover" alt="" class="book" />
      </template>
      <template #bottom>
        <span>
          <i style="color: #b93321">
            {{ item.latelyFollower | latelyFollower }}</i
          >
          人气
        </span>
        <span>
          <i style="color: #b93321"> {{ item.retentionRatio }}%</i>
          读者留存
        </span>
        <span class="tag">{{ item.majorCate }}</span>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  props: ["query"],
  filters: {
    latelyFollower(val) {
      return (val / 10000).toFixed(1) + "万";
    },
  },
  activated() {
    this.$store.commit("toggleBottomNavShow", false);
  },
};
</script>

<style lang="less">
.GeneralComOneChild {
  .header {
    padding: 20px 15px 10px 15px;
    position: relative;
    h3 {
      font-weight: bold;
    }
    span {
      margin-left: 15px;
      position: absolute;
      left: 0;
    }
  }
  .van-card {
    background: white;
    .van-card__thumb {
      height: auto;
      width: 73.8px;
      margin-right: 10px;
      img {
        border-radius: 0;
      }
      &:after {
        content: "";
        .Imgbg();
      }
      .book {
        width: 73.8px;
        height: @ImgHeight;
        border-radius: 3px;
      }
      .vip {
        width: 28px !important;
        position: absolute;
        left: 0px;
        top: 4px;
        z-index: 1;
      }
      .finish {
        // width: 30px;
        height: 20px !important;
        position: absolute !important;
        right: 0px;
        top: 2px;
        z-index: 10;
      }
    }
    .van-ellipsis {
      margin-top: 15px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: inherit;
      line-height: 16px;
      max-height: 32px;
      color: #8a8a8a;
    }
    .van-card__title {
      font-size: 16px;
      font-weight: 600;
    }
    // .van-tag {
    //   margin-top: 5px;
    //   &:nth-of-type(1n + 2) {
    //     margin-left: 5px;
    //   }
    // }
    .van-card__content {
      border-bottom: rgb(240, 236, 236) 0.5px solid;
      .van-card__bottom {
        .tag {
          float: right;
          // padding: 1px 3px;
          font-size: 12px;
          border-radius: 3px;
          // border: 1px solid #ccc;
          color: #979696;
        }
      }
    }
  }
}
</style>