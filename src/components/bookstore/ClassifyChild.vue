<template>
  <div class="ClassifyChild-child" >
    <div class="classify-con">
      <div class="classify-con-child">
        <div class="title">
          <img src="../../assets/images/line.png" alt="" />
          <span><slot></slot></span>
          <img src="../../assets/images/line.png" alt="" />
        </div>
        <ul>
          <li v-for="(item, index) in books" :key="index">
            <div class="bookMsg">
              <h3>{{ item.name }}</h3>
              <p>{{ item.bookCount }}本</p>
            </div>
            <div class="bookImg">
              <img
                v-for="(img, index) in item.bookCover"
                :key="index"
                :src="'//statics.zhuishushenqi.com' + img"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["books"],
};
</script>

<style lang="less">
.ClassifyChild-child {
    // padding-bottom: 20px;
  .classify-con {
    .classify-con-child {
      ul {
        padding: 0px 8px;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        li {
          width: 48.5%;
          height: 64px;
          background: #f7f7f9;
          margin-bottom: 10px;
          display: flex;
          .bookMsg {
            flex: 1;
            display: grid;
            place-content: center;
            h3 {
              color: #616166;
            }
            p {
              margin-top: 6px;
              margin-left: -4px;
              font-size: 12px;
              color: #9b9b9b;
              transform: scale(0.8);
            }
          }
          .bookImg {
            flex: 1;
            position: relative;
            img {
              position: absolute;
              bottom: 0;
              &:nth-child(1) {
                height: 90%;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10;
              }
              &:nth-child(2) {
                left: 3px;
                bottom: 2px;
                height: 80%;
              }
              &:nth-child(3) {
                right: 5px;
                height: 70%;
                bottom: 2px;
              }
            }
          }
        }
      }
    }
    .title {
      padding: 18px 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #d6d5db;
      img {
        width: 37%;
        transform: scaleY(0.3);
      }
    }
  }
}
</style>