<template lang="pug">
  v-container
    .container
      h1.title Login
      v-alert(v-if="this.message" border="top" color="red lighten-2" dark) {{ this.message }}
      validation-observer(ref='loginForm' v-slot='{ invalid }')
        form(@submit.prevent='submit')
          validation-provider(v-slot='{ errors }' name='Email' :rules='userRules.email')
            v-text-field(v-model='user.email' :error-messages='errors' label='E-mail' required='')
          validation-provider(v-slot='{ errors }' name='Password' :rules='userRules.password')
            v-text-field(v-model='user.password' :error-messages='errors' label='Password' required='' type="password")
          .btn-submit
            v-btn.mr-3(color="success" @click='handleLogin')
              | Confirm
            v-btn(color="primary" @click="goToSignup")
              | SignUp

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
      user: {
        email:'',
        password:''
      },
      message: '',
      userRules: {
        email: { required: true, email: true  },
        password: { required: true, password: true }
      }
    }
  },
  methods: {
    async handleLogin() {
      const isValid = await this.$refs.loginForm.validate()
      if (isValid) {
        const apiUrl = "http://127.0.0.1:3000/api/v1/login"
        await axios.post(apiUrl, this.user).then((res) => {
          const user = res.data
          this.$store.dispatch('fetchUser', { user })
          this.$router.push('/')
        }).catch(() => {
          this.message = 'Email, password is not correct.'
        })
      }
    },
    goToSignup() {
      this.$router.push('/signup')
    }
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
