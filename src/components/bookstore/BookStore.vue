<template>
  <div class="book-store">
    <van-sticky z-index="-1" @scroll="scroll">
      <div
        class="store-bg"
        :style="{ background: navbg }"
        v-show="!TopNavChangebg"
      ></div>
    </van-sticky>

    <!-- 搜索框 -->
    <book-search></book-search>

    <!-- 顶部导航 -->
    <!-- <keep-alive> -->
      <van-sticky>
        <book-top-nav :TopNavChangebg="TopNavChangebg"></book-top-nav>
      </van-sticky>
    <!-- </keep-alive> -->

    <keep-alive>
      <transition name="van-slide-right" mode="out-in">
        <router-view></router-view>
      </transition>
    </keep-alive>

    <!-- </div> -->
     <div class="footer">
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
    </div>
  </div>
</template>

<script>
import BookSearch from "./BookSearch";
import BookTopNav from "./BookTopNav";
import { mapState } from "vuex";
export default {
  data() {
    return {
      TopNavChangebg: false,
    };
  },
  components: {
    BookSearch,
    BookTopNav,
  },
  computed: {
    ...mapState(["navbg"]),
  },
  methods: {
    scroll(isFixed) {
      this.TopNavChangebg = isFixed.scrollTop >= 200 ? true : false;
    },
  },
};
</script>

<style lang="less">
.book-store {
  // padding: 0 5px;
  overflow: hidden;
  .store-bg {
    position: absolute;
    top: 0;
    height: 195px;
    width: 120%;
    border-radius: 0 0 50% 50%;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
  }
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
}
</style>