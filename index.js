const dbConnect = require('./mongodb')
const express = require('express')
const app = express();
app.use(express.json());

//get data from database 
app.get('/', async (req, resp) => {
    const db = await dbConnect();
    const data = await db.find().toArray();
    resp.send(data);
});

// insert data to database 
app.post('/data', async (req, resp) => {
    const db = await dbConnect();
    let result =await db.insertOne(req.body)
    resp.send(result)
})

app.listen(4200)