<template>
  <div class="GeneralComTwo">
    <!-- 标题 -->
    <general-title :goto="{ name: 'GeneralComOneChild', list: boyMustLooks }">
      {{ boyMustLooks.title }}
    </general-title>

    <van-card :desc="topBook.shortIntro">
      <template #title>
        <h1>{{ topBook.title }}</h1>
      </template>
      <template #thumb>
        <img
          src="../assets/images/bookvip.png"
          alt=""
          class="vip"
          v-if="topBook.allowMonthly"
        />
        <img
          src="../assets/images/已完结.png"
          alt=""
          class="finish"
          v-if="!topBook.isSerial"
        />
        <img :src="topBook.cover | cover" alt="" class="book" v-if="topBook.cover"/>
      </template>

      <template #price> {{ topBook.author }} </template>

      <template #num>
        <span>{{ topBook.majorCate }}</span>
        <span
          ><span style="font-weight: 700">{{
            topBook.wordCount | wordCounts
          }}</span
          >万字</span
        >
      </template>
    </van-card>

    <!-- 底部随机四本书 -->
    <div class="Ranbook">
      <div class="RanbookChild" v-for="(item, index) in bookList" :key="index">
        <div class="RanbookImg">
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
          <img :src="item.cover | cover" class="book" />
        </div>

        <div class="RanbookMsg">
          <h1>{{ item.title }}</h1>
          <span class="tag">{{ item.minorCate }}</span>
          <h2>
            <span>{{ item.retentionRatio }}%</span>留存
          </h2>
        </div>
      </div>
      <!-- <div class="borderBtom"></div> -->
      <div class="van-hairline--bottom borderBtom"></div>
    </div>
  </div>
</template>

<script>
import GeneralTitle from "./GeneralTitle";
export default {
  props: ["boyMustLooks"],
  components: {
    GeneralTitle,
  },
  data() {
    return {
      topBook: "",
      bookList: [],
    };
  },
  filters: {
    wordCounts(val) {
      return parseInt(val / 10000);
    },
    cover(val) {
      if (val.startsWith("//")) {
        return val;
      } else {
        return "http://statics.zhuishushenqi.com" + val;
      }
    },
  },
  watch: {
    boyMustLooks(){
       let books = [];
      books = this.boyMustLooks.books
        .slice(0, 5)
        .sort(() => Math.random() - 0.5);
      this.topBook = books[0];
      this.bookList = books.slice(1);
    }
   
  },
  computed: {
   
  },
};
</script>

<style lang="less">
.GeneralComTwo {
  background: white;
  .van-card__thumb,
  .RanbookImg {
    position: relative;
    height: @ImgHeight;
    width: @ImgWidth;
    .book {
      height: @ImgHeight;
      width: @ImgWidth;
      border-radius: 3px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
      position: relative;
    }
    img {
      border-radius: 0px;
    }
    &:after {
      content: "";
      .Imgbg();
    }
  }

  .van-card {
    background-color: white;
    padding-top: 0;
    padding-bottom: 5px;
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
        padding: 3px 3px;
        font-size: 12px;
        border-radius: 3px;
        border: 1px solid #ccc;
        color: #858383;
        &:last-child {
          margin-left: 5px;
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

  .Ranbook {
    // 底部线条
    .borderBtom {
      padding-top: 10px;
      width: 100%;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 16px 0px;
    box-sizing: border-box;
    // 底部四本书
    .RanbookChild {
      padding: 10px 0;
      flex-basis: 49%;
      display: flex;
      &:nth-of-type(2n) {
        padding-left: 10px;
        box-sizing: border-box;
      }
      //书本图片
      .RanbookImg {
        .book {
          height: @ImgHeight;
          width: @ImgWidth;
          border-radius: 3px;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
          position: relative;
        }
      }

      //书本信息
      .RanbookMsg {
        position: relative;
        margin-left: 8px;
        flex: 1;
        h1 {
          font-size: 14px;
          font-weight: 600;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: inherit;
          line-height: 16px;
        }
        .tag {
          margin: 20px 0;
          display: inline-block;
          padding: 3px 3px;
          border-radius: 3px;
          border: 0.5px solid #ccc;
          color: #858383;
        }
        h2 {
          position: absolute;
          bottom: 0;
          color: #858383;
          color: #da3d3f;
          span {
            display: inline-block;
            font-weight: 700;
            transform: scaleY(1.3);
            vertical-align: text-top;
          }
        }
      }
    }
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
</style>