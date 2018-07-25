import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  SUCCESS,
  FAIL,
  START,
  LOAD_PAGE_COMMENTS,
  COMMENTS_PER_PAGE_COUNT
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

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

/*
export function loadArticle(id) {
  return {
    type: LOAD_ARTICLE,
    payload: { id },
    callAPI: `/api/article/${id}`
  }
}
*/

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    fetch(`/api/article/${id}`)
      .then((res) => res.json())
      .then((response) =>
        dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id },
          response
        })
      )
      .catch((error) =>
        dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id },
          error
        })
      )
  }
}

export function loadArticleComments(articleId) {
  return (dispatch, getState) => {
    const { comments } = getState()
    const loaded = comments.loadedArticles.includes(articleId)
    const loading = comments.loadingArticles.includes(articleId)

    if (!loaded && !loading) {
      dispatch({
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
      })
    }
  }
}

export function loadPageComments(pageNumber) {
  return (dispatch, getState) => {
    const { comments } = getState()
    const loaded = comments.loadedPages.includes(pageNumber)
    const loading = comments.loadingPages.includes(pageNumber)

    if (!loaded && !loading) {
      var offset = COMMENTS_PER_PAGE_COUNT * (pageNumber - 1)
      dispatch({
        type: LOAD_PAGE_COMMENTS,
        payload: { pageNumber },
        callAPI: `/api/comment?limit=${COMMENTS_PER_PAGE_COUNT}&offset=${offset}`
      })
    }
  }
}
