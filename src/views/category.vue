<template>
  <div class="category">
    <van-sticky>
      <div class="header" @click="$router.back()">
        <img src="../assets/images/back.png" alt="" />
        <span class="header-title">{{ query }}</span>
      </div>
    </van-sticky>
      <div class="cats">
        <ul>
          <li v-for="(cat, index) in cats" :key="index" @click="getCat(index)" :class="{active:index==active}">{{ cat }}</li>
        </ul>
        <ul>
          <li v-for="(price, index) in price" :key="index" @click="getPrice(index)" :class="{active:index==priceActive}">{{ price }}</li>
        </ul>

        <ul class="sticky">
          <li v-for="(sort, index) in sort" :key="index" @click="getSort(index)" :class="{active:index==sortActive}">{{ sort }}</li>
        </ul>

      </div>
      <div class="card">
        <category-card :item="card" :index="index" :key="index" v-for="(card,index) in books"></category-card>
      </div>
  </div>
</template>

<script>
import categoryCard from "./categoryCard"
export default {
  props: ["gender", "query","alias"],
  components:{
    categoryCard,
  },
  data() {
    return {
      cats: [],
      price:['全部','vip','付费','免费'],
      sort:['人气','留存','评分','字数'],
      books: [],
      active:0,
      priceActive:0,
      sortActive:0,
    };
  },
  activated() {
    //获取细分类
    window
      .axios(
        `http://b02.zhuishushenqi.com/category/cats?gender=${this.gender}&major=${this.query}&packageName=com.ushaqi.zhuishushenqi&userid=yk_c996bc45cee0a87d9c622`
      )
      .then((e) => {
        // this.cats.unshift("全部");
        this.cats = ["全部",...e.data.data.mins];
      });
     this.getBooks(this.alias,",","");
  },
  methods: {
    getBooks(alias,cat,price,sort) {
      //获取书籍
      window
        .axios(
          `http://b02.zhuishushenqi.com/category/fuzzy-search?alias=${alias}&packageName=com.ushaqi.zhuishushenqi&sort=${sort}&start=0&limit=30&userid=yk_c996bc45cee0a87d9c622&price=${price}&cat=${cat}`
        )
        .then((e) => {
          // console.log(e.data.books);
          this.books = e.data.books;
        });
    },
    getCat(index){
      this.active=index;
      let cat = this.active==0?"":this.cats[this.active];
      this.getBooks(this.alias,cat,this.priceActive,this.sortActive+1);
    },
    getPrice(index){
      this.priceActive=index;
      let cat = this.active==0?"":this.cats[this.active];
      this.getBooks(this.alias,cat,this.priceActive,this.sortActive+1);
    },
    getSort(index){
      this.sortActive=index;
      let cat = this.active==0?"":this.cats[this.active];
      this.getBooks(this.alias,cat,this.priceActive,this.sortActive+1);
    }
  },
};
</script>

<style lang="less">
.category {
  // 头部返回
  .header {
    height: 30px;
    width: 100vw;
    background: white;
    padding: 16px 16px 10px;
    img {
      width: 20px;
    }
    .header-title {
      margin-left: 20px;
      font-size: 18px;
      color: #ee0a24;
      font-weight: bold;
      vertical-align: middle;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    background: white;
    padding: 5px 16px 5px;
    border-bottom: @borderBtm;
    li {
      border-radius: 20px;
      margin: 5px 7px 5px 0;
      padding: 5px 8px;
      color: #666;
      &.active {
        background: rgba(235, 5, 5, 0.1);
        color: #eb0505;
      }
    }
  }
  // .sticky{
  //   position: fixed;
  //   top: 0px;
  //   width: 100%;
  //   z-index: 10;
  // }
  .card{
    padding: 0 16px;
  }
}
</style>