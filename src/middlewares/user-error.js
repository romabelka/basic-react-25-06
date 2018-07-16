import { USER_ERROR } from '../constants'
import { toastr } from 'react-redux-toastr'

export default (store) => (next) => (action) => {
  const { type } = action
  if (type === USER_ERROR) {
    toastr.error('Error', action.payload)
  }

  next(action)
}
