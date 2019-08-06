console.log("hello world");
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');


const app = express(); 


//This is to configure the Data Parsing
// so this means that whenever the html sends we receive
app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.use(morgan('combined'))
app.use(cors())

app.get('/Contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'Contact.vue'));
});
// this is to send the email
app.post('/email', (req, res) => {
  // sending the body of the form which is 
  console.log('Data: ', req.body);
  res.json({ message: 'Message received!!!' })
  
})

app.get('/status', (req,res) => {
    res.send({
        message:"hello world!"
    })
})

app.listen(process.env.PORT || 8082)