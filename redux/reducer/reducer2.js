/* import { HYDRATE } from 'next-redux-wrapper'; */

const reducer2 = (state = { }, action) => {
  switch (action.type) {
    case 'hello':
      return { test: action.payload }
    default:
      return state
  }
}

export default reducer2;