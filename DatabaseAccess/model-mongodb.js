const MongoClient = require('mongodb').MongoClient

let collection;

const uri = process.env.MONGO_URI
const username = process.env.MONGO_USER
const password = process.env.MONGO_PWD

function getDatabase() {
    return MongoClient.connect(uri).then(db => {
            return db.authenticate(username, password).then(res => {
                    return db;
                })
        })
        .catch(err => {
            console.log("Error in get database: " + err)
        })
}

function getCollection(collectionName) {
    return getDatabase().then(db => {
        const collection = db.collection(collectionName)
        return collection
    })
}

module.exports = {
    getCollection
}