import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  LOAD_COMMENTS,
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

const ReducerRecord = Record({
  entities: new OrderedMap({})
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

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    default:
      return state
  }
}

const ReducerCommentsList = Record({
  entities: new OrderedMap({}),
  total: null,
  offset: 0,
  limit: 5,
  loading: false,
  loaded: false
})

export function commentsList(state = new ReducerCommentsList(), action) {
  const { type, payload, response } = action

  switch (type) {
    case LOAD_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      // console.log('payload',payload);
      // console.log('response',response.records,response.total);
      return state
        .set('entities', arrToMap(response.records, CommentRecord))
        .set('total', response.total)
        .set('offset', payload.offset)
        .set('loading', false)
        .set('loaded', true)

    default:
      return state
  }
}
