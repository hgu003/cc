<template>
  <div class="Male">
      <!-- 轮播 -->
      <book-banner :imgs="bannerList"></book-banner>
      <!-- 都市最强男人 -->
      <general-com-two :boyMustLooks="MaxBoy"></general-com-two>
      <!-- 刀剑乱舞 -->
      <manitoNewZuo :books="Sword"></manitoNewZuo>
      <!-- 独家资源 -->
      <general-com-two :boyMustLooks="exclusive"></general-com-two>
      <!-- 新书 -->
      <general-com-two :boyMustLooks="NewBook"></general-com-two>
      <!-- 穿越古代 -->
      <general-com-three :suspense="Cross"></general-com-three>
      <!-- 晚上别睡 -->
      <general-com-three :suspense="DonSleep"></general-com-three>
      <!-- 整点不一样的 -->
      <general-com-three :suspense="unlikeliness"></general-com-three>
  </div>
</template>

<script>
import BookBanner from "../../../views/BookBanner"
import GeneralComTwo from "../../../views/GeneralComTwo"
import manitoNewZuo from "../../../views/manitoNewZuo"
import GeneralComThree from "../../../views/GeneralComThree"
export default {
    components:{
        BookBanner,
        GeneralComTwo,
        manitoNewZuo,
        GeneralComThree,
    },
    data() {
        return {
            bannerList:[],
            MaxBoy:[],
            Sword:[],
            exclusive:[],
            NewBook:[],
            Cross:[],
            DonSleep:[],
            unlikeliness:[]
        }
    },
    created(){
        this.axios
      .get(
        "http://b01.zhuishushenqi.com/category/native-page?node=d9a25e6f474146c38f78688d14930a50&pl=android&packageName=com.ushaqi.zhuishushenqi&ishome=false&page=1&userid=yk_c996bc45cee0a87d9c622&city=%E5%B9%BF%E5%B7%9E&time=1608009607470"
      )
      .then((e) => {
        //   console.log(e.data);
        //轮播
        this.bannerList = e.data.data[0].advs;
        //都市最强男人
        this.MaxBoy = e.data.data[1];
        //刀剑乱舞
        this.Sword = e.data.data[2];
        //独家资源
        this.exclusive = e.data.data[3];
        //新书
        this.NewBook = e.data.data[4];
        //穿越古代
        this.Cross = e.data.data[5];
      })

      window.axios("http://b01.zhuishushenqi.com/category/native-page?node=d9a25e6f474146c38f78688d14930a50&pl=android&packageName=com.ushaqi.zhuishushenqi&ishome=false&page=2&userid=yk_c996bc45cee0a87d9c622&city=%E5%B9%BF%E5%B7%9E&time=1608009607470")
      .then(e=>{
        //   console.log(e.data.data[0]);
          //晚上别睡
          this.DonSleep = e.data.data[0];
          //整点不一样的
          this.unlikeliness = e.data.data[1];
      })

      // window.axios("http://api.kele8.cn/agent/http://api.zhuishushenqi.com/book/548d9c17eb0337ee6df738f5")
      // .then(e=>{
      //   console.log(e);
      // })
    } 
} 
</script>

<style>

</style>