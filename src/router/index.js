import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import AddArticle from '../components/AddArticle'
import ArticleList from '../components/ArticleList'
import ClassifiedList from '../components/ClassifiedList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/addarticle',
      name: 'AddArticle',
      component: AddArticle
    },
    {
      path: '/articlelist',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/classifiedlist',
      name: 'ClassifiedList',
      component: ClassifiedList
    }
  ]
})
