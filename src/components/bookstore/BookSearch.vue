<template>
  <div class="book-search">
      <van-search :value="text" @input="text=$event" shape="round" placeholder="请输入搜索关键词" background="transparent"/>
  </div>
</template>

<script>
export default {
      data() {
    return {
      text: '',
    };
  },
  methods:{
    //   input(e){
    //    this.text=e
    //   }
  }
}
</script>

<style  lang="less">
  .van-search{
    .van-search__content{
      background: rgba(252, 248, 248,.4);
    }
    .van-field__control{
      color: white;
      &::placeholder{
      color: white;
      }
    }
    .van-icon{
      color: white;
    }
  }
</style>