# Vue Sample Project
!!! Please copy this folder to a different place not under Git version control to run it. This is part of the Vue document to show the detail process to scaffold a project. 

## Set CTP Enviornment Variables
First create the following two enviornment variables to your CTP environment values:
```sh
export ACCESS_TOKEN={YOUR_CTP_ACCESS_TOKEN}
export PROJECT_KEY={YOUR_CTP_PROJECT_KEY}
```
The `ACCESS_TOKEN` should have the `view_products` scope.
 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
