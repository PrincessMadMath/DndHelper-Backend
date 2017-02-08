const MongoClient = require('mongodb').MongoClient

let collection;

const uri = process.env.MONGO_URI
const username = process.env.MONGO_USER
const password = process.env.MONGO_PWD


function getCollection (cb) {
  if (collection) {
    setImmediate(() => {
      cb(null, collection);
    });
    return;
  }
  MongoClient.connect(uri, (err, db) => {
    if (err) {
      cb(err);
      return;
    }

    db.authenticate(username, password, function(err, res){
        collection = db.collection('monsters');
        cb(null, collection);
    })
  });
}


function getMonsterList(cb){
    getCollection(cb)
}

module.exports.getMonsterList = getMonsterList