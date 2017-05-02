
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
  GetPastArticleList ({commit}, params) {
    return new Promise((resolve, reject) => {
      axios.getArticleList(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        resolve(data)
      }).catch(err => reject(err))
    })
  },
  ToNextOrPreArticle ({state}, params) {
    return new Promise((resolve, reject) => {
      let curpageindex = -1
      state.articleList.forEach(function (val, index) {
        if (val._id === params._id) {
          curpageindex = index
          return
        }
      })
      if (curpageindex === -1) reject(-1)
      if (curpageindex === 0 && params.action === 0) reject(0)
      if (curpageindex === (state.articleList.length - 1) && params.action === 1) reject(1)
      if (params.action === 0) resolve(state.articleList[curpageindex - 1])
      if (params.action === 1) resolve(state.articleList[curpageindex + 1])
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
  },
  UserLogin ({commit}, params) {
    return new Promise((resolve, reject) => {
      axios.userLogin(params).then(({data}) => {
        if (data.code !== 200) reject(data)
        commit('USER_SIGNIN', data.token)
        resolve(data)
      })
    })
  }
}
