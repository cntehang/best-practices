import * as getters from './getters'
import { mutations } from './mutations'
import * as actions from './actions'

const initialState = {
  products: []
}

export default {
  state: {...initialState},
  getters,
  mutations,
  actions
}
