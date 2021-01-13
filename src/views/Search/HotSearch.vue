<template>
  <div class="HotSearch">
    <div class="header">
      <span>搜索热词</span>
      <span>更多<van-icon name="arrow" /></span>
    </div>
    <ul>
      <li
        v-for="(item, index) in RanBooks"
        :key="index"
        @click="
          $router.push({ name: 'SearchrResult', query: { value: item.word } })
        "
      >
        {{ item.word }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    window
      .axios(
        "http://b.zhuishushenqi.com/hotword/list?type=normal&packageName=com.ushaqi.zhuishushenqi"
      )
      .then((e) => {
        // console.log(e.data.searchHotWords);
        this.books = e.data.searchHotWords;
      });
  },
  computed: {
    RanBooks() {
      return this.books.slice(0, 10).sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style lang="less">
.HotSearch {
  .header {
    font-size: 14px;
    padding: 10px 0;
    margin-top: 55px;
    color: rgb(189, 187, 187);
    &:after {
      content: "";
      display: block;
      height: 0;
      clear: both;
    }
    span:first-child {
      float: left;
      line-height: 16px;
    }
    span:last-child {
      float: right;
      line-height: 16px;
      .van-icon-arrow {
        vertical-align: middle;
        margin-top: -2px;
        font-size: 14px;
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      background: #f1f1f1;
      border-radius: 20px;
      padding: 9px 10px;
      box-sizing: border-box;
      margin-right: 5px;
      margin-top: 8px;
      font-size: 13px;
    }
  }
}
</style>