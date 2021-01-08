<template>
  <div class="RankList">
    <van-tree-select
      :items="items"
      :main-active-index.sync="activeIndex"
      @click-nav="typeToggle"
    >
      <template #content>
        <van-card
          :desc="item.shortIntro"
          v-for="(item, index) in rightContent"
          :key="index"
          class="van-skeleton"
          @click="ccc(item._id)"
        >
          <template #title>
            <h1>{{ index + 1 }}.{{ item.title }}</h1>
          </template>
          <template #thumb>
            <img
              src="../../assets/images/bookvip.png"
              alt=""
              class="vip"
              v-if="item.allowMonthly"
            />
            <img
              src="../../assets/images/已完结.png"
              alt=""
              class="finish"
              v-if="!item.isSerial"
            />
            <img :src="item.cover" alt="" class="book" />
          </template>

          <template #bottom>
            <div class="auther">
              {{ item.author }}
            </div>
            <div class="tag">
              <div>{{ item.minorCate }}</div>
              <div>{{ item.bookIndicator }}</div>
            </div>
          </template>
        </van-card>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  props: ["active",'leftNav'],
  data() {
    return {
      items:[],
      activeIndex:0,
      rightContent:[],
    };
  },
  watch: {
    active(n) {
      switch (n) {
        case 0:
          this.items = this.leftNav[2].nodes.map((item) => {
            return { id:item.id, text: item.title };
          });
          break;
        case 1:
          this.items = this.leftNav[1].nodes.map((item) => {
            return { id:item.id, text: item.title };
          });
          break;
        default:
          this.items = this.leftNav[0].nodes.map((item) => {
            return { id:item.id, text: item.title };
          });
          break;
      }

      // 顶部男女生切换右侧导航回归第一个
      this.activeIndex = 0;
      this.getTypeBooks(this.items[0].id);
    },
  },
  activated(){
    if(this.$route.query.listType){
      let typeIndex = this.items.findIndex(item=> item.text=="VIP榜");
      this.activeIndex = typeIndex;
      this.getTypeBooks(this.items[typeIndex].id);
    }
  },
    methods: {
      //右侧数据封装
      getTypeBooks(type) {
        window
          .axios(
            `https://b.zhuishushenqi.com/category/rankinfo?ajax=ajax&size=100&st=1&node=${type}&token=&type=&packageName=&userid=`
          )
          .then((result) => {
            this.rightContent = result.data.book;
          });
      },
      //数据切换
      typeToggle(index) {
        this.getTypeBooks(this.items[index].id);
        // console.log(index);
      },
      ccc(id) {
        this.$router.push({ name: "BookInfo", query: { id: id } });
      },
    },
  
};
</script>

<style lang="less">
.RankList {
  .van-tree-select {
    height: 80% !important;
    .van-tree-select__content {
      padding: 10px;
    }
    .van-tree-select__nav {
      flex: none;
      width: 70px;
      background: white;
      border-right: @borderBtm;
      .van-sidebar-item--select {
        background: #f7f8fa !important;
      }
      .van-sidebar-item {
        background: white;
        &:before {
          width: 2px;
        }
      }
      .van-tree-select__nav-item {
        padding: 18px 12px;
      }
    }
    .van-sidebar {
    }
  }
}
</style>