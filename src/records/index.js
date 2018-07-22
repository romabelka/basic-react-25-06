import { Record } from 'immutable'
import { arrToMap } from '../reducer/utils'

export const ArticleRecord = Record({
  id: null,
  text: null,
  title: null,
  date: null,
  loading: false,
  comments: [],
  commentsLoading: false,
  commentsLoaded: false,
  commentsError: null
})

export const ReducerState = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
})

export const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})
