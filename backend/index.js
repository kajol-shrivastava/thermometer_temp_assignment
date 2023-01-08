const express=require('express')
const { default: mongoose } = require("mongoose");
const route = require("./routes/route.js");
mongoose.set('strictQuery', true);
const upload=require("express-fileupload")


const app=express()

app.use(express.json()); // tells the system that you want json to be used
app.use(upload())

// mongoDb connection
mongoose
  .connect(
    "mongodb+srv://kajolshrivastava:mongo%401999@cluster0.hzs17.mongodb.net/temperature_DB",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));

// Initial route
app.use("/", route);

app.listen(process.env.PORT||5000,function(){
    console.log("connected to port ",process.env.PORT||5000)
})