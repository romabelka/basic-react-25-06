import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//DEV Only, no need in prod
window.store = store

export default store
