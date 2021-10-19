<template lang="pug">
  .product_list
    h1 Category list
    v-btn.mr-3(@click="goToNewProduct") New product
    v-data-table(
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
      @click:row="gotoDetailProduct"
    )

</template>
<script>
import {mapGetters} from "vuex";

export default {
  layout: 'admin',
  data() {
    return {
      products: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      this.products = await this.$axios.$get('/products')
    },
    goToNewProduct() {
      this.$router.push('/products/new')
    },
    gotoDetailProduct(item) {
      this.$router.push(`/products/${item.id}`)
    }
  }
}
</script>
