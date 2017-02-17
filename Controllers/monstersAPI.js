const express = require('express')
const router = express.Router();

const monsterAccess = require('./Monsters')

router.get('/', function (req, res) {
    monsterAccess
        .getMonsterList()
        .then(monsters => {
            res.json(monsters)
        })
        .catch(err => {
            res.send("Error: " + err)
        })
});

router.post('/', function (req, res) {
    const {monster} = req.body

    monsterAccess.addMonster(monster).then(item => {
        console.log(item)
        res.end()
    }).catch(err => {
        res.send("Error: " + err)
    })
});

router.get('/info', function (req, res) {
    res.send('Monsters endpoint!')
});

module.exports = router