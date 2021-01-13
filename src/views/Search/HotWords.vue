<template>
  <div class="HotWords">
    <h1 class="title">全站热搜</h1>
    <ul>
      <li v-for="(item, index) in newHotWords" :key="index"
      @click="
          $router.push({ name: 'BookInfo', params:{id:item.book} })
        "
      >
        <div
          class="bg"
          :style="{ background: bg[index] }"
          v-if="index < 3"
        ></div>
        <img :src="'http://statics.zhuishushenqi.com' + item.cover" alt="" />
        <div class="bookMsg">
          <h1>{{ item.word }}</h1>
          <p :style="{ color: index < 3 ? 'red' : '' }">
            <van-icon name="fire" v-if="index < 3" />{{
              item.totalFollower | Popularity
            }}人气
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newHotWords: [],
      bg: ["#f6c0c7", "#fce7d3", "#fcfadb"],
    };
  },
  created() {
    window
      .axios(
        "http://b.zhuishushenqi.com/book/hot-word?appName=zhuishu&packageName=com.ushaqi.zhuishushenqi"
      )
      .then((e) => {
        // console.log(e.data.newHotWords);
        this.newHotWords = e.data.newHotWords;
      });
  },
  filters: {
    Popularity(val) {
      return val >= 10000 ? parseFloat(val / 10000).toFixed(1) + "万" : val;
    },
  },
};
</script>

<style lang="less">
.HotWords {
  margin-top: 15px;
  .title {
    font-size: 14px;
    color: rgb(189, 187, 187);
    padding: 5px 0 10px;
  }
  ul {
    li {
      position: relative;
      border-radius: 3px;
      display: flex;
      margin: 10px 0 15px;
      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        z-index: -1;
        border-radius: 3px;
      }
      img {
        height: 65px;
        border-radius: 3px;
        box-shadow: 0 0 10px 0 #ccc;
      }
      .bookMsg {
        display: grid;
        flex-direction: column;
        place-content: center;
        margin-left: 10px;
        h1 {
          font-size: 16px;
        }
        p {
          margin-top: 15px;
          color: rgb(136, 136, 136);
          .van-icon-fire {
            vertical-align: top;
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>