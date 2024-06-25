import express from "express"
import mongoose from "mongoose"
import {route} from "./routes/route.js"

const app=express()

// const shortUrl=require("./models/shortUrl")
// app.set("view engine","ejs")
// app.set("views",path.join(__dirname,"views"))
mongoose.connect("mongodb://localhost:27017/shorturl").then(()=>{
    console.log("connected to mongo")
}).catch((err)=>{
    console.log(err)
})

// app.use(express.urlencoded({extended:false}))
app.use(express.json())
route(app)

app.listen(5000,()=>{
    console.log("connected to server at PORT : 5000")
})