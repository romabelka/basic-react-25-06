import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generate-id'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(logger, generateId)
  // other store enhancers if any
)

const store = createStore(reducer, enhancer)

//DEV Only, no need in prod
window.store = store

export default store
