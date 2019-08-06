<template>
  <div id="app">
    <v-app id="inspire">
      <v-jumbotron :gradient="gradient" dark>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-4"><span class="font-weight-bold">About</span><span class="font-weight-black"> Us</span></h3>
              <span class="hidden-sm-and-down">
                <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus possimus corporis cupiditate? Ea dolorum.</div>
              </span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <Features />
      <!-- <Cards /> -->
    </v-app>
  </div>
</template>

<script>

import Cards from '@/components/Cards'
import Features from '@/components/Features'
export default {
  name: 'AboutUs',
  components: {
    Cards,
    Features
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
.theme--light.v-sheet {
  /* color: #bfbfbf; */
  background-color: #303030;
}
.theme--light.application {
  /* general text */
    background: #303030;
    color: #bfbfbf;
}
.display-4{
  padding: 0px 30px;
}
.title{
  margin-top: 5px;
}
</style>
