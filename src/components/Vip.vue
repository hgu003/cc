<template>
  <div class="Vip">
    <van-nav-bar title="VIP" left-arrow @click-left="$router.back()" fixed>
      <template #left>
        <van-icon name="arrow-left" size="23" color="#666" />
      </template>
    </van-nav-bar>
    <!-- banner轮播图 -->
    <div class="Vip-banner">
      <book-banner :imgs="banner"></book-banner>
    </div>
    <!-- 用户信息 -->
    <div class="userInfo">
      <div class="inner">
        <div class="avater"></div>
        <!-- <img src="https://h5.zhuishushenqi.com/v2/dist/image/5a74e196801d.default-avatar.png" alt=""> -->
        <div class="title">大虾，登录一下呗~</div>
        <div class="login">
          <a>立即登录</a>
        </div>
      </div>
    </div>

    <!-- 书库以及vip排行 -->
    <!-- <div class="link">
      <div class="inner">
        <div class="stack-seniority">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAG1BMVEVHcEzcu2LZt1/auGHZt1/Vs1zQr1ffvWXauGBHtq6yAAAABXRSTlMAQtcdlp2w798AAAGMSURBVEjHzZUxbgMhEEXtG2yUI6RYH8BS2kgpcoJB1LbhBJGgjoTg2IEZlsV4BpcJlaX9evz5fMzh8G/WeXUL/YKyrLWXz/770bleYJTKkqUTvO8CnQXK5O/22gm+OkIohKK4dYJ1IOAWl07g7j0Uk3nxAo0AJQuKB1BzAhg7IxQAPPEA1jwhzEyih5lJymFG0NsOjOBlIwgezulty4ElHFNKH5ikAm7M15NP6WfRLadRsPosSN9yDjHRknKILmZJCAFLyXmIiNDYB8N58OiBEGxQSCiAsoPhPPi4EQy7RSpbVJPsYdU5QSJkj23MOgZLwDFBIJAHLUVdPSCBzyH58jm02z3m4N0+BdsHJPRJP3jAs9D0/6Cmpwl8qzEojVuwh0U5VAJ7WJhDKFPMctgIRsqheoAJAS8O34faSek0t05qsQ++dhLa7RX6EKT/SeoDEeQcglz72gcNosmdoB7vxdpySKFd7svwoFAdYM/hNjxJkRqzJ3kdHjXKAfZGLcOzSKUOUHO4fxb/dv0C/A3RY3T+ShwAAAAASUVORK5CYII="
          />
          <div class="msg">
            <p>VIP书库</p>
            <p>381828本书</p>
          </div>
        </div>
        <div class="stack-seniority" @click="jumpRank">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEVHcEzUslrcumHXtV3dumPYt17Zt1/btlrZt1/fvWTZt1/Vs1vXtV3auWDRsFjPrVYVDYbfAAAACXRSTlMAgTnYhMNaDqrGVvuCAAABnklEQVRIx9WVv0vDQBTHr1VyjsXNrbqIq6FgByWLQzdBCnU7UMEOYrTg7CIquCrckH8gxL8gHQVBb3OKkEGkjglY6mjNXX609yONIEJ9633yfe99eLQATF/NPUx+P70uADrdAgDM/AegjH5jsXzeZNXKSzn07xyHELd7Lz3BPfrR+ottE0K6rluVZrduog6+b0cBxHXdigi0UaMaAXGCCtg3F1AGPCkAoD2brEVeAry6ABMTOrcgAR7VCY21SxRv4aiBzWYTCVvAZdk05+EoOMteTpZomVwC7B2/p++zOCrLMrgt4LyWAW0KeBTgPGxspUBdlQDA4msKYJaADc6DtgoH44CHPYPzAHsHQoJv8B523yocYGEj9x6wMKQa8KQtxARs5N4DVnjQavp2TW9V5RaJh1IwpPWR66EUBGEEDJRDJgAjRkCaMAJCHhBM0oQvPoHfQm7heZwHBoTjgCUliDOIHgJmQt7CyWuh2IJvIdzDjzyEBR7CYg/DP/cQKBOIImFHfQ90yD4DVtiMyov6jH8C64kHPSsUA300Hf/V356SpBGx/yAdAAAAAElFTkSuQmCC"
          />
          <div class="msg">
            <p>VIP排行</p>
            <p>每日更新</p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 类型导航 -->
    <!-- <div class="Booktype">
      <ul>
        <li :class="{ active: active == 0 }" @click="active = 0">男生</li>
        <li :class="{ active: active == 1 }" @click="active = 1">女生</li>
        <li :class="{ active: active == 2 }" @click="active = 2">出版</li>
      </ul>
    </div> -->

    <!-- 重磅推荐 -->
    <!-- <manitoNewZuo :books="recommend"></manitoNewZuo> -->

    <!-- 热门畅销 -->
    <!-- <GeneralComThree :suspense="hot"></GeneralComThree> -->

    <!-- 都市休闲 -->
    <!-- <GeneralComThree :suspense="leisure"></GeneralComThree> -->

    <!-- 热血玄幻，王者归来 -->
    <!-- <GeneralComThree :suspense="blood"></GeneralComThree> -->

    <!-- 奇闻推理 -->
    <!-- <GeneralComThree :suspense="anecdote"></GeneralComThree> -->

    <!-- 唐宋明清 -->
    <!-- <GeneralComThree :suspense="dynasty"></GeneralComThree> -->
    <vipand-free
      :recommend="recommend"
      :hot="hot"
      :leisure="leisure"
      :blood="blood"
      :anecdote="anecdote"
      :dynasty="dynasty"
    ></vipand-free>
    <div class="footer">
      <span>- 我是有底线的 -</span>
    </div>
  </div>
</template>

<script>
import BookBanner from "../views/BookBanner";
import VipandFree from "../views/VipandFree"
// import manitoNewZuo from "../views/manitoNewZuo";
// import GeneralComThree from "../views/GeneralComThree";
export default {
  components: {
    BookBanner,
    // manitoNewZuo,
    // GeneralComThree,
    VipandFree,
  },
  data() {
    return {
      banner: "",
      recommend: [],
      hot: [],
      leisure: [],
      blood: [],
      anecdote: [],
      dynasty: [],
    };
  },
  activated() {
    this.getType();
  },
  watch: {
    active(n) {
      switch (n) {
        case 0:
          this.getType("f47ef06703de47bea719dd9e7bda5381");
          break;
        case 1:
          this.getType("6a70a188b01e4d6c8c9749240a309ebb");
          break;
        case 2:
          this.getType("1369a8d6e24f4c239205c74f7d4fbc2a");
          break;
      }
    },
  },
  methods: {
    getType(node = "f47ef06703de47bea719dd9e7bda5381") {
      window
        .axios(
          `https://b.zhuishushenqi.com/category/classifylist?node=${node}&sex=male&token=&userId=&groupid=&cv=&pl=android&type=vip&appType=&packageName=`
        )
        .then((result) => {
          // 轮播图
          this.banner = result.data.data.spread[0].advs;
          // 重磅推荐
          this.recommend = result.data.data.nodes[0];
          // 热门畅销
          this.hot = result.data.data.nodes[1];
          // 都市休闲
          this.leisure = result.data.data.nodes[2];
          //热血玄幻，王者归来
          this.blood = result.data.data.nodes[3];
          //奇闻推理
          this.anecdote = result.data.data.nodes[4];
          //唐宋明清
          this.dynasty = result.data.data.nodes[5];
        });
    },
    jumpRank() {
      this.$router.push({
        name: "RankingList",
        query: {
          type:
            this.active == 0 ? "male" : this.active == 1 ? "female" : "publish",
          listType: "vip",
        },
      });
    },
  },
};
</script>

<style lang="less">
.Vip {
  padding-top: 58.4px;
  // 顶部
  .van-nav-bar {
    z-index: 100;
    .van-nav-bar__content {
      height: 58.4px;
      .van-nav-bar__left {
        padding-left: 8px;
        .van-icon {
          font-weight: 600;
          font-size: 25px;
        }
      }
      .van-nav-bar__title {
        color: #666;
        font-weight: 600;
      }
    }
  }
  .Vip-banner {
    padding: 7px;
    // background: #f5f5fa;
  }
  .userInfo {
    margin-top: 5px;
    padding: 0 16px;
    .inner {
      > div {
        display: inline-block;
        vertical-align: middle;
      }
      // display: flex;
      // align-items: center;
      // // justify-content: center;
      background: #f5f5fa;
      border-radius: 20px;
      width: 100%;
      .avater {
        width: 28px;
        height: 28px;
        margin-right: 10px;
        background: url("https://h5.zhuishushenqi.com/v2/dist/image/5a74e196801d.default-avatar.png")
          no-repeat;
        background-size: 100%;
      }
      .title {
        color: #8a8a8f;
      }
      .login {
        float: right;
        a {
          display: inline-block;
          line-height: 28px;
          width: 100%;
          height: 100%;
          padding: 0 8px;
          box-sizing: border-box;
          color: #8f7738;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          background: linear-gradient(90deg, #f8e0a1, #e9cf8b);
          -o-border-image: linear-gradient(270deg, #f8e0a1, #e9cf8b) 1 1;
          border-image: linear-gradient(270deg, #f8e0a1, #e9cf8b) 1 1;
        }
      }
    }
  }

  //书库以及vip排行
  .link {
    padding: 30px 17px 0;
    .inner {
      display: flex;
      justify-content: space-between;
      border-bottom: @borderBtm;
      padding-bottom: 15px;
      .stack-seniority {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f5f5fa;
        flex-basis: 48%;
        height: 70px;
        img {
          width: 38px;
          margin-right: 10px;
        }
        .msg {
          color: #e3c577;
          p:first-child {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 5px;
          }
          p:last-child {
            zoom: 0.9;
          }
        }
      }
    }
  }

  //类型导航
  .Booktype {
    padding: 15px 30px;
    ul {
      background: rgb(243, 241, 241);
      display: flex;
      justify-content: space-between;
      border-radius: 20px;
      li {
        flex: 1;
        height: 28px;
        border-radius: 20px;
        text-align: center;
        line-height: 28px;
        box-sizing: border-box;
        color: #666;
        border: transparent 1px solid;
        &.active {
          background: white;
          border: rgb(243, 241, 241) 1px solid;
          color: black;
          font-weight: 500;
        }
      }
    }
  }

  // 底部
  .footer {
    text-align: center;
    padding: 20px 0 15px;
    color: #ccc;
  }
}
</style>