export default {
  articleList: [
  ],
  tagList: [
  ],
  currentArticle: {
    id: -1,
    index: -1,
    content: '',
    title: '',
    tags: [],
    save: true,
    publish: false
  },
  token: isLoggedIn() || null,
  allPage: 1,
  curPage: 1
}

function isLoggedIn () {
  let token = localStorage.getItem('jwt')
  if (token) {
    const payload = JSON.parse(window.atob(token.split('.')[1]))
    // 前端判断token是否过期，如果过期了访问时候会路由到login页面
    if (payload.exp > Date.now() / 1000) {
      return token
    }
  } else {
    return false
  }
}
