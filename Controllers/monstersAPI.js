const express = require('express')
const router = express.Router();

const monster = require('./Monsters')

router.get('/', function(req, res){
    const monsters = monster.getMonsterList(function(err, collections){
        if(err){
            res.send("Error: " + err)
            return;
        }

        const monsters = collections.find().limit(10).toArray((err, result) => {          
            if(err){
                res.send("Error: " + err)
                return;
            }

            res.json(result)

        })

        
    })
    
});


router.get('/info', function(req, res){
    res.send('Monsters endpoint!')
});


module.exports = router