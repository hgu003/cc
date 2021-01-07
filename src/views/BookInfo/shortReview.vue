<template>
  <div class="shortReview-con" >
          <div class="user"  >
            <img
            v-if="avatar"
              :src="'http://statics.zhuishushenqi.com'+avatar" 
            />
            <span class="username">{{author.nickname}}</span>
            <span class="level">Lv.{{author.lv}}</span>
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
            <span>{{value==5?'必看神作':value==4?'非常好看':value==3?'值得一看':'浪费生命'}}</span>
          </div>
          <div class="details">
            <p>{{userObj.content}}</p>
          </div>
        </div>
</template>

<script>
export default {
    props:['shortReview'],
    data(){
        return{
            author:'111',
            avatar:'',
            value:5,
            userObj:'',
        }
    },
    watch:{
        shortReview(n){
            // console.log(n);
            this.author = n.author;
            this.avatar = n.author.avatar;
            this.userObj = n;
            this.value = this.userObj.rating;
        }
    },
    created(){
        // console.log(this.author);
    },
    mounted(){
        // console.log(this.author);
    }
}
</script>

<style>

</style>