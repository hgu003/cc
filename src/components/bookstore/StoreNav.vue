<template>
  <div class="store-nav">
    <van-grid :column-num="5" :border="false">
      <van-grid-item  text="分类" :to="{name:'Classify'}">
           <template #icon>
               <img src="../../assets/images/bookclassify.png" alt="" srcset="">
           </template>
      </van-grid-item>
      <van-grid-item  text="排行" :to="{name:'RankingList',query:{type:'male'}}">
            <template #icon>
               <img src="../../assets/images/ranking.png" alt="" srcset="">
           </template>
      </van-grid-item>
      <van-grid-item  text="VIP" :to="{name:'Vip'}">
            <template #icon>
               <img src="../../assets/images/vip1.png" alt="" srcset="">
           </template>
      </van-grid-item>
      <van-grid-item  text="大神红文" :to="{name:'manitoRedBook'}">
            <template #icon>
               <img src="../../assets/images/pan.png" alt="" srcset="">
           </template>
      </van-grid-item>
      <van-grid-item  text="书单">
            <template #icon>
               <img src="../../assets/images/booklist.png" alt="" srcset="">
           </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.store-nav{
  background: white;
    .van-grid-item{
        img{
            width: 25px;
            padding-bottom: 7px;
        }
    }
}

</style>