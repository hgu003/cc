<template>
  <div class="GeneralComThree">
    <general-title :goto="{ name: 'GeneralComOneChild', list: suspense }">
      {{ suspense.title }}
    </general-title>

    <van-card
      :desc="item.shortIntro"
      v-for="(item, index) in BookList"
      :key="index"
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
        <img :src="item.cover" alt="" class="book" />
      </template>

      <template #price> {{ item.author }} </template>

      <template #num>
        <span>{{ item.majorCate }}</span>
        <span class="retained">
          <span >{{
            item.retentionRatio
          }}%</span>留存
        </span>
        
          
      </template>
    </van-card>

    <div class="border-bto"></div>
  </div>
</template>

<script>
import GeneralTitle from "./GeneralTitle";

export default {
  props: ["suspense"],
  components: {
    GeneralTitle,
  },
  data() {
    return {
      BookList: [],
    };
  },
  created() {
    setTimeout(() => {
      this.BookList = this.suspense.books
        .slice(0, 3)
        .sort(() => Math.random() - 0.5);
      // console.log(this.BookList);
    }, 1000);
  },
  filters: {
    wordCounts(val) {
      return parseInt(val / 10000);
    },
  },
};
</script>

<style lang="less">
.GeneralComThree {
  background-color: white;
  .van-card {
    background-color: white;
    padding-top: 0;
    padding-bottom: 5px;
    .van-card__thumb {
      height: 100px;
      width: @ImgWidth;
      position: relative;
      &:after {
        content: "";
        .Imgbg();
      }
      img {
        border-radius: 0;
      }
      .book {
        height: 100px;
        width: @ImgWidth;
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
    .van-card__num {
      > span {
        padding: 1px 3px;
        font-size: 12px;
        border-radius: 3px;
        border: 1px solid #ccc;
        color: #858383;
        zoom: .9;
        &:last-child {
          margin-left: 5px;
          color: #da3d3f;
          border-color: #da3d3f;
          >span{
            display: inline-block;
            font-weight: 700;
            transform: scaleY(1.1);
          }
        }
      }
    }
    .van-card__price,
    .van-card__desc {
      color: #858383;
    }
    .van-card__desc {
      margin-top: 18px;
    }
    .van-card__content {
      h1 {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .border-bto {
    width: 85%;
    padding: 0 16px;
    position: relative;
    left: 4%;
    border-bottom: 0.5px solid #f0ecec;
    margin-top: 15px;
  }
}
</style>