import * as types from './types'
export default {
  [types.SetArticleList] (state, params) {
    state.articleList = params
  },
  [types.SetLabelList] (state, params) {
    state.tagList = params
  }
}
