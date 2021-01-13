<template>
  <div class="SearchHistory">
    <div class="header">
      <span>搜索历史</span>
      <van-icon name="delete-o" @click="deleHistory"/>
    </div>
    <ul>
      <li
        v-for="(item, index) in words"
        :key="index"
        @click="
          $router.push({ name: 'SearchrResult', query: { value: item } })
        "
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  data() {
    return {
      words: [],
    };
  },
  created() {
    let history = [...new Set(localStorage.getItem("history").split(","))];
    this.words = history;
    // console.log(history);
  },
  methods:{
      ...mapMutations(['toggleHistory']),
      deleHistory(){
        //   console.log(11111);
          localStorage.removeItem("history");
          this.words="";
        //   console.log(this.toggleHistory(false));
          this.toggleHistory(false);
      }
  },
};
</script>

<style lang="less">
.SearchHistory {
  margin-top: 15px;
  .header {
    font-size: 14px;
    padding: 10px 0;
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
    .van-icon-delete-o {
      float: right;
      line-height: 16px;

      vertical-align: middle;
      font-size: 16px;
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