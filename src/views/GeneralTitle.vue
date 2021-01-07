<template>
  <div class="store-title">
    <h2>
      <slot></slot>
    </h2>
    <div @click="RouterPush">
      <span>更多</span>
      <span class="iconfont icon-iconfontyoujiantou" ></span>
    </div>
  </div>
</template>

<script>
export default {
  props:['goto'],
  methods:{
    RouterPush(){
      this.$router.push({
        name:this.goto.name,
        query:this.goto.list
      })
    }
  },
};
</script>

<style lang="less">
.store-title {
  background: white;
    padding: 20px 16px 15px;
    height: 20px;
  h2 {
    float: left;
    font-weight: bolder;
    font-size: 16px;
  }
  div {
    float: right;
    font-size: 12px;
    color: #9b9ba3;
    .iconfont {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>