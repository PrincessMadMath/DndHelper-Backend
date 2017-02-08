'use strict'

var express = require('express')
var app = express()

const router = require('./Controllers')

app.use(router);

const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})