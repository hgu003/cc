<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>

    <van-tabbar v-model="active" active-color="#ee0a24" class="bottom-nav"  v-if="$route.meta.bottomShow">
      <van-tabbar-item icon="shopping-cart-o" to="/bookshelf">
        <template #icon>
          <van-icon
            class-prefix="icon"
            class="iconfont"
            name="shujia"
            size="16px"
            style="padding: 5px"
          />
        </template>
        书架
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="pushNav">
        <template #icon>
         <van-icon
            class-prefix="icon"
            class="iconfont"
            name="yemian"
            size="16px"
            style="padding: 5px"
            background="red"
          />
        </template>
        书城
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/discover">
      <template #icon>
         <van-icon
            class-prefix="icon"
            class="iconfont"
            name="xingqiu"
            size="16px"
            style="padding: 5px"
            background="red"
          />
        </template>
      发现
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/account">
      <template #icon>
         <van-icon
            class-prefix="icon"
            class="iconfont"
            name="denglu"
            size="16px"
            style="padding: 5px"
            background="red"
          />
        </template>
      未登录
      </van-tabbar-item>
    </van-tabbar>

   
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
  computed:{
    bottomNavShow(){
      return this.$store.state.bottomNavShow;
    }
  },
  methods:{
    pushNav(){
      this.$router.push(this.$store.state.cacheNav);
    }
  }
};
</script>


<style lang="less" >
#app {
  font-size: 12px !important;
}
.van-tabbar{
  z-index: 100 !important;
}
body{
  // position: fixed;
  // width: 100%;
  // height: 1000px;
}
//  .my-swipe .van-swipe-item {
//     color: #fff;
//     font-size: 20px;
//     line-height: 150px;
//     text-align: center;
//     background-color: #39a9ed;
//   }

</style>
