<template>
  <div class="SearchResult">
    <general-card v-for="(item,index) in result" :key="index" :item="item"></general-card>
  </div>
</template>

<script>
  import GeneralCard from "../GeneralCard"
export default {
  props: ["value"],
  components:{
    GeneralCard,
  },
  data() {
    return {
      result:[],
    };
  },
  watch: {
    value(n) {
    // console.log(this.$route.fullPath);

      if (n.length == 0) {
        this.$router.push({ name: "Search" });
        return;
      }
    },
  },
  created(){
    window.axios(`http://b.zhuishushenqi.com/books/fuzzy-search?model.sort=0&model.start=0&model.packageName=com.ushaqi.zhuishushenqi&model.query=${this.$route.query.value}&model.limit=50&model.contentType2=1&userid=yk_c996bc45cee0a87d9c622`)
    .then(e=>{
      // console.log(e.data);
      this.result=e.data.books;
    })
  }
};
</script>

<style lang="less">
.SearchResult {
  margin-top: 65px;
}
</style>