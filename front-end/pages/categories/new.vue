<template lang="pug">
  .category_new
    h1 New category
    v-form
      v-text-field(label="Name" v-model="category.name")
      v-btn(color="primary" @click="createCategory") Confirm
</template>
<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  layout: 'admin',
  data() {
    return {
      category: {
        name: '',
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    async createCategory() {
      this.category.user_id = this.currentUser.id
      const apiUrl = "http://127.0.0.1:3000/api/v1/categories"
      await axios.post(apiUrl, this.category).then(() => {
        this.$router.push('/categories')
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
