const mongoose=require("mongoose")

const temperatureSchema=new mongoose.Schema({
    ts:{
        type:Number
    },
    val:{
        type:Number
    }
});

module.exports=mongoose.model("Temperature",temperatureSchema)