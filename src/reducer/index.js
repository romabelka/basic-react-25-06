import { combineReducers } from 'redux'
import counterReducer from './counter'
import dateRangeReducer from './dateRange'
import articles from './articles'

export default combineReducers({
  counter: counterReducer,
  articles,
  dateRange: dateRangeReducer
})
