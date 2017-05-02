import Vue from 'vue'
import Router from 'vue-router'
import admin from '../components/admin'
import Hello from '../components/Hello'
import AddArticle from '../components/AddArticle'
import ArticleList from '../components/ArticleList'
import ClassifiedList from '../components/ClassifiedList'
import EditArticle from '../components/EditArticle'
import Login from '../components/Login'

import Home from '../FrontComponents/Home'
import Article from '../FrontComponents/Article'
import SelectArticle from '../FrontComponents/SelectArticle'
import Archive from '../FrontComponents/Archive'
import About from '../FrontComponents/About'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {auth: false},
      children: [
        {
          path: '', component: Article, name: '文章', meta: {auth: false}
        },
        {path: 'article/:id', component: SelectArticle, meta: {auth: false}},
        {path: 'archive', component: Archive, meta: {auth: false}},
        {path: 'about', component: About, meta: {auth: false}}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // 后台路由
      path: '/admin',
      component: admin,
      name: '管理面板',
      iconCls: 'el-icon-message',
      children: [
        {
          path: '', component: Hello, name: '管理面板'
        },
        {
          path: 'articlelist', component: ArticleList, name: '文章管理'
        },
        {
          path: 'classifiedlist', component: ClassifiedList, name: '标签管理'
        },
        {
          path: 'editarticle/:postId', component: EditArticle, hidden: true, name: '编辑文章'
        },
        {
          path: 'addarticle', component: AddArticle, name: '添加文章'
        }
      ]
    }
  ]
})

// 路由钩子
router.beforeEach(({meta, path}, from, next) => {
  let {auth = true} = meta
  let isLogin = Boolean(store.state.token)

  /*
   访问不需要权限的设置meta:false
   注册也要设置成meta:false
   */
  if (auth && !isLogin && path !== '/login') {
    return next({path: '/login'})
  }
  // 如果登录了以后再访问reg和login则路由到Home
  if (isLogin && (path === '/login')) {
    return next({path: '/admin'})
  }
  // 未登录的情况下访问reg则直接路由
  next()
})

export default router
