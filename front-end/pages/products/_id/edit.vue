<template lang="pug">
  .form-edit-product
    h1 Edit product
    v-form
      v-text-field(name="name" label="Name" v-model="product.name")
      v-text-field(name="description" label="Description" v-model="product.description")
      v-text-field(name="price" label="Price" v-model="product.price")
      v-text-field(name="total" label="Total" v-model="product.total")
      v-select()
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: '',
        total: '',
        category_id: ''
      }
    }
  },
}
</script>
