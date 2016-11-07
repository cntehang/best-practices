import { FETCH_PRODUCTS } from './mutation-types'

// special syntax due to the computed property name
export const mutations = {
  [FETCH_PRODUCTS] (state, products) {
    state.products = products
  }
}
