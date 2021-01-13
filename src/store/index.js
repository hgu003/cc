import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navbg:'',
    cacheNav:'/StoreChoiceness',
    historyShow:false,
  },
  mutations: {
    //切换背景颜色
    changenavbg(state,bg="#f03e3e"){
      bg=bg?bg:"#f03e3e";
      state.navbg = bg;
    },
    //切换顶部导航
    toggleNav:(state,index)=>state.cacheNav = index,
    //历史记录组件隐藏切换
    toggleHistory:(state,show)=>state.historyShow = show,
  },
  actions: {
    // getCatalog({commit},book){
    //   commit('getCatalog',book.book._id);
    // },
    // getCatalogCon({commit},link){
    //   commit('getCatalogCon',link);
    // },
  },
  modules: {
  }
})
