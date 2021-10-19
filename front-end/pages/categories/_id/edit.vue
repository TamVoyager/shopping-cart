<template lang="pug">
  .edit-category
    h1 Edit category
    v-form
      v-text-field(name="name" label="Name" v-model="category.name")
      v-btn(color='primary' @click="editCategory") Confirm
</template>
<script>
import {mapGetters} from "vuex";

export default {
  layout: 'admin',
  data() {
    return {
      category: {}
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  created() {
    this.fetchCategory()
  },
  methods: {
    async fetchCategory() {
      this.category = await this.$axios.$get(`/categories/${this.$route.params.id}`)
    },
    async editCategory() {
      this.category.user_id = this.currentUser.id
      await this.$axios.$put(`/categories/${this.$route.params.id}`, this.category).then(() => {
        this.$router.push('/categories')
      })
    }
  }
}
</script>
