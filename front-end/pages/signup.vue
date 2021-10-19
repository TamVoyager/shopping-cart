<template lang="pug">
  v-container
    h1.text-center SignUp
    validation-observer(ref='signupForm' v-slot='{ invalid }')
      v-form(@submit.prevent='submit')
        validation-provider(v-slot='{ errors }' name='Name' :rules='userRules.name')
          v-text-field(label="Name" v-model="user.name" :error-messages='errors')
        validation-provider(v-slot='{ errors }' name='Email' :rules='userRules.email')
          v-text-field(label="Email" v-model="user.email" :error-messages='errors')
        validation-provider(v-slot='{ errors }' name='Password' :rules='userRules.password')
          v-text-field(label="Password" v-model="user.password" :error-messages='errors' type="password")
        .btn-submit.text-center
          v-btn(color="primary" @click="handleSignup") Signup
</template>
<script>
import Vue from 'vue'
import axios from "axios";
import { ValidationObserver, ValidationProvider} from "vee-validate";

export default Vue.extend({
  components: {
    ValidationObserver, ValidationProvider
  },
  data() {
    return {
      user: {
        name: '',
        email:'',
        password:''
      },
      userRules: {
        name: { required: true },
        email: { required: true, email: true },
        password: { required: true, password:true }
      },
      isShowMessage: false
    }
  },
  methods: {
    async handleSignup() {
      const isValid = await this.$refs.signupForm.validate()
      if (isValid) {
        const apiUrl = "http://127.0.0.1:3000/api/v1/users"
        await axios.post(apiUrl, this.user).then(() => {
          this.isShowMessage = true
          this.$router.push('/login')
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
})
</script>
