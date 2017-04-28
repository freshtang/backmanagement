import Vue from 'vue'
import Router from 'vue-router'
import admin from '../components/admin'
import Hello from '../components/Hello'
import AddArticle from '../components/AddArticle'
import ArticleList from '../components/ArticleList'
import ClassifiedList from '../components/ClassifiedList'
import EditArticle from '../components/EditArticle'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
