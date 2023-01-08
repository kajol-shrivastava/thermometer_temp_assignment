const tempModel=require("../model/temperatureModel")
const fs = require('fs');


const getTemp=async function(req,res){
    try{
        //let data =await tempModel.find().limit
        const data=await tempModel.find()
        res.status(200).send({status:true,data:data})


    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

const uploadfile=function (req,res){
    try{
        if(req.files){
            console.log(req.files.upload)
            let file=req.files.upload
            let filename=file.name
            console.log(filename)
            let path=`./data/${filename}`
            console.log(file.mv)
            file.mv(path,function(err,obj){
                if(err){
                    console.log(err)
                   res.send(err)
                }
                else{
                   dBinsert(path,res)
        
                }
            })
        }
     

    }
 catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}


const dBinsert= async function(path,res){
    try{
        console.log(path)
        
        let cityData = fs.readFileSync(path);  
        let cities = JSON.parse(cityData);
        console.log(cities)
        const data=await tempModel.insertMany(cities)
        console.log(data)
        res.send("uploaded files")


    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}

module.exports={dBinsert,uploadfile,getTemp}