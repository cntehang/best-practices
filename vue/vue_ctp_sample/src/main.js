import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
Vue.use(VueResource)
// set the API root so we can use relative url's in our actions.
Vue.http.options.root = `https://api.sphere.io/${process.env.PROJECT_KEY}`
console.log('http root is ' + Vue.http.options.root)

Vue.http.headers.common['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`

// import some global styles
import './styles/style.scss'

import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
