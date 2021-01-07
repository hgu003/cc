<template>
  <div class="store-top-nav">
    <van-tabs
      v-model="active"
      :background="TopNavChangebg ? 'white' : navbg"
      line-width="20px"
      line-height="2px"
      color="white"
      duration="1"
      :title-inactive-color="TopNavChangebg ? '#666' : 'white'"
      :title-active-color="TopNavChangebg ? '#666' : 'white'"
      :animated="true"
    >
      <van-tab title="精选" to="/StoreChoiceness">
        <!-- <transition name="van-slide-right" mode="out-in"> -->
        <!-- <router-view></router-view> -->
        <!-- </transition> -->
        <!-- <store-choiceness></store-choiceness> -->
      </van-tab>
      <van-tab title="新书" to="/NewBook">
        <!-- <transition name="van-slide-right" mode="out-in"> -->
        <!-- <router-view></router-view> -->
        <!-- </transition> -->
        <!-- <new-book></new-book> -->
        <!-- <router-view></router-view> -->
      </van-tab>
      <van-tab title="男频" to="/bookfemale">
        <!-- <router-view></router-view> -->
        <!-- <book-male></book-male> -->
      </van-tab>
      <van-tab title="女频">
        <!-- <router-view></router-view> -->
      </van-tab>
      <van-tab title="vip">
        <!-- <router-view></router-view> -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import StoreChoiceness from "./StoreChoiceness";
// import NewBook from "./NewBook/NewBook"
// import BookMale from "./BookMale.vue";
import { mapState } from "vuex";
export default {
  props: ["TopNavChangebg"],
  // components: {
  //   StoreChoiceness,
  //   NewBook,
  //   BookMale,
  // },
  data() {
    return {
      active: 0,
    };
  },
  activated() {
    //刷新的时候让导航下划线停留在当前路由
    switch (this.$route.fullPath) {
      case "/StoreChoiceness":
        this.active = 0;
        break;
      case "/NewBook":
        this.active = 1;
        break;
      case "/bookfemale":
        this.active = 2;
        break;
    }
  },
  watch: {
    active(newVal) {
      //提交到vuex保存当前的路由,
      switch (newVal) {
        case 0:
          this.$store.commit("toggleNav", "/StoreChoiceness");
          break;
        case 1:
          this.$store.commit("toggleNav", "/NewBook");
          break;
        case 2:
          this.$store.commit("toggleNav", "/bookfemale");
          break;
      }
      // console.log(this.$router);
    },
  },
  computed: {
    ...mapState(["navbg"]),
  },
};
</script>

<style lang="less">
.store-top-nav {
  // background: white;
  // position: absolute;
  // top: 54px;
  // width: 100%;
  // z-index: 15;
  .van-tabs {
    .van-tab--active {
      font-size: 18px;
    }
    .van-tabs__wrap {
      // touch-action: manipulation;
      height: 30px;
      .van-tabs__nav--complete {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  }
}
</style>