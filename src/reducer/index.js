import { combineReducers } from 'redux'
import counterReducer from './counter'
import selectorReducer from './selector'
import articles from './articles'
import dateRange from './date-range'

export default combineReducers({
  counter: counterReducer,
  articles,
  dateRange,
  selected: selectorReducer
})
