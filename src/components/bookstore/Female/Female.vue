<template>
  <div class="Female">
    <!-- 轮播 -->
    <book-banner :imgs="bannerList"></book-banner>
<!-- 好看的停不下来 -->
    <manitoNewZuo :books="goodLooking"></manitoNewZuo>
    <!-- 新书 -->
    <manitoNewZuo :books="newBooks"></manitoNewZuo>
    <!-- 最火年代文 -->
    <general-com-three :suspense="hotBooks"></general-com-three>
    <!-- 王妃嫁到 -->
    <general-com-three :suspense="princess"></general-com-three>
    <!-- 最热团宠马甲 -->
    <general-com-three :suspense="Groupapet"></general-com-three>
    <!-- 农女种田 -->
    <!-- <general-com-three :suspense="unlikeliness"></general-com-three> -->
  </div>
</template>

<script>
import BookBanner from "../../../views/BookBanner";
import manitoNewZuo from "../../../views/manitoNewZuo";
import GeneralComThree from "../../../views/GeneralComThree";
export default {
  components: {
    BookBanner,
    manitoNewZuo,
    GeneralComThree,
  },
  data() {
    return {
      bannerList: [],
      goodLooking: [],
      newBooks: [],
      hotBooks: [],
      princess: [],
      Groupapet: [],
      FarmGirl: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    window
      .axios(
        "http://b01.zhuishushenqi.com/category/native-page?node=d322f092a8104c9784feff4680ef18c1&pl=android&packageName=com.ushaqi.zhuishushenqi&ishome=false&page=1&userid=yk_c996bc45cee0a87d9c622&city=%E5%B9%BF%E5%B7%9E&time=1608009607470"
      )
      .then((e) => {
        next((vm) => {
            //轮播
          vm.bannerList = e.data.data[0].advs;
          //好看的停不下来
          vm.goodLooking = e.data.data[1];
          //新书
          vm.newBooks = e.data.data[2];
          //最火年代文
          vm.hotBooks = e.data.data[3];
          //王妃嫁到
          vm.princess = e.data.data[4];
          //最热团宠马甲
          vm.Groupapet = e.data.data[5];
        });
      });
    
  
  },
};
</script>

<style>
</style>