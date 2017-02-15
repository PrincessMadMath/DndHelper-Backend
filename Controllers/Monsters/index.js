const model = require('../../DatabaseAccess').getModel()


function getMonsterList(cb){

    model.getCollection("monsters").then(collections => {
      cb(null, collections)
    })
    .catch(err => {
      cb(err, null)
    })
}

module.exports.getMonsterList = getMonsterList