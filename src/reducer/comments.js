import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  LOAD_PAGE_COMMENTS,
  START,
  SUCCESS
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const PageComment = Record({
  id: null,
  comments: []
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  total: 0,
  loadedArticles: [],
  loadingArticles: [],
  loadedPages: [],
  loadingPages: [],
  pageComments: arrToMap([], PageComment)
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + START:
      return state
        .mergeIn(['loadingArticles'], [payload.articleId])
        .setIn(
          ['loadedArticles'],
          state
            .get('loadedArticles', [])
            .filter((id) => id !== payload.articleId)
        )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state
        .mergeIn(['entities'], arrToMap(response, CommentRecord))
        .setIn(
          ['loadingArticles'],
          state
            .get('loadingArticles', [])
            .filter((id) => id !== payload.articleId)
        )
        .mergeIn(['loadedArticles'], [payload.articleId])

    case LOAD_PAGE_COMMENTS + START:
      return state
        .mergeIn(['loadingPages'], [payload.pageNumber])
        .setIn(
          ['loadedPages'],
          state
            .get('loadedPages', [])
            .filter((page) => page !== payload.pageNumber)
        )

    case LOAD_PAGE_COMMENTS + SUCCESS:
      const { total, records } = response
      return state
        .mergeIn(['entities'], arrToMap(records, CommentRecord))
        .setIn(['total'], total)
        .setIn(
          ['loadingPages'],
          state
            .get('loadingPages', [])
            .filter((page) => page !== payload.pageNumber)
        )
        .mergeIn(['loadedPages'], [payload.pageNumber])
        .setIn(
          ['pageComments', payload.pageNumber],
          new PageComment({
            id: payload.pageNumber,
            comments: records.map((r) => r.id)
          })
        )

    default:
      return state
  }
}
