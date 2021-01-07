<template>
  <div class="store-recommed">
    <general-title :goto="{ name: 'GeneralComOneChild', list: highWords }"
      >高分神作
    </general-title>

    <van-grid :border="false" >
      <template v-for="(item, index) in BookList">
        <van-grid-item :key="index" :to="{name:'BookInfo',query:{id:item._id}}">
          <template #icon>
            <img
              src="../../assets/images/bookvip.png"
              class="vip"
              v-if="item.allowMonthly"
            />
            <img
              src="../../assets/images/已完结.png"
              class="finish"
              v-if="!item.isSerial"
            />
            <van-image :src="item.cover" />
          </template>
          <template #text>
            <p class="title">{{ item.title }}</p>
            <p class="rating">
             <span>{{ item.retentionRatio }}%</span>留存
              </p>
          </template>
        </van-grid-item>
      </template>
    </van-grid>
  </div>
</template>

<script>
import GeneralTitle from "../../views/GeneralTitle";
export default {
  props: ["highWords"],
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
      this.BookList = this.highWords.books
        .slice(0, 8)
    }, 1000);
  },
};
</script>

<style lang="less">
.store-recommed {
  background: white;
  .van-grid {
    padding: 0 8px;

    .van-grid-item__content--center {
      justify-content: flex-start;
      .title {
        padding: 10px 0 0px 0;
        max-height: 30px;
        min-height: 30px;
        font-weight: 500;
        display: block;
        width: 100%;
        font-size: 13px;
        display: -webkit-box;
        line-height: 16px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .rating {
        color: red;
        text-align: left;
        display: block;
        width: 100%;
        font-weight: 600;
        padding-top: 7px;
        span{
          display: inline-block;
          transform: scaleY(1.2);
        }
      }
    }
    .van-grid-item__icon-wrapper {
      position: relative;
      .vip {
        width: 28px;
        position: absolute;
        left: 0px;
        top: 4px;
        z-index: 1;
      }
      .finish {
        width: 30px;
        height: 19px;
        position: absolute;
        right: 0px;
        top: 2px;
        z-index: 10;
      }
      .van-image {
        position: relative;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        &:after {
          content: "";
          position: absolute;
          left: 0px;
          top: 0;
          z-index: 9;
          height: 100%;
          width: 100%;
          border-radius: 3px 0 0 3px;
          background: linear-gradient(
            to right,
            rgba(250, 250, 250, 0.4) 1%,
            rgba(0, 0, 0, 0.1) 2%,
            rgba(250, 250, 250, 0.4) 4%,
            rgba(0, 0, 0, 0.1) 7%
          );
        }

        img {
          border-radius: 3px;
          height: @ImgHeight;
        }
      }
    }
  }
}
</style>