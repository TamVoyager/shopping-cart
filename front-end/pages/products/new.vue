<template lang="pug">
  .product-form
    h1 New product
    v-form
      v-text-field(name="name" label="Name" v-model="product.name")
      v-btn(color="primary") Confirm
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      product: {
        name: ''
      }
    }
  }
}
</script>
