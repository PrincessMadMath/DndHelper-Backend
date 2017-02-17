const express = require('express')
const router = express.Router()

// Differents controllers
const monsters = require('./monstersAPI')

router.use('/monster', monsters)

module.exports = router

