<template>
  <div class="Search">
    <div class="back">
      <span class="iconfont icon-fanhui1" @click="back"></span>
      <div class="sousuo">
        <input
          type="text"
          placeholder="请输入您想搜索的小说"
          v-model.trim="value"
          @keyup.enter="enter"
        />
        <van-icon name="clear" v-show="value" @click="clear" />
      </div>

      <button class="submit" @click="submit">搜索</button>
    </div>

    <router-view :value="value"></router-view>
    <!-- <search-related></search-related> -->
    <!-- <component :is="currCom"></component> -->
  </div>
</template>

<script>
// import SearchRelated from "./SearchRelated";
// import Suggestions from "./Suggestions"
// import SearchrResult from "./SearchrResult"
import { mapMutations } from "vuex";
export default {
  // components: {
  //   SearchRelated,
  //   Suggestions,
  //   SearchrResult,
  // },
  data() {
    return {
      value: "",
      timer: null,
      history: [localStorage.getItem("history")],
    };
  },
  watch: {
    value() {
      if (this.$route.fullPath == "/Search/Suggestions") return;
      if (this.value == "") {
        clearTimeout(this.timer);
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$router.push({ name: "Suggestions" });
      }, 300);
    },
  },
  methods: {
    ...mapMutations(["toggleHistory"]),
    enter() {
      if (this.value == "") return;
      this.saveHistory();
      this.toggleHistory(true);
      this.$router.push({
        name: "SearchrResult",
        query: { value: this.value },
      });
    },
    submit() {
      this.$router.push({
        name: "SearchrResult",
        query: { value: this.value },
      });
      this.saveHistory();
      this.toggleHistory(true);
    },
    clear() {
      this.value = "";
    },
    back() {
      if (this.$route.fullPath != "/Search") {
        this.$router.replace("/Search");
      } else {
        this.$router.replace("/StoreChoiceness");
      }
    },
    saveHistory() {
      if (this.value == "") return;
      this.history.push(this.value);
      localStorage.setItem("history", this.history.slice(1));
    },
  },
};
</script>

<style lang="less">
.Search {
  .back {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    padding: 16px 12px 12px;
    display: flex;
    align-items: center;
    background: white;
    .icon-fanhui1 {
      font-size: 22px;
      margin-right: 10px;
    }
    .sousuo {
      position: relative;
      height: 32px;
      flex-basis: 75vw;
      input {
        height: 32px;
        width: 100%;
        border-radius: 20px;
        text-indent: 1.5em;
        font-size: 14px;
        background: #f1f1f1;
      }
      .van-icon-clear {
        position: absolute;
        right: 5px;
        line-height: 32px;
        font-size: 16px;
        color: #b6b3b3;
      }
    }
    .submit {
      font-size: 15px;
      margin-left: 10px;
      background: white;
    }
  }
}
</style>