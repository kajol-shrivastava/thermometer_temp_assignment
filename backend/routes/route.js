const express=require("express")
const { uploadfile,dBinsert, readFile, getTemp}=require("../controller/temperatureController")
const path = require('path');
const fs = require("fs");

const router=express.Router()

router.get("/",function(req,res){
    res.send("API is running")
})

router.post("/upload",uploadfile)

//router.post("/db",dBinsert)

router.get("/temp",getTemp)


module.exports=router