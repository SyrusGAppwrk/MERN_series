const dbconnect = require("./mongodb");

const insert=async ()=>{

    let data =await dbconnect();
    data=await data.insert([
        {name:"max1",brand:"micromax",price:3200,category:"mobile"}
    ])
    console.log(data)
}
insert();