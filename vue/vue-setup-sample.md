# Vue Setup Sample
This document descript the steps to scaffold a project and add more components to make it a good fit for non-trivial project. The sample project is in the [vue_ctp_sample](./vue_ctp_sample).

## 1. Scaffold a Project 

Run `npm install -g vue-cli` to install vue-client. If you already have it, run `npm update -g vue-cli` to update it to the latest version. You may need to use `sudo` to install it as a global package. 

Run `vue init webpack my-project` to create a new project named `my_project`. When ased, use recommended default settings and answer "Y" to unit test and e2e test.  

For "vue-clie@2.5.0" (the version when writing this doc), edit the package.json and change the following two lines:
* change vue version to the latest (find it in https://github.com/vuejs/vue/releases): `"vue": "^2.0.5",`
* change eslint plugin promise to supress the warning: `"eslint-plugin-promise": "^3.3.0",`

Then run `npm install` to  install all packages used in the project. 

Run `npm run dev` to check that the site is up and running correctly. 

## 2. Render the Root Vue Instance
In the initial project scaffold, the root Vue instance has three options: `el`, `template` and `components`. To make the rendering explict (in future, we may want to set server-side context), we use the `render` option to render the root component and delete the `template` and `components` options. The final `src/main.js` is as the following: 

```js
import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
```

It is a convention in Vue ecosystem to aliase the first parameter `createElement` of the `render` function to `h`. Please see https://vuejs.org/v2/guide/render-function for details.  

## 3. Use BootStrap 4 Styles
### 3.1. Install BootStrap 4
Run `npm install --save bootstrap@4.0.0-alpha.5` to install BootStrap 4. 

### 3.2. Install `node-saas` and `sass-loader`
Run the following two commands to install `node-sass` and  `sass-loader`. 
```sh
npm install --save-dev node-sass
npm install --save-dev sass-loader
```

### 3.3. Create a Style File with Standard Style
create the `src/styles` folder and create a `style.scss` file with the following content: 
```
@import "../../node_modules/bootstrap/scss/bootstrap-flex.scss";
```

### 3.4. Use the Created Style 
Import the standard bootstrap style by adding the following contents to `main.js`. 

```js
// import some global styles
import './styles/style.scss'
```

### 4. Create a Product List Page
First, delete the `src/components/Hello.vue` file. 

Second, create the `src/components/ProductList.vuew` file with the following content: 
```
<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Product Id</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" track-by="id">
        <td>{{product.id}}</td>
        <td>{{product.masterData.current.name}}</td>
        <td>{{product.masterData.current.description}}</td>
      </tr>
    </tbody>
  </table>
</template>
```

Then change `App.vue` as the following to use the new product list component. 
```js
<template>
  <product-list></product-list>
</template>

<script>
import ProductList from './components/ProductList'

export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>
```

Optionally, run `npm run dev` to check that the site is up and running correctly. 

## 5. Create The Store
### 5.1. Install `vuex`
Run `npm install --save vuex` to install the state store plugin. 

### 5.2. Create Mutation Type Constants
Create `src/vuex/modules/products/mutation-types.js` file as the following:
```js
export const FETCH_PRODUCTS = 'products/FETCH_PRODUCTS';
```

### 5.3. Create the `getProducts` Getter
Create `src/vuex/modules/products/getters.js` as the following:
```js
export const getProducts = state => state.products
```

### 5.4. Create the Products Store Module
Create `src/vuex/modules/products/index.js` with the following content: 

```js
import * as getters from './getters'

const initialState = {
  products: []
}

export default {
  state: {...initialState},
  getters
}
```

### 5.5. Create the Store with the Products Store Module
Create `src/vuex/store.js` as following: 
```js
import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    products
  },
  strict: debug
})
```
 
### 5.6. Add the Store to the Root Instance
In `src/main.js`, import the newly created store and add it to the root instance option. After this, all child components can access the store. 

```js
// Step 1: import it
import store from './vuex/store'

new Vue({
  el: '#app',

  // Step 2: set the option
  store,
  render: h => h(App)
})
```

### 5.7. Use the Store in ProductList Component
Add the following content to `src/components/ProductList.vue` to get products data from the store using a computed property. 

```js
<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    products: 'getProducts'
  })
}
</script>
```
In the above code, we map the `getProducts` getter meethod to a local computed property with a name `products`. 

## 6. Get Products Using a REST Request
We changed `config/dev.env.js` as the following to read CTP project key and access token from the enviornment variables. The `ACCESS_TOKEN` should have thhe `view_products` scope.

```js
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(
  prodEnv,
  {
    NODE_ENV: '"development"',
    ACCESS_TOKEN: `'${process.env.ACCESS_TOKEN}'`,
    PROJECT_KEY: `'${process.env.PROJECT_KEY}'`
})

```

### 6.1. Install `vue-resource`
Run `npm install --save vue-resource` to install `vue-resource` that is used to make REST API requests. 

### 6.2. Add `vue-resource` as Vue middleware
In `src/main.js`, add the following lines: 

```js
import VueResource from 'vue-resource'
Vue.use(VueResource)
// set the API root so we can use relative url's in our actions.
Vue.http.options.root = `https://api.sphere.io/${process.env.PROJECT_KEY}`
Vue.http.headers.common['Authorization'] = `Bearer ${process.env.ACCESS_TOKEN}`
```

### 6.3. Create the `FETCH_PRODUCTS` Mutation
Create `src/vuex/modules/products/mutations.js` as the following:
```js
import { FETCH_PRODUCTS } from './mutation-types'

// special syntax due to the computed property name
export const mutations = {
  [FETCH_PRODUCTS] (state, products) {
    state.products = products
  }
}
```

### 6.4. Create the `FETCH_PRODUCTS` Action
Create the `src/vuex/modules/products/actions.js` as the following: 
```js
iimport { http } from 'vue'
import { FETCH_PRODUCTS } from './mutation-types'

export function fetchProducts ({ commit }) {
  return http.get('products/')
    .then((response) => commit(FETCH_PRODUCTS, response.body.results))
}
```

### 6.5. Update the Products Store Module
Edit `src/vuex/modules/products/index.js` to have the following content: 

```js
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
```

### 6.6. Fetch Data When ProductList is Created
Edit the `<script>` in `src/components/ProductList.vue` to have the following content: 

```js
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'getProducts'
  }),
  methods: {
    ...mapActions([
      'fetchProducts'
    ])
  },
  created () {
    this.fetchProducts()
  }
}
```

In the above code, we map the `fetchProducts` to a local method with the same name, then call it in `created()` lifecycle event. 

## 7. Add Router

Run `npm install --save vue-router`

