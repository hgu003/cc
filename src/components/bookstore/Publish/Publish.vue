<template>
  <div class="Free">
     <!-- 轮播 -->
      <book-banner :imgs="bannerList"></book-banner>
      <!-- 影视原著 -->
      <original :book="original"></original>
      <!-- 重磅推荐 -->
      <general-com-three :suspense="recommend"></general-com-three>
      <!-- 言情佳作 -->
      <general-com-three :suspense="erotica"></general-com-three>
      <!-- 更多好书 -->
      <exclusive :highWords="more"></exclusive>
  </div>
</template>

<script>
import BookBanner from "../../../views/BookBanner"
import Original from "./Original"
import GeneralComThree from "../../../views/GeneralComThree"
import exclusive from "../../../views/exclusive"
export default {
  components:{
    BookBanner,
    Original,
    GeneralComThree,
    exclusive,
  },
  data() {
    return {
      bannerList:[],
      original:[],
      recommend:[],
      erotica:[],
      more:[],
    }
  },
  beforeRouteEnter (to, from, next) {
    window.axios("http://b.zhuishushenqi.com/category/native-page?node=c593c40b08414ca5b9d9b28851f60de1&pl=android&packageName=com.ushaqi.zhuishushenqi&ishome=false&page=1&userid=yk_c996bc45cee0a87d9c622&city=%E5%B9%BF%E5%B7%9E&time=1608009607470")
    .then(e=>{
      next(vm=>{
        // console.log();
        //轮播图
        vm.bannerList = e.data.data[0].advs;
        //影视原著
        vm.original = e.data.data[1];
        //重磅推荐
        vm.recommend = e.data.data[2];
        //言情佳作
        vm.erotica = e.data.data[3];
        //更多好书
        vm.more = e.data.data[4];
      })
    })
  }
}
</script>

<style>

</style>