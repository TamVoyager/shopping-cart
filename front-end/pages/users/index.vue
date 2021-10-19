<template lang="pug">
  div
    h1 List User
    v-data-table(
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
      @click:row="goToDetailUser"
    )
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'admin',
  data: () => {
    return {
      users: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Email',
          align: 'start',
          sortable: false,
          value: 'email',
        },
      ],
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      this.users = await this.$axios.$get('/users')
    },
    goToDetailUser(item) {
      this.$router.push(`/users/${item.id}`)
    }
  }
})
</script>
