import { LOGIN } from '../constants'

export default ({ userName } = { userName: '' }, action) => {
  const { type, payload } = action
  console.log('--- user reducer')
  console.log(type)
  console.log(payload)
  switch (type) {
    case LOGIN:
      return { userName: payload }

    default:
      return { userName }
  }
}
