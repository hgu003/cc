<template>
  <div class="store-list">
    <div
      class="store-list-child"
      v-for="(item, index) in bookList"
      :key="index"
    >
      <div
        class="header"
        :style="{ background: `url(${item.bgImg}),url(${item.img})` }"
      >
        <h1>{{ item.title }}<van-icon name="arrow" /></h1>
        <span>{{ item.simpleDes }}</span>
      </div>
      <ul>
        <li v-for="(book, index) in item.books" :key="index">
          <img :src="bookImgs[index]" alt="" />

          <span class="title">{{ book.title }}</span>
          <span class="tag">{{ book.minorCate }}</span>
        </li>
      </ul>
    </div>
    <div class="more">
      <div>
        <span
          >查看更多
          <span class="iconfont icon-gengduo1"> </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bookList"],
  data() {
    return {
      bookImgs: [
        require("../../assets/images/第一名.png"),
        require("../../assets/images/第二名.png"),
        require("../../assets/images/第三名.png"),
        require("../../assets/images/4.png"),
        require("../../assets/images/5.png"),
      ],
    };
  },
};
</script>

<style lang="less">
.store-list {
  background: #f7f7f7;
  padding: 5px 5px 15px;
  box-sizing: border-box;
  position: relative;
  display: block;
  // overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  height: 350px;
  .store-list-child {
    display: inline-block;
    margin: 0 8px;
    width: 240px;
    border-radius: 10px;
    .header {
      height: 90px;
      background-repeat: no-repeat !important;
      background-size: 40%, 100% !important;
      background-position: right bottom, 0px 25px !important;
      padding: 35px 15px 20px;
      color: white;
      box-sizing: border-box;

      h1 {
        font-weight: bolder;
        font-size: 16px;
        padding-bottom: 10px;
        box-sizing: border-box;
        .van-icon {
          vertical-align: middle;
          margin-top: -2px;
        }
      }
    }
    ul {
      background: white;
      border-radius: 0 0 10px 10px;
      padding-bottom: 5px;

      li {
        padding: 10px;
        font-size: 16px;
        img {
          width: 25px;
          vertical-align: middle;
        }
        .title {
          padding-left: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          width: 60%;
          vertical-align: middle;
          font-size: 14px
        }
        .tag {
          float: right;
          margin-top: 2px;
          padding: 3px 3px;
          font-size: 12px;
          border-radius: 3px;
          border: 1px solid #ccc;
          color: rgb(151, 150, 150);
        }
      }
      li:first-child {
      }
    }
  }

  .more {
    display: inline-block;
    background: white;
    height: 295px;
    width: 100px;
    border-radius: 10px;
    margin-right: 15px;
    margin-left: 5px;
    position: relative;
    top: -104px;
    padding-top: 1px;
    > div {
      margin-top: 155px;
      width: 100%;
      text-align: center;
      span {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .store-list-child ul,
  .more {
    box-shadow: 0 0px 2px 0 rgba(63, 62, 62, 0.2);
  }
}
</style>