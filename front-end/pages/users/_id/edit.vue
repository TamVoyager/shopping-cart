<template lang="pug">
  .form-edit-user
    .form-edit-user
      h1 edit
    validation-observer(ref='editUserForm' v-slot='{ invalid }')
      v-form(@submit.prevent='submit')
        validation-provider(v-slot='{ errors }' name='Name' :rules='userRules.name')
          v-text-field(label="Name" v-model="user.name" :error-messages='errors')
        validation-provider(v-slot='{ errors }' name='Email' :rules='userRules.email')
          v-text-field(label="Email" v-model="user.email" :error-messages='errors' disabled)
        validation-provider(v-slot='{ errors }' name='Password' :rules='userRules.password')
          v-text-field(label="Password" v-model="user.password" :error-messages='errors' type="password")
        .btn-submit.text-center
          v-btn(color="primary" @click="handleEditUser") Confirm
</template>
<script>
import axios from "axios";
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver, ValidationProvider
  },
  data() {
    return {
      message: '',
      userRules: {
        email: { required: true, email: true  },
        password: { required: true, password: true }
      },
      user: {}
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser() {
      await this.$axios.$get('/users', this.$route.params.id).then((res) => {
        this.user = res.data[0]
      })
    },
    async handleEditUser() {
      const isValid = await this.$refs.editUserForm.validate()
      if (isValid) {
        const apiUrl = `http://127.0.0.1:3000/api/v1/users/${this.$route.params.id}`
        await axios.put(apiUrl, this.user).then(() => {
          this.$router.push('/')
        }).catch(() => {
          this.message = 'Email, password is not correct.'
        })
      }
    },
    goToSignup() {
      this.$router.push('/signup')
    },
  }
}
</script>

<style lang="scss">
.title {
  text-align: center;
  font-size: 100px;
  margin-bottom: 50px;
}
.form-login {
  margin: 50px auto auto;
}
.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
