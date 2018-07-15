import { ADD_COMMENT } from '../constants'
const uuid = require('uuid/v4')

const actionWithCommentId = (action) => {
  const { payload } = action
  const newId = uuid()
  let newAction = {
    ...action,
    payload: {
      ...payload,
      comment: {
        ...payload.comment,
        id: newId
      }
    }
  }

  return newAction
}

const addComment = (state, comment) => {
  state.comments[comment.id] = comment
}

const updateArticle = (state, articleId, commentId) => {
  var article = { ...state.articles[articleId] }
  article.comments.push(commentId)
  state.articles[articleId] = article
}

const addCommentToArticle = (state, action) => {
  const { articleId, comment } = action.payload
  addComment(state, comment)
  updateArticle(state, articleId, comment.id)
}

export default (store) => (next) => (action) => {
  const { type } = action
  if (type === ADD_COMMENT) {
    const state = store.getState()
    console.log('-- add comment middleware', state)
    const newAction = actionWithCommentId(action)
    addCommentToArticle(state, newAction)
    next(newAction)
  } else {
    next(action)
  }
}
