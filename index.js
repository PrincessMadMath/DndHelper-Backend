'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var cors = require("cors");  

var app = express()

app.use(cors({  
    origin: ["https://pam.netlify.com/"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
// parse application/json
app.use(bodyParser())

const router = require('./Controllers')

app.use(router);

const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})