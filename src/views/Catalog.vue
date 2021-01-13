<template>
  <div class="catalog">
    <van-nav-bar
      :title="item.title"
      left-arrow
      @click-left="$router.back()"
      fixed
    >
      <template #left>
        <van-icon name="arrow-left" size="23" color="#666" />
      </template>
    </van-nav-bar>

    <ul>
      <li v-for="(item, index) in chapters" :key="index" @click="lookBook(item,index)">
        <span class="title">{{ index + 1 }}.{{ item.title }}</span>
        <span v-if="item.isVip" class="lock"><van-icon name="warn-o" /></span>
      </li>
    </ul>
  </div>
</template>

<script>
// import {mapActions} from 'vuex'
// import {mapState} from 'vuex'
export default {
  props: ["book"],
  data() {
    return {
      chapters: [],
      item:this.book,
    };
  },
  methods: {
    lookBook(item,index) {
      // let link = encodeURIComponent(item.link); 
      //  window.axios('http://novel.kele8.cn/chapters/'+link)
      // .then(result=>{
      //   console.log(state,link);
      //   console.log(result);
      // })
      // console.log(link);
      // this.$store.dispatch('getCatalogCon',link);
      this.$router.push({
        name:'CatalogCon',
        params:{
          id:item._id,
          item:item,
          index:index
        }
      })
      // this.getCatalogCon(link);
   },
  },
  activated() {
    window
      .axios(
        ` http://novel.kele8.cn/book-sources?view=summary&book=${this.item._id}`
      )
      .then((id) => {
        window
          .axios(`http://novel.kele8.cn/book-chapters/${id.data[0]._id}`)
          .then((e) => {
            this.chapters = e.data.chapters;
          });
      });
    // this.getCatalog;
    // console.log(this.bookChapter);
  },
  // computed:{
  //   ...mapActions(['getCatalog','getCatalogCon']),
  //   ...mapState(['bookChapter']),
  // }
};
</script>

<style lang="less">
.catalog {
  // 顶部
  .van-nav-bar {
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
  ul{
    margin-top: 58.4px;
    li{
      font-size: 14px;
      padding: 16px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: @borderBtm;
      .title{
        flex: 1;
      }
      .lock{
        // flex-basis: 1;
        float: right;
      }
    }
  }
}
</style>