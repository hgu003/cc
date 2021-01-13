import Vue from 'vue'
import VueRouter from 'vue-router'
import bookshelf from '../components/bookshelf/BookShelf.vue'
import bookstore from '../components/bookstore/BookStore.vue'
import Male from '../components/bookstore/Male/Male.vue'
import Female from '../components/bookstore/Female/Female.vue'
import GeneralComOneChild from '../views/GeneralComOneChild.vue'
// import Ranking from '../views/Ranking/Ranking.vue'
// import RankList from '../views/Ranking/RankList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/bookshelf',
    name: 'bookshelf',
    meta: { bottomShow: true },
    component: bookshelf
  },
  {
    path: '/',
    name: 'bookstore',
    component: bookstore,
    redirect: 'StoreChoiceness',
    children: [
      { path: '/StoreChoiceness', name: 'StoreChoiceness', meta: { bottomShow: true }, component: () => import('../components/bookstore/StoreChoiceness.vue') },
      { path: 'NewBook', name: 'NewBook', meta: { bottomShow: true }, component: () => import('../components/bookstore/NewBook/NewBook.vue') },
      { path: 'Male', name: 'Male', meta: { bottomShow: true }, component: Male },
      { path: 'Female', name: 'Female', meta: { bottomShow: true }, component: Female },
      {
        path: '/Publish',
        name: 'Publish',
        meta: { bottomShow: true },
        component: () => import('../components/bookstore/Publish/Publish.vue'),
      },
    ]
  },
  {
    path: '/discover',
    name: 'discover',
    meta: { bottomShow: true },
    component: () => import('../components/discover/Discover.vue')
  },
  {
    path: '/account',
    name: 'account',
    meta: { bottomShow: true },
    component: () => import('../components/account/Account.vue')
  },
  //高分神作等的跳转
  {
    path: '/GeneralComOneChild',
    name: 'GeneralComOneChild',
    component: GeneralComOneChild,
    props: (route) => ({ query: route.query })
  },
  //分类
  {
    path: '/Classify',
    name: 'Classify',
    component: () => import('../components/bookstore/Classify.vue')
  },
  //具体分类
  {
    path:"/category",
    name:"category",
    component:()=>import("../views/category.vue"),
    props:(route)=>({query:route.query.query,gender:route.query.gender,alias:route.query.alias}),
  },
  //排行榜
  {
    path: '/Ranking',
    name: 'Ranking',
    redirect: '/',
    // components:{
    //  Ranking,
    //   RankList
    // }
    component: () => import('../views/Ranking/Ranking.vue'),
    children: [
      {
        path: '/',
        name: 'RankingList',
        component: () => import('../views/Ranking/RankList.vue'),

      }
    ],
  },
  //书本信息
  {
    path: '/BookInfo/:id',
    name: 'BookInfo',
    component: () => import('../views/BookInfo/BookInfo.vue'),
    props: true
  },

  //目录
  {
    path: '/Catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
    props: true
  },

  //章节内容
  {
    path: '/CatalogCon/:id',
    name: 'CatalogCon',
    component: () => import('../views/CatalogCon.vue'),
    props: true
  },

  //Vip
  {
    path: '/Vip',
    name: 'Vip',
    component: () => import('../components/Vip.vue'),
  },

  //大神红文
  {
    path: '/manitoRedBook',
    name: 'manitoRedBook',
    component: () => import('../views/manitoRedBook/manitoRedBook.vue'),
  },

  //搜索
  {
    path:"/Search",
    name:"Search",
    redirect:"Search",
    component:()=>import("../views/Search/Search.vue"),
    children:[
      {
        path: '/',
        name: 'SearchRelated',
        component: () => import('../views/Search/SearchRelated.vue'),
      },
      {
        path: 'Suggestions',
        name: 'Suggestions',
        component: () => import('../views/Search/Suggestions.vue'),
      },
      {
        path: '/SearchrResult',
        name: 'SearchrResult',
        component: () => import('../views/Search/SearchrResult.vue'),
      },
    ]
  }

]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('areyouok?');
//   next()
// })

export default router
