const mongoose=require("mongoose")

const schema=mongoose.Schema(
    
        {
            "id":"",
            "title":"",
            "price":""
            
            }
        )
        let productmodel=mongoose.model("products",schema)
        module.exports(productmodel)
