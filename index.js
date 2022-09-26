const {MongoClient} = require('mongodb')
const url='mongodb://localhost:27017';
const client = new MongoClient(url);
const database ='dbSyrus';

async function getProducts(){
    let result = await client.connect();
    let db =result.db(database)
    let collection = db.collection('Product')
    let response = await collection.find({}).toArray();
    console.log(response)

}

getProducts();