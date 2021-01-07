<template>
  <div class="classify">
    <van-sticky>
      <div class="classify-header" @click="$router.back()">
        <img src="../../assets/images/back.png" alt="" />
        <span class="classify-header-title">分类</span>
      </div>
    </van-sticky>

    <van-sticky :offset-top="52">
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        height="95vh"
      >
        <template #content>
          <div class="classify-content">
            <div class="classify-con-header">
              <img
                src="https://plf-new.zhuishushenqi.com/management/images/20191106/a50237f130674602a99fd977b6d758c8.png"
              />
              <img
                src="https://plf-new.zhuishushenqi.com/management/images/20191106/5fc05fbf54ce4e268a26ef6a932520af.png"
              />
              <img
                src="https://plf-new.zhuishushenqi.com/management/images/20191106/65e332503a6b4886bd42178da2f00c7b.png"
              />
              <img
                src="https://plf-new.zhuishushenqi.com/management/images/20191106/8b067dbfc7a94de2b2ee9555b25795d5.png"
              />
            </div>
            <!-- 男生 -->
            <classify-child :books="male.male" ref="male">男生</classify-child>
            <!-- 女生 -->
            <classify-child :books="male.female" ref="female"
              >女生</classify-child
            >
            <!-- 出版 -->
            <classify-child :books="male.press" ref="press"
              >出版</classify-child
            >
          </div>
        </template>
      </van-tree-select>
    </van-sticky>
  </div>
</template>

<script>
import ClassifyChild from "./ClassifyChild";
export default {
  components: {
    ClassifyChild,
  },
  data() {
    return {
      male: [],
      items: [
        {
          text: "男生",
        },
        { text: "女生" },
        { text: "出版" },
      ],
      activeId: 1,
      activeIndex: 0,
    };
  },
  created() {
    this.$store.commit("toggleBottomNavShow", false);
    window.axios("https://b.zhuishushenqi.com/category/statics").then((e) => {
      let data = e.data;
      this.male = data;
    });
  },
  mounted() {
    this.classifyScroll();
  },
  methods: {
    classifyScroll() {
      let that = this;
      let classifycontent = document.querySelector(".van-tree-select__content");
      classifycontent.onscroll = function () {
        let elementArr = [
          that.$refs.male.$el.offsetTop / 1.5,
          that.$refs.female.$el.offsetTop / 1.5,
          that.$refs.press.$el.offsetTop / 1.5,
        ];

        var activeindex = 0;
        elementArr.forEach((item, index) => {
            activeindex = this.scrollTop > item ?index:activeindex;
        });
        that.activeIndex = activeindex;
      };
    },
  },
  //   beforeRouteEnter(to, from, next) {
  //     window.axios("https://b.zhuishushenqi.com/category/statics").then((e) => {
  //       let data = e.data;
  //       next((vm) => {
  //         vm.bootList.push(data.male, data.female, data.press);
  //       });
  //     });
  //   },
};
</script>

<style lang="less">
.classify {
  // 头部返回
  .classify-header {
      height: 30px;
    width: 100vw;
    background: white;
    padding: 16px;
    img {
      width: 20px;
    }
    .classify-header-title {
      margin-left: 20px;
      font-size: 18px;
      color: #ee0a24;
      font-weight: bold;
      vertical-align: middle;
    }
  }

  //   左侧导航
  .van-tree-select {
    .van-tree-select__nav {
      flex: none;
      background: white;
    }
    .van-sidebar {
      border-right: 1px solid #ebedf0;
      .van-sidebar-item {
        background: white;
        text-align: center;
      }
      .van-sidebar-item--select::before {
        margin-left: 16px;
        width: 2px;
      }
    }
    // 右侧头部
    .van-tree-select__content {
      .classify-con-header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        img {
          width: 45%;
          height: 52px;
          margin-top: 15px;
          border-radius: 3px;
        }
      }
      .classify-content{
          padding-bottom: 100px;
      }
    }
  }
}
</style>