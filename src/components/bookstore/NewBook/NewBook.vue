<template>
  <div class="NewBook">
    <!-- 轮播 -->
    <book-banner :imgs="TopBanners"></book-banner>
    <!-- 大神新作 -->
    <manitoNewZuo :books="manito"></manitoNewZuo>
    <!-- 独家抢鲜 -->
    <general-com-two :boyMustLooks="exclusive"></general-com-two>
    <!-- 最新爽文 -->
    <exclusive :highWords="Shuangwen"></exclusive>
    <!-- 新糖上架 -->
    <exclusive :highWords="newSugarStores"></exclusive>
    <!-- 上周新书  -->
    <general-com-two :boyMustLooks="lastWeekBook"></general-com-two>
  </div>
</template>

<script>
import BookBanner from "../../../views/BookBanner";
import manitoNewZuo from "../../../views/manitoNewZuo";
import GeneralComTwo from "../../../views/GeneralComTwo";
import exclusive from "../../../views/exclusive";
export default {
  components: {
    BookBanner,
    manitoNewZuo,
    GeneralComTwo,
    exclusive,
  },
  data() {
    return {
      TopBanners: [],
      manito: [],
      exclusive: [],
      Shuangwen: [],
      newSugarStores: [],
      lastWeekBook:[],
    };
  },
  created() {
    window
      .axios(
        "http://b.zhuishushenqi.com/category/native-page?node=17c764e8aaa54d50bf59b0fd8373b400&pl=android&packageName=com.ushaqi.zhuishushenqi&ishome=false&page=1&userid=yk_c996bc45cee0a87d9c622&city=%E5%B9%BF%E5%B7%9E&time=1608009607470"
      )
      .then((e) => {
        // console.log(e.data.data[0].advs);
        //轮播
        this.TopBanners = e.data.data[0].advs;
        //大神新作
        this.manito = e.data.data[1];
        //独家抢鲜
        this.exclusive = e.data.data[2];
        //最新爽文
        this.Shuangwen = e.data.data[3];
        //新糖上架
        this.newSugarStores = e.data.data[4];
        //上周新书
        this.lastWeekBook = e.data.data[4];
      });
  },
};
</script>

<style>
</style>