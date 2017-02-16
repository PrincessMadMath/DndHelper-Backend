const express = require('express')
const router = express.Router();

const monster = require('./Monsters')

router.get('/', function(req, res){
    
    monster.getMonsterList().then(monsters => {
        res.json(monsters)
    }).catch(err => {
        res.send("Error: " + err)
    })
});


router.get('/info', function(req, res){
    res.send('Monsters endpoint!')
});


module.exports = router