<template>
  <div id="app">
    <v-app id="inspire">
      <!-- <v-jumbotron :gradient="gradient" dark>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <span>
                <h3 class="display-3"><span class="font-weight-medium">Music</span><span class="font-weight-bold">Player</span><span class="font-weight-black">X</span></h3>
              </span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron> -->
      <header class="body">
      <div class="color">
        <h1 class="display-2">Enjoy the Music</h1>
        <br>
        <p class="title">Taking the listener experience to another level</p>
        <div class="subtitle-1">
          Download Free Today
          <a href="https://apps.apple.com/app/music-player-x/id1221701870#?platform=iphone" class="button">
            <span class="font-weight-light"> Music</span><span >Player</span><span class="font-weight-bold">X</span>
          </a>
        </div>
      </div>
      </header>
      <Body />
    </v-app>
  </div>
</template>

<script>
import Body from '@/components/Body'
export default {
  name: 'Hompage',
  components: {
    Body
  },
  data () {
    return {
      gradient: 'to top, #303030, #000000',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- #8e8e93 #f8f8f8 Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  line-height: 1.6;
  background-image:url('audio-black-and-white-close-up-1238941.jpg');
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;
  padding: 0 20px;
}
.color{
  margin-top: 100px;
  height: 25vh;
  position: relative;
  background-color: #05040e;
  opacity: 0.7;
  filter: alpha(opacity=70);
  border: rgb(0, 0, 0)7px solid;
  border-radius: 15px;
  padding: 20px 20px;
}
.button{
  font-size: 18px;
  color: #bfbfbf;
  text-decoration: none;
  border: #bfbfbf 1px solid;
  border-radius: 10px;
  padding: 10px 10px;
  margin-top: 20px;
}
.display-3 {
  text-align: center;
}
.v-avatar .v-icon, .v-avatar .v-image, .v-avatar img {
  border-radius: 15%;
}
</style>
