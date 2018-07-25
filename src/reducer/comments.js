import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  SUCCESS,
  LOAD_ALL_COMMENTS,
  START
} from '../constants'
import { Record, OrderedMap, Map } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const CurrentCommentRecord = Record({
  entities: null,
  loading: false,
  loaded: false,
  erorr: null,
  total: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  allComments: new Map({})
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case LOAD_ALL_COMMENTS + START:
      return state
        .setIn(['allComments', payload], new CurrentCommentRecord())
        .setIn(['allComments', payload, 'loading'], true)

    case LOAD_ALL_COMMENTS + SUCCESS:
      return state
        .setIn(
          ['allComments', payload, 'entities'],
          arrToMap(response.records, CommentRecord)
        )
        .setIn(['allComments', payload, 'loading'], false)
        .setIn(['allComments', payload, 'loaded'], true)
        .setIn(['allComments', payload, 'total'], response.total)

    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    default:
      return state
  }
}
