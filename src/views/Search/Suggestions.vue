<template>
  <div class="Suggestions">
    <ul>
      <li
        v-for="(item, index) in suggestions"
        :key="index"
        @click="
          $router.push({ name: 'SearchrResult', query: { value: value } })
        "
      >
        <span class="iconfont icon-book-thick"></span>
        <span>{{ item.text }}</span>
      </li>
    </ul>

    <!-- <div class="notResult" v-if="suggestions.length == 0">
      暂无搜索结果
      Toast('提示内容');
    </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  props: ["value"],
  data() {
    return {
      suggestions: [],
      timer: null,
    };
  },
  mounted() {
    // this.$toast({
    //     message:"暂无搜索建议",
    //     onClose:()=>{
    //         this.$router.back();
    //     }
    // });
  },
  created() {
    // console.log("laile");
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      window
        .axios(
          `http://b.zhuishushenqi.com/books/auto-suggest?query=${this.value}&packageName=com.ushaqi.zhuishushenqi&userid=yk_c996bc45cee0a87d9c622`
        )
        .then((e) => {
          // console.log(e.data.keywords.length);
          this.suggestions = e.data.keywords;
          if (this.suggestions.length <= 0) {
            this.$toast({
              message: "暂无搜索建议",
              // onClose: () => {
              //   this.$router.push({name:"Search"});
              // },
            });
            return;
          }
        });
    }, 1000);
  },
  watch: {
    value(n) {
      if (n.length == 0) {
        this.$router.push({ name: "Search" });
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        window
          .axios(
            `http://b.zhuishushenqi.com/books/auto-suggest?query=${n}&packageName=com.ushaqi.zhuishushenqi&userid=yk_c996bc45cee0a87d9c622`
          )
          .then((e) => {
            // console.log(e.data.keywords.length);
            if (this.suggestions.length <= 0) {
              this.$toast({
                message: "暂无搜索建议",
              });
              return;
            }
            this.suggestions = e.data.keywords;
          });
      }, 1000);
    },
  },
  beforeRouteLeave(to, from, next) {
    clearTimeout(this.timer);
    next();
  },
};
</script>

<style lang="less">
.Suggestions {
  margin-top: 60px;
  padding: 0 16px;
  ul {
    li {
      font-size: 14px;
      padding: 15px 0;
      border-bottom: @borderBtm;
      span:first-child {
        margin-right: 8px;
      }
    }
  }
}
</style>