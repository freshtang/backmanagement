import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create()

export default {
  createArticle (params) {
    return instance.post('/api/article/create', params)
  },
  deleteArticle (params) {
    return instance.post('/api/article/delete', params)
  },
  getArticleList (params) {
    return instance.post('/api/article/list', params)
  },
  updateArticle (params) {
    return instance.post('/api/article/update', params)
  },
  getOneArticle (params) {
    return instance.post('/api/article/getone', params)
  },
  createLabel (params) {
    return instance.post('/api/label/create', params)
  },
  getLabelList (params) {
    return instance.post('/api/label/list', params)
  },
  deleteLabel (params) {
    return instance.post('/api/label/delete', params)
  }
}
