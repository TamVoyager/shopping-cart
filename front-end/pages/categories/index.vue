<template lang="pug">
  .categories_list
    h1 Category list
    v-btn.mr-3(@click="goToNewCategory") New category
    v-data-table(
      :headers="headers"
      :items="categories"
      :items-per-page="5"
      class="elevation-1"
      @click:row="gotoEditCategory"
    )

</template>
<script>
import {mapGetters} from "vuex";

export default {
  layout: 'admin',
  data() {
    return {
      categories: [],
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
    this.getCategory()
  },
  methods: {
    async getCategory() {
      this.categories = await this.$axios.$get('/categories')
    },
    goToNewCategory() {
      this.$router.push('/categories/new')
    },
    gotoEditCategory(item) {
      this.$router.push(`/categories/${item.id}/edit`)
    }
  }
}
</script>
