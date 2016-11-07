import { http } from 'vue'
import { FETCH_PRODUCTS } from './mutation-types'

export function fetchProducts ({ commit }) {
  return http.get('products/')
    .then((response) => commit(FETCH_PRODUCTS, response.body.results))
}
