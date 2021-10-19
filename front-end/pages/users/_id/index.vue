<template lang="pug">
  .user-detail
    .user-detail-header
      h1 User detail
      v-btn(color="primary" @click="goToEdit") Edit
    p Name: {{ user.name }}
    p Email: {{ user.email }}

</template>
<script>
import axios from "axios";

export default {
  layout: 'admin',
  data: () => {
    return {
      user: {}
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const apiUrl = "http://127.0.0.1:3000/api/v1/users"
      await axios.get(apiUrl, this.$route.params.id).then((res) => {
        this.user = res.data[0]
      })
    },
    goToEdit() {
      this.$router.push(`/users/${this.user.id}/edit`)
    }
  }
}
</script>
<style lang="scss">
.user-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
