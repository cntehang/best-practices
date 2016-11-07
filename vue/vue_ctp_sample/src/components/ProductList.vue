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

<script>
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
</script>
