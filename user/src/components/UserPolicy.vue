<template>
  <div id="app">
    <v-app :gradient="gradient" id="inspire">
      <v-jumbotron :gradient="gradient" dark>
        <v-container fill-height>
          <v-layout align-center class="mt-4">
            <v-flex class="pl-5">
              <h2 class="display-3 pt-2"><span class="font-weight-black">User Policy</span></h2>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-left">
              <h2 class="headline">User Agreement and Privacy Policy</h2>
              <v-divider class="my-3"></v-divider>
            </div>
          </v-flex>
        </v-layout>
      </section>
      <v-container grid-list-xl>
        <v-layout column wrap align-center>
          <v-flex xs12>
            <v-card flat>
              <v-card-text class="title font-weight-light">Music Player X does not collect or utilize any of your personal information.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card flat>
              <v-card-text class="title font-weight-light">Music Player X is not responsible for damage to your hearing or music equipment.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card flat>
              <v-card-text class="title font-weight-light">Music Player X can and will change this privacy policy at some point in the future.</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
          <!-- <div class="title mt-5">
            <p>Music Player X does not collect or utilize any of your personal information.</p>
            <p>Music Player X is not responsible for damage to your hearing or music equipment.</p>
            <p>Music Player X can and will change this privacy policy at some point in the future.</p>
          </div> -->
    </v-app>
  </div>
</template>

<script>
export default {
  computed: {
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true
      return binding
    }
  },
  name: 'UserPolicy',
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
.display-3 {
  text-align: center;
}
.theme--light.v-divider {
    border-color: rgba(243, 243, 243, 0.46);
}
.theme--light.application {
  /* general text */
    background: #303030;
    color: #bfbfbf;
}
.display-4{
  padding: 0px 30px;
  text-align: center;
}
</style>
