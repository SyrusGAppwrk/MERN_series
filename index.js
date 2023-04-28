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

app.listen(4200)