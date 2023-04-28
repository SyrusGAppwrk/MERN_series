const { MongoClient } = require("mongodb")
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const database = "dbSyrus";

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('Product');

}

module.exports=dbConnect;