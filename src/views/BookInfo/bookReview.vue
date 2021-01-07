<template>
  <div class="bookReview-con">
    <div class="user">
      <img :src="'http://statics.zhuishushenqi.com' + author.avatar" />
      <span class="username">{{ author.nickname }}</span>
      <span class="level">Lv.{{ author.lv }}</span>
    </div>
    <div class="start">
      <van-rate
        v-model="value"
        :size="12"
        color="#ffd21e"
        void-icon="star"
        void-color="#ccc"
        allow-half
        readonly
      />
      <span>{{
        value == 5
          ? "必看神作"
          : value == 4
          ? "非常好看"
          : value == 3
          ? "值得一看"
          : "浪费生命"
      }}</span>
    </div>
    <div class="details">
      <p>{{ bookReview.title }}</p>
    </div>
    <div class="particular">
      <p>
        {{ bookReview.content }}
      </p>
    </div>
    <div class="Commentt">
      <div class="left">
        <span>{{ dateTime }}</span>
        <i class="iconfont icon-xiaoyuandian1"></i>
        <span>{{readCount}}阅读</span>
      </div>
      <div class="right">
        <span>
          <i class="iconfont icon-pinglun"></i>
          {{ bookReview.commentCount }}
        </span>
        <span>
          <i class="iconfont icon-dianzan2"></i>
          {{ bookReview.helpful.yes }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bookReview"],
  data() {
    return {
      value: 4,
      author: this.bookReview.author,
    };
  },
  created() {
    this.value = this.bookReview.rating;
  },
  watch:{
    bookReview(n){
      this.author = n.author;
    }
  },
  // filters:{
  //   dateTime(val){

  //   }
  // }
  computed: {
    dateTime() {
      let updateTime = this.bookReview.updated.replace(/(\.\d+)\w/,'$1');
      // console.log(updateTime);
      let newTime = parseInt(
        (+new Date() - +new Date(updateTime)) /1000 / 60 /60
      )
      // console.log(newTime);
      if(newTime<24){
          newTime = newTime+'  小时前'; 
      }else if(newTime>24 && newTime<48){
          newTime = "昨天"
      }else if(newTime>48 && newTime<72){
          newTime = "前天"
      }else if(newTime>72 && newTime<729.6){
          newTime = parseInt(newTime/24)+"  天前"
      }else if(newTime>729.6 && newTime<8760){
          newTime = parseInt(newTime/729.6)+"  月前"
      }else if(newTime>8760){
          newTime = parseInt(newTime/8760)+"  年前"
      }
        
        return newTime;
    },
    readCount(){
      let count = this.bookReview.readCount
       return count>=10000? ((count/10000)).toFixed(2)+"万" : count;
    }
  },
};
</script>

<style>
</style>