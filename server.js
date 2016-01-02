var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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
  res.send({token: "loggedInTokenString"})
})

var appPort = process.env.PORT || 3000
console.log("Mock server listening " + appPort)
app.listen(appPort)
