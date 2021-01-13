<template>
  <div class="VipandFree">
    <!-- 书库以及vip排行 -->
    <div class="link">
      <div class="inner">
        <div class="stack-seniority">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAG1BMVEVHcEzcu2LZt1/auGHZt1/Vs1zQr1ffvWXauGBHtq6yAAAABXRSTlMAQtcdlp2w798AAAGMSURBVEjHzZUxbgMhEEXtG2yUI6RYH8BS2kgpcoJB1LbhBJGgjoTg2IEZlsV4BpcJlaX9evz5fMzh8G/WeXUL/YKyrLWXz/770bleYJTKkqUTvO8CnQXK5O/22gm+OkIohKK4dYJ1IOAWl07g7j0Uk3nxAo0AJQuKB1BzAhg7IxQAPPEA1jwhzEyih5lJymFG0NsOjOBlIwgezulty4ElHFNKH5ikAm7M15NP6WfRLadRsPosSN9yDjHRknKILmZJCAFLyXmIiNDYB8N58OiBEGxQSCiAsoPhPPi4EQy7RSpbVJPsYdU5QSJkj23MOgZLwDFBIJAHLUVdPSCBzyH58jm02z3m4N0+BdsHJPRJP3jAs9D0/6Cmpwl8qzEojVuwh0U5VAJ7WJhDKFPMctgIRsqheoAJAS8O34faSek0t05qsQ++dhLa7RX6EKT/SeoDEeQcglz72gcNosmdoB7vxdpySKFd7svwoFAdYM/hNjxJkRqzJ3kdHjXKAfZGLcOzSKUOUHO4fxb/dv0C/A3RY3T+ShwAAAAASUVORK5CYII="
          />
          <div class="msg">
            <p>VIP书库</p>
            <p>381828本书</p>
          </div>
        </div>
        <div class="stack-seniority" @click="jumpRank">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEVHcEzUslrcumHXtV3dumPYt17Zt1/btlrZt1/fvWTZt1/Vs1vXtV3auWDRsFjPrVYVDYbfAAAACXRSTlMAgTnYhMNaDqrGVvuCAAABnklEQVRIx9WVv0vDQBTHr1VyjsXNrbqIq6FgByWLQzdBCnU7UMEOYrTg7CIquCrckH8gxL8gHQVBb3OKkEGkjglY6mjNXX609yONIEJ9633yfe99eLQATF/NPUx+P70uADrdAgDM/AegjH5jsXzeZNXKSzn07xyHELd7Lz3BPfrR+ottE0K6rluVZrduog6+b0cBxHXdigi0UaMaAXGCCtg3F1AGPCkAoD2brEVeAry6ABMTOrcgAR7VCY21SxRv4aiBzWYTCVvAZdk05+EoOMteTpZomVwC7B2/p++zOCrLMrgt4LyWAW0KeBTgPGxspUBdlQDA4msKYJaADc6DtgoH44CHPYPzAHsHQoJv8B523yocYGEj9x6wMKQa8KQtxARs5N4DVnjQavp2TW9V5RaJh1IwpPWR66EUBGEEDJRDJgAjRkCaMAJCHhBM0oQvPoHfQm7heZwHBoTjgCUliDOIHgJmQt7CyWuh2IJvIdzDjzyEBR7CYg/DP/cQKBOIImFHfQ90yD4DVtiMyov6jH8C64kHPSsUA300Hf/V356SpBGx/yAdAAAAAElFTkSuQmCC"
          />
          <div class="msg">
            <p>VIP排行</p>
            <p>每日更新</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 类型导航 -->
    <div class="Booktype">
      <ul>
        <li :class="{ active: active == 0 }" @click="active = 0">男生</li>
        <li :class="{ active: active == 1 }" @click="active = 1">女生</li>
        <li :class="{ active: active == 2 }" @click="active = 2">出版</li>
      </ul>
    </div>

    <!-- 重磅推荐 -->
    <manitoNewZuo :books="recommend"></manitoNewZuo>

    <!-- 热门畅销 -->
    <GeneralComThree :suspense="hot"></GeneralComThree>

    <!-- 都市休闲 -->
    <GeneralComThree :suspense="leisure"></GeneralComThree>

    <!-- 热血玄幻，王者归来 -->
    <GeneralComThree :suspense="blood"></GeneralComThree>

    <!-- 奇闻推理 -->
    <GeneralComThree :suspense="anecdote"></GeneralComThree>

    <!-- 唐宋明清 -->
    <GeneralComThree :suspense="dynasty"></GeneralComThree>
  </div>
</template>

<script>
import manitoNewZuo from "../views/manitoNewZuo";
import GeneralComThree from "../views/GeneralComThree";
export default {
    props:[
        'recommend',
        'hot',
        'leisure',
        'blood',
        'anecdote',
        'dynasty',
        ],
    components:{
            manitoNewZuo,
    GeneralComThree,
    },
      data() {
    return {
      banner: "",
      active: 0,
    //   recommend: [],
    //   hot: [],
    //   leisure: [],
    //   blood: [],
    //   anecdote: [],
    //   dynasty: [],
    };
  },
//   activated() {
//     this.getType();
//   },
  watch: {
    active(n) {
      switch (n) {
        case 0:
          this.$parent.getType("f47ef06703de47bea719dd9e7bda5381");
          break;
        case 1:
          this.$parent.getType("6a70a188b01e4d6c8c9749240a309ebb");
          break;
        case 2:
          this.$parent.getType("1369a8d6e24f4c239205c74f7d4fbc2a");
          break;
      }
    },
  },
  methods: {
    jumpRank() {
      this.$router.push({
        name: "RankingList",
        query: {
          type:
            this.active == 0 ? "male" : this.active == 1 ? "female" : "publish",
          listType: this.$route.path=='Vip'?'Vip':'Free',
        },
      });
    },
  },
}
</script>

<style>
</style>