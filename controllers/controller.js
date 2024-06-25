// const { customRandom, urlAlphabet } = require('nanoid')
import { customAlphabet } from 'nanoid'
import {urlModel} from '../models/model.js'

const urlShorten=(req,res)=>{
    const {url}=req.body;
    if(!url){
        res.status(404).send({
            message:"url is required"
        })
    }
    const nanoid = customAlphabet('1234567890abcdef', 5)
    
    var shortUrl=url
    shortUrl=nanoid(5)
    urlModel.create({
        longUrl:url,
        shortUrl:shortUrl
    })
    res.status(201).send({
        message:"url created successfully",
        shortUrl: `http://localhost:5000/decode/${shortUrl}`
    })
    
}

const decodeURL = async (req, res) => {
    const url = req.params.url;
    console.log(url);
    if (!url) {
        return res.status(404).send({
            message: "url is required"
        });
    }

    try {
        const longUrl = await urlModel.findOne({ shortUrl: url });
        if (!longUrl) {
            return res.status(404).send({
                message: "URL not found"
            });
        }

        res.status(200).send({
            message: "url decoded successfully",
            longUrl: longUrl.longUrl
        });
    } catch (error) {
        console.error("Error finding URL:", error);
        res.status(500).send({
            message: "Internal server error",
            error: error.message
        });
    }
};


export { urlShorten , decodeURL};