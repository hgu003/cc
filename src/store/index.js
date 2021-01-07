import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navbg:'',
    bottomNavShow:true,
    cacheNav:'/StoreChoiceness',
    bookChapter:'',
    currentChapter:'',
    bookCon:'',
  },
  mutations: {
    changenavbg(state,bg){
      state.navbg = bg;
    },
    toggleBottomNavShow(state,show){
      state.bottomNavShow = show;
    },
    toggleNav(state,index){
      state.cacheNav = index;
    }
    // getCatalog(state,id){
    //   console.log('我要进来了');
    //   window
    //   .axios(
    //     ` http://novel.kele8.cn/book-sources?view=summary&book=${id}`
    //   )
    //   .then((id) => {
    //     window
    //       .axios(`http://novel.kele8.cn/book-chapters/${id.data[0]._id}`)
    //       .then((e) => {
    //         state.bookChapter = e.data.chapters;
    //       });
    //   });
    // },
    // getCatalogCon(state,link){
    //   window.axios('http://novel.kele8.cn/chapters/'+link)
    //   .then(result=>{
    //     // console.log(state,link);
    //     console.log(result);
    //   })
    //   console.log(state);
    //   console.log(link);
    // },
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
