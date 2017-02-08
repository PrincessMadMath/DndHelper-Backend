const express = require('express')
const router = express.Router()

// Differents controllers
const monsters = require('./monstersAPI')

router.use('/monster', monsters)


router.get('/', function(req, res){
    res.send('PAM-API')
})

module.exports = router

