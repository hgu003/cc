<template>
  <div class="StoreClassify">
    <div
      class="StoreClassify-child"
      v-for="(item, index) in StoreClassify"
      :key="index"
    >
      <h1>{{ item.title }}</h1>
      <p>{{ item.fullDes }}</p>
      <img :src="item.img" />
    </div>
    <div class="borderbtm"></div>
  </div>
</template>

<script>
export default {
  props: ["StoreClassify"],
};
</script>

<style lang="less">
.StoreClassify {
  background: white;
  padding: 30px 16px 0px;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  flex-wrap: wrap;
  .StoreClassify-child {
    flex-basis: 43vw;
    padding-bottom: 25px;
    h1 {
      font-weight: bolder;
      font-size: 16px;
    }
    p {
      padding: 10px 0;
      color: #8a8a8f;
    }
    img {
      border-radius: 3px;
      width: 100%;
    }
  }
  .borderbtm {
    width: 100%;
    border-bottom: @borderBtm;
  }
}
</style>