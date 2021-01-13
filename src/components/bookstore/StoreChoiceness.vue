<template>
  <div class="Store-Choiceness">
    <book-banner :imgs="bannerList"></book-banner>
    <div style="background: #f7f7f7">
      <!-- 轮播下面的导航 -->
      <store-nav></store-nav>
      <!-- 高分神作 -->
      <exclusive :highWords="highWords"></exclusive>

      <!-- 男女畅销榜 -->
      <store-list :bookList="bookList"></store-list>
      <!-- 男生必看 -->
      <general-com-two :boyMustLooks="boyMustLooks"></general-com-two>
      <!-- 女生热门 -->
      <general-com-two :boyMustLooks="grilHot"></general-com-two>
      <!-- 悬疑推理 -->
      <general-com-three :suspense="suspense"></general-com-three>
      <!-- 底部分类 -->
      <store-classify :StoreClassify="StoreClassify"></store-classify>
    </div>

    <!-- <div class="footer">
      <h1>
        <img src="../../assets/images/line.png" alt="" class="line" />
        <span>哇~还没有找到你喜欢的书啊？要不要试试</span>
        <img src="../../assets/images/line.png" alt="" class="line" />
      </h1>
      <div class="btns">
        <button>HOT排行榜</button>
        <button>书荒求助</button>
        <button>找小编推书</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import BookBanner from "../../views/BookBanner";
import StoreNav from "./StoreNav";
import exclusive from "../../views/exclusive";
import StoreList from "./StoreList";
import GeneralComTwo from "../../views/GeneralComTwo";
import GeneralComThree from "../../views/GeneralComThree";
import StoreClassify from "./StoreClassify";

export default {
  data() {
    return {
      bannerList: [],
      highWords: [],
      bookList: [],
      boyMustLooks: [],
      grilHot: [],
      suspense: [],
      StoreClassify: [],
    };
  },
  components: {
    BookBanner,
    StoreNav,
    exclusive,
    StoreList,
    GeneralComTwo,
    GeneralComThree,
    StoreClassify,
  },
  // beforeRouteEnter(to,from,next){
  //   next(vm=>{
  //     vm.$store.commit("toggleBottomNavShow", true);
  //   })
  // },
  created() {
    this.axios
      .get(
        "https://b.zhuishushenqi.com/category/group-minlist?node=e5fe6058afa449e4a8b9b3fb843c2bcd&sex=male&token=&userId=&cv=&groupid=&pl=null&type=jx&appType=&packageName="
      )
      .then((e) => {
        //轮播
        this.bannerList = e.data.data.spread[0].advs;
        //高分神作
        this.highWords = e.data.data.nodes[0];
        //排行榜
        this.bookList = e.data.data.spread[3].advs;
        //男生必看
        this.boyMustLooks = e.data.data.nodes[1];
        //女生热门
        this.grilHot = e.data.data.nodes[2];
        //悬疑
        this.suspense = e.data.data.nodes[3];
        //底部分类
        this.StoreClassify = e.data.data.spread[4].advs;

        // console.log(e.data.data.spread[3].advs);
        //进来的时候获取背景色
        // this.$store.commit(
        //   "changenavbg",
        //   e.data.data.spread[0].advs[0].navBgColor
        // );
      });

    //高分神作
    // this.axios
    // .get(
    //     ' https://b.zhuishushenqi.com/category/booklist?node=7b74421416c241fa97a6747e756ce281&ajax=ajax&size=10&groupid=&st=1&type=&packageName=&token='
    // )
    // .then((e) => {
    //     // console.log(e.data.book);
    // });
  },
};
</script>

<style lang="less">
.Store-Choiceness {
  .footer {
    margin-top: 20px;
    padding: 0 16px;
    padding-bottom: 50px;
    text-align: center;
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
          color: #858383;
      span{
        flex: 1;
      }
      .line {
        flex-basis: 15%;
        width: 15%;
        height: 1px;
      }
    }
    .btns{
      padding: 15px 0;
      button{
        border-radius: 20px;
        background: rgba(235, 5, 5,.1);
        color: rgb(235, 5, 5);
        padding: 7px 15px;
        margin: 0 5px;
        font-weight: bolder;
      }
    }
  }
  // padding: 0 16px;
  // background:#F7F7F7;
  // color: @color;

  // overflow: hidden;
  // .list {
  //   overflow: hidden;

  //   display: block;
  //   overflow-x: auto;
  //   white-space: nowrap;
  //   width: 100%;
  //   display: flex;
  // }
}
</style>