<template>
  <div class="BookInfo" ref="BookInfo">
    <!-- 头部背景 -->
    <div
      class="BookInfo-bg"
      :style="{
        backgroundImage: `url(http://statics.zhuishushenqi.com${bookMsg.cover})`,
      }"
      v-if="bookMsg.cover"
    ></div>
    <!-- 顶部导航 -->
    <div
      class="BookInfo-header-nav"
      :style="{
        background: `rgba(255,255,255,${navbg})`,
        boxShadow: navbg >= 1 ? '0 0 8px 0 #ccc' : 'none',
      }"
    >
      <div class="left" @click="$router.back()">
        <van-icon name="arrow-left" size="25" color="#666" />
      </div>
      <div class="center">{{ bookMsg.title }}</div>
      <div class="right">
        <van-icon name="chat-o" size="25" color="#666" :dot="true" />
        <van-icon name="share-o" size="25" color="#666" />
      </div>
    </div>

    <!-- 书本信息 -->
    <div class="BookInfo-msg">
      <!-- 书本信息 -->
      <van-card>
        <template #thumb>
          <img
            src="../../assets/images/bookvip.png"
            class="vip"
            v-if="bookMsg.allowMonthly"
          />
          <img
            src="../../assets/images/已完结.png"
            class="finish"
            v-if="!bookMsg.isSerial"
          />
          <img
            :src="`http://statics.zhuishushenqi.com${bookMsg.cover}`"
            class="book"
            v-if="bookMsg.cover"
          />
        </template>
        <template #desc>
          <h1>{{ bookMsg.title }}</h1>
          <p>{{ bookMsg.author }}</p>
          <p>
            {{ bookMsg.safelevel }}书币/千字
            <span class="wordsnum">
              | {{ bookMsg.wordCount | wordcount }}万字</span
            >
          </p>
          <p>开通VIP,购书享8折优惠></p>
        </template>
      </van-card>

      <div class="BookInfo-peopel" ref="BookInfoPeopel">
        <!-- 星星数量 -->
        <div class="start">
          <span>{{ rating.score }}</span>
          <van-rate
            v-model="value"
            :size="13"
            color="#ffd21e"
            void-icon="star"
            void-color="#666"
            allow-half
            readonly
          />
          <div class="tip">{{ rating.tip }} <van-icon name="arrow" /></div>
        </div>

        <!-- 读者留存 -->
        <div class="retain">
          <p>{{ bookMsg.retentionRatio }}%</p>
          <p>读者留存</p>
        </div>
        <!-- 七日人气 -->
        <div class="sevenHits">
          <p>{{ bookMsg.latelyFollower | HitsNum }}万</p>
          <p>7日人气</p>
        </div>
        <!-- 累计人气 -->
        <div class="totalHits">
          <p>{{ bookMsg.totalFollower | HitsNum }}万</p>
          <p>累计人气</p>
        </div>
      </div>

      <!-- 简介 -->
      <div class="brief">
        <h1>简介</h1>
        <div class="tags">
          <span v-for="(tag, index) in bookMsg.tags" :key="index">{{
            tag
          }}</span>
        </div>
        <div class="article">
          <span :class="{ line: lineCamp }" @click="lineCamp = !lineCamp">
            {{ bookMsg.longIntro }}
          </span>
          <i class="iconfont icon-icon1" v-show="!lineCamp"></i>
        </div>
      </div>

      <!--  目录catalog  -->
      <div class="catalog" @click="pushCatalog">
        <span>目录</span>
        <van-icon name="arrow" />
        <span class="catalog-section">
          {{ bookMsg.lastChapter }}
        </span>
        <span class="updateTime">{{ updateTime }}</span>
      </div>
    </div>

    <div class="bg">
      <!-- 热门短评 -->
      <div class="shortReview">
        <div class="shortReview-header">
          <h1>热门短评</h1>
          <span>写短评</span>
        </div>
        <shortReview
          :shortReview="shortReview"
        ></shortReview>

        <div v-if="!shortReview" class="not">暂无短评</div>
        <div class="shortReview-footer">
          <button>查看全部短评</button>
        </div>
      </div>

      <!-- //书评 -->
      <div class="bookReview">
        <div class="bookReview-header">
          <h1>热门书评</h1>
          <span>写书评</span>
        </div>
        <bookReview
          v-for="(item, index) in bookReview"
          :key="index"
          :bookReview="item"
        ></bookReview>
        <!-- <div class="bookReview-con">
          <div class="user">
            <img
              src="http://statics.zhuishushenqi.com/avatar/3e/70/3e70e3ed6b9e6be50238e38e307b0e08"
              alt=""
            />
            <span class="username">今晚早点睡</span>
            <span class="level">lv.8</span>
          </div>
          <div class="start">
            <van-rate
              v-model="value"
              :size="12"
              color="#ffd21e"
              void-icon="star"
              void-color="#ccc"
              allow-half
              readonly
            />
            <span>非常喜欢</span>
          </div>
          <div class="details">
            <p>更新好慢哦</p>
          </div>
          <div class="particular">
            <p>
              刚才上厕所忘带纸了，听到这首歌，突然意识到，没什么，人生没有过不去的坎，不擦了，就这样怀着希望和自信走了出去，从来没有这么自信过
            </p>
          </div>
          <div class="Commentt">
            <div class="left">
              <span>五个月前</span>﹒
              <span>199阅读</span>
            </div>
            <div class="right">
              <span>
                <i class="iconfont icon-pinglun"></i>
                0
              </span>
              <span>
                <i class="iconfont icon-zan"></i>
                0
              </span>
            </div>
          </div>
        </div> -->
        <div class="bookReview-footer">
          <button>查看全部书评</button>
        </div>
      </div>

      <!-- 作者的其他作品 -->
      <div class="otherWorks">
        <h1>作者的其他作品</h1>
        <div class="AlsoThe-con">
          <otherWorks
            v-for="(item, index) in other"
            :key="index"
            :Alsothe="item"
          ></otherWorks>
        </div>
      </div>

      <!-- 本书追友还在读 -->
      <div class="AlsoThe">
        <h1>本书追友还在读</h1>
        <div class="AlsoThe-con">
          <AlsoThe
            v-for="(item, index) in AlsoTheRan"
            :key="index"
            :book="item"
          ></AlsoThe>
        </div>

        <div class="AlsoThe-footer" @click="RanBooks">
          <i class="iconfont icon-xunhuan"></i>
          换一换
        </div>
      </div>
      <!-- 底部版权信息 -->
      <div class="BookInfo-footer">
        <h1>图书信息</h1>
        <p>
          版权：本书数字版本由"第三方提供",并由其授权上海圆锯网络科技有限公司制作发行。若书中含有不良信息，请积极告知客服。
        </p>
      </div>
    </div>

    <div class="BookInfo-bottm-nav">
      <div>
        <span><i class="iconfont icon-weibiaoti29"></i>不追了</span>
      </div>
      <div class="start">开始阅读</div>
      <div>
        <span><i class="iconfont icon-xiazai"></i>下载</span>
      </div>
    </div>
  </div>
</template>

<script>
import shortReview from "./shortReview";
import bookReview from "./bookReview";
import otherWorks from "./otherWorks";
import AlsoThe from "./AlsoThe";
export default {
  props: ["id"],
  components: {
    shortReview, //短评
    bookReview, //书评
    otherWorks, //作者的其他作品
    AlsoThe, //本书追还在读
  },
  data() {
    return {
      bookMsg: [],
      rating: "",
      value: 3,
      lineCamp: false, //显示行数控制
      shortReview: "", //短评
      bookReview: [], //书评
      other: [], //作者的其他作品
      Alsothe: [], //本书追还在读
      AlsoTheRan: [], ////本书追还在读随机
      navbg: 0,
    };
  },
  activated() {
    //书本信息
    window.axios("http://api.kele8.cn/agent/http://api.zhuishushenqi.com/book/" + this.id).then((e) => {
      this.bookMsg = e.data;
      this.rating = e.data.rating;
      this.value = e.data.rating.score / 2;
      localStorage.setItem("currentBook", JSON.stringify(e.data));

      //作者的其他作品
      window
        .axios(
          `http://b01.zhuishushenqi.com/books/accurate-search-author?author=${this.bookMsg.author}&start=0&packageName=com.ushaqi.zhuishushenqi&userid=yk_c996bc45cee0a87d9c622`
        )
        .then((other) => {
          this.other = other.data.books;
        });
    });
    // var book = JSON.parse(localStorage.getItem("currentBook"));
    // this.bookMsg = book;
    // this.rating = book.rating;
    // this.value = book.rating.score / 2;

    //短评
    window
      .axios(
        `http://api.kele8.cn/agent/http://community.zhuishushenqi.com/forum/book/${this.id}/hot?block=short_review&limit=10`
      )
      .then((hotduan) => {
        if(!hotduan.data.posts)return;
        this.shortReview = hotduan.data.posts[0];
      });

    //书评
    window
      .axios(
        `http://api.kele8.cn/agent/http://community.zhuishushenqi.com/forum/book/${this.id}/hot?block=review&limit=10`
      )
      .then((review) => {
        this.bookReview = review.data.posts;
      });

    // 本书追友还在读
    this.axios(
      `http://b01.zhuishushenqi.com/book/${this.id}/recommend?packageName=com.ushaqi.zhuishushenqi`
    ).then((also) => {
      this.Alsothe = also.data.books;
      this.AlsoTheRan = this.Alsothe.slice(0, 4);
      // console.log(also.data.books);
    });
  },
  filters: {
    wordcount(val) {
      return parseInt(val / 10000);
    },
    HitsNum(val) {
      return (val / 10000).toFixed(1);
    },
  },
  methods: {
    RanBooks() {
      this.AlsoTheRan = this.Alsothe.sort(() => Math.random() - 0.5).slice(
        0,
        4
      );
    },
    //跳目录
    pushCatalog(){
      this.$router.push({name:'Catalog',params:{
        book:this.bookMsg,
      }})
    }
  },
  mounted() {
    //顶部导航的变色
    window.onscroll = () => {
      this.navbg = parseFloat(
        window.pageYOffset / (this.$refs.BookInfoPeopel.offsetTop / 1.5)
      );
    };
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  computed: {
    //评论更新时间
    updateTime() {
      if (!this.bookMsg.isSerial) {
        return "已完结";
      } else {
        let time = this.bookMsg.updated;
        var update = (+new Date() - +new Date(time)) / 1000 / 60;
        if (update < 60) {
          update = parseInt(update) + "分钟前";
        } else if (update > 60 && update<1440) {
          update = parseInt(update / 60) + "小时前";
        }else if(update>1440){
          update = parseInt(update / 60 / 24) + "天前";
        }
        return update;
      }
    },
  },
};
</script>

<style lang="less">
.BookInfo {
  user-select: none;
  // overflow: hidden;
  .BookInfo-bg {
    width: 100vw;
    height: 107px;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(60px);
    position: absolute;
    top: 0;
    left: 0;
  }
  .BookInfo-header-nav {
    padding: 16px 8px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    margin: auto;
    z-index: 10000;
    box-sizing: border-box;
    .left,
    .right {
      flex-basis: 100px;
    }
    .right {
      text-align: right;
      .van-icon-chat-o {
        margin-right: 15px;
      }
    }
    .center {
      display: grid;
      place-content: center;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .BookInfo-msg {
    padding: 0 20px;

    .van-card {
      margin-top: 58.4px;
      font-size: 13px;
      background: transparent;
      padding: 0;
      .van-card__thumb {
        height: @ImgHeight;
        width: @ImgWidth;
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
        .book {
          height: @ImgHeight;
          width: @ImgWidth;
          border-radius: 3px;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
          position: relative;
        }
        img {
          border-radius: 0;
        }
        &:after {
          content: "";
          .Imgbg();
        }
      }
      .van-card__content {
        margin-left: 10px;
        > div {
          h1 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 5px;
          }
          p {
            color: #da3d3f;
            .wordsnum {
              color: #666;
            }
          }
          line-height: 24px;
        }
      }
    }
    .BookInfo-peopel {
      padding: 20px 0px;
      border-bottom: @borderBtm;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      color: #8a8a8a;
      background: white;
      .start {
        span {
          font-size: 18px;
          margin-right: 10px;
          font-weight: bold;
        }
        .tip {
          .van-icon-arrow {
            vertical-align: top;
          }
          margin-top: 5px;
        }
      }
      .retain,
      .sevenHits,
      .totalHits {
        p:first-child {
          font-weight: 600;
          font-size: 16px;
        }
        p:last-child {
          margin-top: 5px;
        }
      }
    }

    //简介
    .brief {
      border-bottom: @borderBtm;
      padding: 20px 0 15px;
      h1 {
        font-size: 16px;
        font-weight: 600;
      }
      .tags {
        margin: 17px 0;
        span {
          background: #efeff4;
          color: #777;
          margin-right: 5px;
          border-radius: 20px;
          padding: 4px 7px;
          zoom: 0.9;
        }
      }
      .article {
        font-size: 13px;
        line-height: 22px;
        position: relative;
        span {
          color: #6d6b6b;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          &.line {
            display: block;
          }
        }
        .icon-icon1 {
          position: absolute;
          right: 7px;
          bottom: -7px;
          font-size: 14px;
          transform: translateY(-40%);
          background: rgba(255, 254, 254, 0.6);
          color: #6d6b6b;
        }
      }
    }

    //章节
    .catalog {
      padding: 15px 0;
      span {
        font-size: 16px;
      }
      .catalog-section {
        float: right;
        zoom: 0.8;
        width: 40%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
        color: #969697;
      }
      .van-icon-arrow {
        float: right;
        vertical-align: middle;
        font-size: 14px;
      }
      .updateTime {
        float: right;
        color: #da3d3f;
        zoom: 0.8;
        margin-right: 7px;
      }
    }
  }
  .bg {
    background: rgb(240, 239, 239);
    padding: 8px 0px;
  }
  // 热门短评
  .shortReview,
  .bookReview {
    // border-bottom: @borderBtm;
    padding: 15px 20px 0;
    // margin: 15px 0;
    background: white;
    &:after {
      content: "";
      height: 0;
      clear: both;
      display: block;
    }
    .shortReview-header,
    .bookReview-header {
      border-bottom: @borderBtm;
      padding-bottom: 10px;
      &:after {
        content: "";
        clear: both;
        display: block;
      }
      h1 {
        float: left;
        font-size: 16px;
      }
      span {
        float: right;
        color: #da3d3f;
      }
    }

    .shortReview-con,
    .bookReview-con {
      padding: 10px 0;
      border-bottom: @borderBtm;
      .user {
        img {
          width: 20px;
          border-radius: 50%;
        }
        .username {
          margin: 0 10px;
          color: #797878;
        }
        .level {
          border: 0.5px solid #bebdbd;
          border-radius: 20px;
          padding: 0px 5px;
          zoom: 0.8;
          color: #afaeae;
        }
      }

      .start {
        margin: 10px 0;
        > span {
          vertical-align: top;
          margin-left: 8px;
          color: #bebdbd;
        }
      }
      .details {
        p {
          line-height: 16px;
          display: -webkit-box;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 13px;
        }
      }
    }

    .shortReview-footer,
    .bookReview-footer {
      text-align: center;
      padding: 15px 0;
      color: #da3d3f;
      button {
        background: white;
        font-size: 14px;
      }
    }
    .not{
      font-size: 14px;
      text-align: center;
      padding: 20px 0;
      color: #969697;
    }
  }

  // 书评
  .bookReview {
    margin: 8px 0;
    .particular {
      p {
        line-height: 16px;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    .Commentt {
      margin-top: 10px;
      color: #bebdbd;
      &:after {
        content: "";
        clear: both;
        display: block;
      }
      .left {
        float: left;
      }
      .right {
        float: right;
        .iconfont {
          font-size: 12px;
          margin-right: 3px;
        }
        .icon-dianzan2 {
          display: inline-block;
          transform: translateY(-1px);
        }
        span:first-child {
          margin-right: 10px;
        }
      }
    }
    .particular {
      margin-top: 10px;
      color: #7e7d7d;
    }
  }

  // 作者的其他作品与本书追友还在读共享
  .otherWorks,
  .AlsoThe {
    background: white;
    padding: 0px 20px;
    h1 {
      padding: 15px 0px 15px;
      border-bottom: @borderBtm;
      font-size: 16px;
    }
    .AlsoThe-con {
      display: flex;
      // justify-content: space-between;
      padding: 15px 0;
      box-sizing: border-box;
      overflow-x: auto;
      .AlsoThe-con-child {
        width: @ImgWidth;
        margin-right: 15px;
        .imgBox {
          height: @ImgHeight;
          width: @ImgWidth;
          position: relative;
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
          .book {
            height: @ImgHeight;
            width: @ImgWidth;
            border-radius: 3px;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
            position: relative;
          }
          img {
            border-radius: 0;
          }
          &:after {
            content: "";
            .Imgbg();
          }
        }
        .imgMsg {
          p {
            margin-top: 8px;
          }
        }
      }
    }
  }

  .AlsoThe {
    margin-top: 8px;
    .imgMsg {
      p:last-child {
        color: #7e7d7d;
      }
    }
    .AlsoThe-footer {
      border-top: @borderBtm;
      padding: 15px 0;
      text-align: center;
      color: #da3d3f;
      font-size: 14px;
      .iconfont {
        font-weight: bolder;
        vertical-align: middle;
      }
    }
  }
  .BookInfo-footer {
    background: white;
    margin: 8px 0 50px;
    padding: 0 20px 15px;
    h1 {
      font-size: 16px;
      padding: 15px 0 10px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      color: #7e7d7d;
    }
  }

  .BookInfo-bottm-nav {
    border-top: @borderBtm;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: white;
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    > div {
      flex: 1;
      text-align: center;
      display: grid;
      place-content: center;
      color: #da3d3f;
      font-size: 15px;
    }
    .start {
      background: #f34129;
      color: white;
      font-size: 16px;
      margin-top: -2px;
    }
  }
}
</style>