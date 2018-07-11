import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './select'
import dateRange from './date-range'

export default combineReducers({
  counter: counterReducer,
  articles,
  select,
  dateRange
})
