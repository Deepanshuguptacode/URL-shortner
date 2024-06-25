import mongoose from "mongoose"

const urlSchema=new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    }
})


const urlModel = mongoose.model("url", urlSchema);

export { urlModel };