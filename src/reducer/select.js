import { FILTER_ARTICLES_BY_NAME } from '../constants'
export default (selectedValues = [], action) => {
  const { type, payload } = action
  console.log('--- SELECT REDUCER', action)
  switch (type) {
    case FILTER_ARTICLES_BY_NAME:
      return payload.selectedValues
    default:
      return selectedValues
  }
}
