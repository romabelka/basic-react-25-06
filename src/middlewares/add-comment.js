import React from 'react'
import { ADD_COMMENT } from '../constants'
import { toastr } from 'react-redux-toastr'
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

const success = (article, comment) => {
  const toastrOptions = {
    timeOut: 3000, // by setting to 0 it will prevent the auto close
    component: (
      <div>
        <h4>{article.title}</h4>
        <div>
          {comment.text} <b>by {comment.user}</b>
        </div>
      </div>
    )
  }

  toastr.success('Comment added', '', toastrOptions)
}

const addCommentToArticle = (state, action) => {
  const { articleId, comment } = action.payload
  addComment(state, comment)
  updateArticle(state, articleId, comment.id)

  success(state.articles[articleId], comment)
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
