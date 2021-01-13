<template>
  <div class="RankingCard">
    <van-card
      :desc="item.shortIntro"
      class="van-skeleton"
      @click="ccc(item._id)"
    >
      <template #title>
        <h1>{{ item.title }}</h1>
      </template>
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
        <img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="" class="book" />
      </template>

      <template #bottom>
        <div class="auther">
          <van-icon name="manager" />{{ item.author }}
        </div>
        <div class="tag">
          <div>{{ item.minorCate }}</div>
          <div>{{ item.latelyFollower | latelyFollower }}</div>
        </div>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  methods: {
    ccc(id) {
      this.$router.push({ name: "BookInfo", params: { id: id } });
      // console.log(id);
    },
  },
  filters:{
    latelyFollower(val){
      return val>10000?parseFloat(val/10000).toFixed(1)+"万人气":val+"人气"
    }
  }
};
</script>

<style lang='less'>
.RankingCard {
    margin: 12px 0;
  .van-card {
    background-color: white;
    padding: 0;
    .van-card__thumb {
      position: relative;
      height: 90px;
        width: 65px;
      img {
        border-radius: 0;
      }
      .book {
        height: 90px;
        width: 65px;
        border-radius: 3px;
        // box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
        // position: relative;
      }
      // &:after {
      //   content: "";
      //   .Imgbg();
      // }
      .vip {
        width: 24px !important;
        position: absolute;
        left: 0px;
        top: 4px;
        z-index: 1;
      }
      .finish {
        // width: 30px;
        height: 17px !important;
        position: absolute !important;
        right: 0px;
        top: 2px;
        z-index: 10;
      }
    }
    .van-ellipsis {
      margin-top: 5px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: inherit;
      line-height: 16px;
      max-height: 32px;
    }
    .van-card__bottom {
      display: flex;
      align-items: center;
      height: 25px;
      line-height: 15px;
      width: 100%;
      .auther{
        color: #777;
        .van-icon-manager{
          margin-right: 5px;
        }
      }
      .tag {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 1;
        > div {
          padding: 2px 5px;
          border-radius: 20px;
          color: #858383;
          font-size: 12px;
          &:first-child {
            color: #777;
            background: #efeff4;
            zoom: 0.7;
            margin-right: 10px;
          }
          &:last-child {
            background: rgba(235, 5, 5, 0.1);
            color: #eb0505;
            zoom: 0.7;
          }
        }
      }
      .auther {
        zoom: 0.9;
      }
      .van-card__num {
        // display: flex;
        // justify-items: flex-start;
        // align-items: flex-end;
        flex: 1;
        > div {
          padding: 2px 5px;
          border-radius: 20px;
          color: #858383;
          float: right;
          &:last-child {
            color: #777;
            background: #efeff4;
            transform: scale(0.7) translateX(62%);
          }
          &:first-child {
            background: rgba(235, 5, 5, 0.1);
            color: #eb0505;
            transform: scale(0.7) translateX(18%);
          }
        }
      }

      .van-card__price,
      .van-card__desc {
        color: #858383;
      }
    }

    .van-card__desc {
      margin-top: 12px;
    }

    .van-card__header {
      width: 100%;
      .van-card__content {
        h1 {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>