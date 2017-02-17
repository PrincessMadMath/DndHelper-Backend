const model = require('../../DatabaseAccess').getModel()

const collectionName = "monsters"

function getMonsterList(){
    return model.getCompleteCollection(collectionName);
}

function addMonster(monster)
{
  return model.create(collectionName, monster);
}

module.exports.getMonsterList = getMonsterList

module.exports = {
    getMonsterList,
    addMonster
}