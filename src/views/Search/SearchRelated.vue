<template>
  <div class="SearchRelated">
    <hot-search></hot-search>
    <search-history v-if="$store.state.historyShow"></search-history>
    <hot-words></hot-words>
  </div>
</template>

<script>
import HotSearch from "./HotSearch";
import SearchHistory from "./SearchHistory";
import HotWords from "./HotWords";
export default {
  components: {
    HotSearch,
    SearchHistory,
    HotWords,
  },
  data() {
    return {
      history: localStorage.getItem("history"),
    };
  },
};
</script>

<style lang="less">
.SearchRelated {
  padding: 0 10px 0px 16px;
}
</style>