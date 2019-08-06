<template>
  <div id="app">
    <v-app>
      <Navbar />
      <main>
        <v-container fluid>
          <router-view/>
          <AudioLevel />
        </v-container>
      </main>
      <section max-width="1000">
        <v-container class="text--black grey darken-4" grid-list-xl>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm4 class="text--red">
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>
                  Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and interests
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <div class="avatar">
            <a href="https://apps.apple.com/app/music-player-x/id1221701870#?platform=iphone">
              <v-avatar size="52">
              <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/f3/72/da/f372daff-24ba-09ee-3edd-13eadb27c9e0/source/512x512bb.jpg" alt="avatar">
            </v-avatar>
            </a>
          </div>
        </v-container>
      </section>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import AudioLevel from '@/components/AudioLevel'
export default {
  name: 'App',
  components: {
    Navbar,
    AudioLevel

  },
  data () {
    return {
      gradient: 'to top, #000000, #303030'
    }
  }
}
</script>

<style>

.display-3 {
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
.theme--dark.v-jumbotron .v-jumbotron__content{
  /* jumbotron title */
  color: #bfbfbf;
}
.container {
  padding: 0;
  width: 100%;
}
.theme--light.v-sheet {
  color: #bfbfbf;
  background-color: #303030;
}
.grey.darken-4 {
  max-width: 100%;
}
.avatar{
  padding-left: 47%;
  padding-bottom: 5px;
}
.review {
    padding-left: 17px;
    padding-bottom: 0px;
    padding-top: 0px;
}
.v-avatar img[data-v-3b9344d2] {
    border-radius: 15%;
    margin-left: 30%;
}
*[data-v-5fdac87e] {
  background:#303030;
}
</style>
