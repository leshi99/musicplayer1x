import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAuPLRrHLw2Tc7nlK5CF5P0p4wwGG195WI',
  authDomain: 'musicplayerx-c4a06.firebaseapp.com',
  databaseURL: 'https://musicplayerx-c4a06.firebaseio.com',
  projectId: 'musicplayerx-c4a06',
  storageBucket: '',
  messagingSenderId: '55971375154',
  appId: '1:55971375154:web:46128dca2f87e1dc'
}
document.getElementbyId('contactForm').addEventListener('submit', submit)
firebase.initializeApp(firebaseConfig)
var messagesRef = firebase.database().ref('messages')


function submit () {
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
  console.log(data)
}
// adding form to collection
function saveMessage (name, email, content) {
  var newMessageref = messagesRef.push()
  newMessageref.set({
    name: name,
    email: email,
    content: content
  })
}
saveMessage(name, email, content)
