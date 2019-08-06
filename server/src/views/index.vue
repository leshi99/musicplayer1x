<template>
   <form class="px-5" @submit.prevent="">
    <v-text-field
      dark
      v-model="name"
      prepend-icon="person"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      dark
      v-model="email"
      prepend-icon="mail"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-textarea
      dark
      label="Comment"
      v-model="content"
      prepend-icon="edit"
      :error-messages="contentErrors"
      required
      @input="$v.content.$touch()"
      @blur="$v.content.$touch()"
    >
    </v-textarea>
    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form> 
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    content: { required }
  },

  data: () => ({
    name: '',
    email: '',
    content: '',

  }),
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    contentErrors () {
      const errors = []
      if (!this.$v.content.$dirty) return errors
      !this.$v.content.required && errors.push('Comment is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
        alert('form submitted')
        const name = this.name
        const email = this.email
        const content = this.content
        const data = {
          name,
          email,
          content
        }
      this.$http.post('/email', data, function() {
          console.log('Server received are data');
      });
       console.log({name: this.name, email: this.email, content: this.content})
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.content = ''
    }
  }
}
</script>
<style scoped>

</style>

