<template>
<v-container>
 <form id="contactForm" class="px-5" @submit.prevent="submit">
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
    <v-btn class="mr-4" @click="submit" type="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</v-container>
</template>
<script>
// if you are using multiple getters in one component its best to use map getters to call it
// this gets an array or object
// you list all the getters you want to use as a string
// has to be the value of the computed object
// if you want to add non related getter properties to the computed object you add it by
// instead of making getters the value you add curly braces and add
// ...mapGeters this puts computed in a parent object
// however to do this we need to install babel by
// npm install --save-dev babel-preset-stage-2
// import { mapGetters } from 'vuex
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
    content: ''
  }),
  // to then call the actions method instead of saying .actions
  // you call it dispatch you pass the name of the action in a string
  // then as a second argument you put in the payload
  // you can make the register method and payload a property
  // but then you will need to input the payload as anyterm.theobject you want
  // so now we will be able to pass async code
  // like setTimeout
  // instead of the first argument being whatever name you choose then
  // calling it saying .commit we can remove the argument and straight up commit it
  // this is done by swapping out the first argument in the register object with
  // ({ commit }, second argument) this is only if you only commit in the object
  // so you can now call it by commit()
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
  // messagesRef: firebase.database().ref('messages'),
  // to run mutations you call te commit method
  // not the mutations method the commit method
  // you call the mutation by passing it as an argument into the commit method
  // as a string then the payload normally its the second argument that makes it unique
  methods: {
    submit () {
      this.$v.$touch()
      alert('form submitted')
    },
    // the second way you can use the commit method is
    // giving a property called type and passing the name of the mutation
    // second property is the payload
    // you cant use the same payload so you can change the name
    // then access the object you want by doing payload.contactDetails
    // payload can be anyname
    // contact details is the object you want to mutate specificalled
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
.px-5{
  color: #bfbfbf;
}
</style>
