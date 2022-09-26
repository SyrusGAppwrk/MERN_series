    const dbconnect = require("./mongodb");

    const update=async ()=>{

        let data =await dbconnect();
        data=await data.update(
            {name:"max1"},{$set:{
                name :"max note 5"
            }}
        )
        console.log(data)
    }
    update();