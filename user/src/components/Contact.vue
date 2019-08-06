<template>
  <div id="app">
    <v-app id="inspire">
      <v-jumbotron :gradient="gradient" dark>
        <v-container fill-height>
          <v-layout align-center row wrap>
            <v-flex xs12 class="my-5">
              <div class="text-xs-center">
                <h2 class="display-2">Get In Touch</h2><br>
                <span class="title">
                Use the form below to drop us an email. We'd love to hear from you.
                </span>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <Form />
    </v-app>
  </div>
</template>

<script>
import Form from '@/components/Form'
export default {
  name: 'Contact',
  components: {
    Form
  },
  data () {
    return {
      gradient: 'to top, #303030, #000000',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme--light.application {
  /* general text */
    background: #303030;
    color: #bfbfbf;
}
.title{
  padding: 10px 30px;
}
.display-2{
  text-align: center;
}
</style>
