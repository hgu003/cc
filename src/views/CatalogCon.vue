<template>
  <div class="CatalogCon">
    <h1 class="title">{{ content.title }}</h1>
    <div class="content">{{ content.cpContent }}</div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  props: ["id", "item", "index"],
  data() {
    return {
      content: "",
    };
  },
  activated() {
    let link = encodeURIComponent(this.item.link);
    window.axios("http://novel.kele8.cn/chapters/" + link).then((result) => {
      console.log(result.data.chapter.cpContent.length);
      this.content = result.data.chapter;
    });
  },
  // computed:{
  //     ...mapState(['bookCon']),
  // }
};
</script>

<style lang='less'>
.CatalogCon{
    padding: 16px;
    .title{
        font-size: 28px;
        font-weight: 500;
        line-height: 35px;
    }
    .content{
        margin-top: 15px;
        line-height: 20px;
        font-size: 16px;
        white-space: pre-wrap;
        letter-spacing: 3px;
    }
}
</style>