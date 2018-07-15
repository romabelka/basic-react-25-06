import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  ADD_COMMENT_ID_TO_ARTICLE
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addComment(user, commentText, articleId, commentId) {
  return {
    type: ADD_COMMENT,
    payload: { user, commentText, articleId, commentId }
  }
}

export function addCommentIdToArticle(articleId, commentId) {
  return {
    type: ADD_COMMENT_ID_TO_ARTICLE,
    payload: { articleId, commentId }
  }
}
