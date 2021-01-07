<template>
  <div class="Ranking">
    <div class="Sucktop">
      <!-- 顶部返回及标题 -->
      <van-nav-bar
        title="排行榜"
        left-arrow
        @click-left="$router.back()"
        :fixed="true"
        :placeholder="true"
        :border="false"
      >
        <template #left>
          <van-icon name="arrow-left" color="#666" size="23" />
        </template>
        <template #right>
          <van-icon name="search" color="red" size="23" />
        </template>
      </van-nav-bar>

      <!-- 头部图片 -->
      <div class="Ranking-header">
        <img
          :src="item.bgImg"
          alt=""
          v-for="(item, index) in headerBooks"
          :key="index"
        />
      </div>
      <!-- 导航 -->
      <van-tabs v-model="active" animated>
        <van-tab title="男频"></van-tab>
        <van-tab title="女频"></van-tab>
        <van-tab title="出版"></van-tab>
      </van-tabs>

      <!--榜单选择 -->
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        @click-nav="typeToggle"
      >
        <template #content>
          <van-card
            :desc="item.shortIntro"
            v-for="(item, index) in rightContent"
            :key="index"
            class="van-skeleton"
            @click='ccc(item._id)'
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
              <img :src="item.cover" alt="" class="book"/>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerBooks: [],
      active: 0,
      // 榜单
      items: [{text:'111'},{text:'444'}],
      activeId: 1,
      activeIndex: 0,
      leftNav: [{text:'111'},{text:'444'}],
      rightContent: [],
      loading: true,
    };
  },
  beforeCreate() {
    this.$store.commit("toggleBottomNavShow", false);
  },
  beforeRouteEnter(to, from, next) {
    window
      .axios(
        "https://b.zhuishushenqi.com/v2/category/ranklist?node=8c31c6a912464c3e9de4cc6c2c8c402a&type=&packageName=&token=&userid="
      )
      .then((e) => {
        next((vm) => {
          vm.headerBooks = e.data.data.spread[0].advs;
          vm.leftNav = e.data.data.nodes;
          vm.items = vm.leftNav[2].nodes.map((item) => {
            return { id:item.id, text: item.title };
          });
          vm.getTypeBooks(vm.items[0].id);

        });
      });
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
    ccc(id){
      this.$router.push({name:'BookInfo',query:{id:id}})

    }
  },
  // computed: {
  //   leftNavAlter() {
  //     switch (this.active) {
  //       case 0:
  //         e.data.data.nodes[2].nodes.map((item) => {
  //           return { ...item, text: item.title };
  //         });
  //       case 1:
  //         e.data.data.nodes[1].nodes.map((item) => {
  //           return { ...item, text: item.title };
  //         });
  //       default:
  //         e.data.data.nodes[1].nodes.map((item) => {
  //           return { ...item, text: item.title };
  //         });
  //     }
  //   },
  // },
};
</script>
<style lang="less">
.Ranking {
  .Sucktop {
    background: white;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    &:after {
      content: "";
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
  .van-nav-bar__content {
    .van-nav-bar__title {
      font-size: 18px;
    }
    .van-nav-bar__left {
      padding-left: 6px;
    }
    .van-nav-bar__right {
      padding-right: 6px;
    }
  }
  .Ranking-header {
    display: flex;
    justify-content: space-around;
    // margin-top: 15px;
    background: white;
    img {
      width: 45%;
      height: 60px;
      border-radius: 3px;
    }
  }

  //   导航
  .van-tabs {
    padding: 0 10px;
    .van-tabs__wrap {
      border-bottom: @borderBtm;
    }
  }

  //榜单
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
      .van-tree-select__nav-item{
        padding: 18px 12px;
      }
    }
    .van-sidebar {
    }
  }

  .van-card {
    background-color: white;
    padding: 0;
    padding-bottom: 5px;
    .van-card__thumb {
      position: relative;
      height: @ImgHeight;
      width: 70px;
      img{
        border-radius: 0;
      }
      .book {
        height: @ImgHeight;
        width: 70px;
        border-radius: 3px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
        position: relative;
      }
      &:after {
        content: "";
        .Imgbg();
      }
       .vip {
        width: 28px !important;
        position: absolute;
        left: 0px;
        top: 4px;
        z-index: 1;
      }
      .finish {
        // width: 30px;
        height: 20px !important;
        position: absolute !important;
        right: 0px;
        top: 2px;
        z-index: 10;
      }
    }
    .van-ellipsis {
      margin-top: 5px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: inherit;
      line-height: 16px;
      max-height: 32px;
    }
    .van-card__bottom {
      display: flex;
      align-items: center;
      height: 25px;
      line-height: 15px;
      width: 100%;
      .tag {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 1;
        > div {
          padding: 2px 5px;
          border-radius: 20px;
          color: #858383;
          font-size: 12px;
          &:first-child {
            color: #777;
            background: #efeff4;
            zoom: 0.7;
            margin-right: 10px;
          }
          &:last-child {
            background: rgba(235, 5, 5, 0.1);
            color: #eb0505;
            zoom: 0.7;
          }
        }
      }
      .auther {
        zoom: 0.9;
      }
      .van-card__num {
        // display: flex;
        // justify-items: flex-start;
        // align-items: flex-end;
        flex: 1;
        > div {
          padding: 2px 5px;
          border-radius: 20px;
          color: #858383;
          float: right;
          &:last-child {
            color: #777;
            background: #efeff4;
            transform: scale(0.7) translateX(62%);
          }
          &:first-child {
            background: rgba(235, 5, 5, 0.1);
            color: #eb0505;
            transform: scale(0.7) translateX(18%);
          }
        }
      }

      .van-card__price,
      .van-card__desc {
        color: #858383;
      }
    }

    .van-card__desc {
      margin-top: 18px;
    }

    .van-card__header{
      width: 100%;
      .van-card__content {
      h1 {
        font-size: 14px;
        font-weight: 600;
      }
    }
    }
    
  }
}
</style>