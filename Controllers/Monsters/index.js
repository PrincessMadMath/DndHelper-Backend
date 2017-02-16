const model = require('../../DatabaseAccess').getModel()


function getMonsterList(){

    return model.list("monsters", 1, 0).then(monsters => {
      return monsters
    })
}

module.exports.getMonsterList = getMonsterList