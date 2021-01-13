<template>
  <div class="manitoRedBook" ref="manitoRedBook">
    <!-- 顶部返回 -->
    <van-nav-bar title="大神红文" left-arrow @click-left="$router.back()" fixed>
      <template #left>
        <van-icon name="arrow-left" size="23" color="#666" />
      </template>
    </van-nav-bar>

    <!-- 轮播图 -->
    <div class="banner">
      <banner :imgs="banner"></banner>
    </div>
    <!-- 卡片队列 -->
    <ul class="card" >
      <manitoCard v-for="(item, index) in cardslazy" :key="index" :item="item"></manitoCard>
    </ul>


    <van-loading size="24px" v-if="isflag">加载中...</van-loading>
    <div class="footer">
      <span>~ 到底啦 ~</span>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import manitoCard from "./manitoCard"
export default {
  components: {
    Banner,
    manitoCard,
  },
  data() {
    return {
      banner: null,
      cards:[],
      cardslazy:[],
      isflag:false,
      lazyIndex:0,
    };
  },
  activated() {
    window
      .axios(
        "https://b.zhuishushenqi.com/category/group-minlist?node=66e1235bc34b466dac1b7593ad70d56d&sex=male&token=&userId=&groupid=&cv=&pl=android&type=other&appType=&packageName="
      )
      .then((result) => {
        //轮播
        this.banner = result.data.data.spread[0].advs;
        this.cards =  result.data.data.spread.slice(1);
        this.cardslazy = this.cards.slice(0,10);
        
      });


      window.onscroll = ()=>{
        let winScroll = window.pageYOffset;
        let documentHeight = document.documentElement.clientHeight
        let manitoHeight = this.$refs.manitoRedBook.offsetHeight;
        console.log(parseInt(winScroll+documentHeight));
        console.log(manitoHeight);
        if(parseInt(winScroll+documentHeight-50)>=manitoHeight){
          if (this.cards.length==this.cardslazy.length)return;
          this.isflag=true;
          this.lazyIndex+=1;
          this.cardslazy = this.cards.slice(0,this.lazyIndex*10);
          this.isflag=false;
        }
      }
  },
  deactivated(){
    window.onscroll=null;
  }
};
</script>

<style lang="less">
.manitoRedBook {
  background: #f4f4f4;
  //头部返回
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

  //轮播
  .banner {
    margin-top: 58.4px;
    background: white;
    padding-bottom: 15px;
  }

  //底部
  .footer{
    padding: 20px 0;
    text-align: center;
    background: white;
    color: #8a8a8f;
  }

  //loading
  .van-loading{
    background: white;
    text-align: center;
  }
}
</style>