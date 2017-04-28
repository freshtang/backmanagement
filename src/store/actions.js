
import axios from '../axios'

export default {
  CreateArticle ({ dispatch }, params) {
    return new Promise((resolve, reject) => {
      axios.createArticle(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        dispatch('GetArticleList').then(() => resolve(data))
      }).catch(err => reject(err))
    })
  },
  UpdateArticle ({ dispatch }, params) {
    return new Promise((resolve, reject) => {
      axios.updateArticle(params).then(({data}) => {
        console.log(data)
        if (data.code !== 200) reject(data)
        dispatch('GetArticleList').then(() => resolve(data))
      }).catch(err => reject(err))
    })
  },
  DeleteArticle ({ dispatch }, params) {
    return new Promise((resolve, reject) => {
      axios.deleteArticle(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        dispatch('GetArticleList').then(() => resolve(data))
      }).catch(err => reject(err))
    })
  },
  GetOneArticle ({ dispatch }, params) {
    return new Promise((resolve, reject) => {
      axios.getOneArticle(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        resolve(data)
      }).catch(err => reject(err))
    })
  },
  GetArticleList ({commit}, params) {
    return new Promise((resolve, reject) => {
      axios.getArticleList(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        commit('SetArticleList', data.msg)
        resolve(data)
      }).catch(err => reject(err))
    })
  },
  CreateLabel ({ dispatch }, params) {
    return new Promise((resolve, reject) => {
      axios.createLabel(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        dispatch('GetLabelList').then(() => resolve(data))
      }).catch(err => reject(err))
    })
  },
  DeleteLabel ({ dispatch }, params) {
    return new Promise((resolve, reject) => {
      axios.deleteLabel(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        dispatch('GetLabelList').then(() => resolve(data))
      }).catch(err => reject(err))
    })
  },
  GetLabelList ({commit}, params) {
    return new Promise((resolve, reject) => {
      axios.getLabelList(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        commit('SetLabelList', data.msg)
        resolve(data)
      }).catch(err => reject(err))
    })
  },
  Getarticlepage: ({state}, params) => {
    return state.articleList.slice(params.limit * params.page, params.limit * (params.page + 1))
  }
}
