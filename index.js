var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.json({"message": "Hello World!"})
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT} and value ${process.env.TEST_VALUE}!`)
})