import Vue from 'vue'
import VueRouter from 'vue-router'
import bookshelf from '../components/bookshelf/BookShelf.vue'
import bookstore from '../components/bookstore/BookStore.vue'
import bookmale from '../components/bookstore/BookMale.vue'
import bookfemale from '../components/bookstore/BookFemale.vue'
import GeneralComOneChild from '../views/GeneralComOneChild.vue'

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
      { path: 'bookmale', name: 'bookmale', meta: { bottomShow: true }, component: bookmale },
      { path: 'bookfemale', name: 'bookfemale', meta: { bottomShow: true }, component: bookfemale },
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
    // meta:{bottomShow:true},
    component: GeneralComOneChild,
    props: (route) => ({ query: route.query })
  },
  //分类
  {
    path: '/Classify',
    name: 'Classify',
    // meta:{bottomShow:true},
    component: () => import('../components/bookstore/Classify.vue')
  },
  //排行榜
  {
    path: '/Ranking',
    name: 'Ranking',
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
    path: '/BookInfo',
    name: 'BookInfo',
    component: () => import('../views/BookInfo/BookInfo.vue'),
    props: (route) => ({ id: route.query.id })
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
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('areyouok?');
//   next()
// })

export default router
