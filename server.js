var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var location = {}

// Default Content-Type to Application/Json
app.use(function(req, res, next) { 
  res.setHeader("Content-Type", "application/json")
  return next() 
})

app.post('/tek/api/v1/requestContact/', function(req, res){
  console.log("WE GOT" + JSON.stringify(req.body))
  res.send({result: "OK"})
})

app.post('/tek/api/v1/login/', function(req, res){
  console.log("WE GOT" + JSON.stringify(req.body))
  if (req.body.user == "sefe") {
    res.sendStatus(403)
  } else {
    res.send({token: "loggedInTokenString"})
  }
})

app.post('/tek/api/v1/userdata/:token', function(req, res){
  console.log("WE GOT" + JSON.stringify(req.body))
  var response = {"firstName" : "Teemu", "lastName" : "Teekkari", "email" : "teemu.teekkari@otaniemi.fi" , "phoneNumber" : "+35840123123" }
  res.send(response)
})

app.get("/", function(req, res){
  res.send(location)
})

app.post('/lossi/api/v1/location/', function(req, res){
  location = JSON.stringify(req.body)
  console.log("WE GOT" + JSON.stringify(req.body))
  res.send({"response" : "ok"})
})

var appPort = process.env.PORT || 3000
console.log("Mock server listening " + appPort)
app.listen(appPort)
