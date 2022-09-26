const dbconnect = require("./mongodb");

const deleteData=async ()=>{

    let data =await dbconnect();
    data=await data.deleteOne(
        {name:"max note 5"}
    )
    console.log(data)
}
deleteData();