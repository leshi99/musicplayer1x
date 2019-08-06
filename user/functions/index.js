const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// }); 
// collection
var messagesRef = firebase.database().ref('messages')

function submit() {
  const name = this.name
  const email = this.email
  const content = this.content
  const data = {
    name,
    email,
    content
  }
  console.log(data)
  saveMessage(name, email, content)
}
// adding form to collection
function saveMessage(name, email, content) {
  var newMessageref = messagesRef.push()
  newMessageref.set({
     name: name,
     email: email,
     content: content
  })
}
