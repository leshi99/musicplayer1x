// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
// always have to add the store to the root vue instance

// need to import stylesheet as well
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(Vuetify, {
  iconfont: 'md'
})
var firebaseConfig = {
  apiKey: 'AIzaSyAuPLRrHLw2Tc7nlK5CF5P0p4wwGG195WI',
  authDomain: 'musicplayerx-c4a06.firebaseapp.com',
  databaseURL: 'https://musicplayerx-c4a06.firebaseio.com',
  projectId: 'musicplayerx-c4a06',
  storageBucket: '',
  messagingSenderId: '55971375154',
  appId: '1:55971375154:web:46128dca2f87e1dc'
}
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAuPLRrHLw2Tc7nlK5CF5P0p4wwGG195WI',
      authDomain: 'musicplayerx-c4a06.firebaseapp.com',
      databaseURL: 'https://musicplayerx-c4a06.firebaseio.com',
      projectId: 'musicplayerx-c4a06',
      storageBucket: '',
      messagingSenderId: '55971375154',
      appId: '1:55971375154:web:46128dca2f87e1dc'
    })
  }
})
// <script src="/__/firebase/6.3.4/firebase-app.js"></script>

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#reserved-urls

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
