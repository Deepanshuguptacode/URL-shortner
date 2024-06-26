import {decodeURL, redirectUrl, urlShorten} from "../controllers/controller.js"



const route=(app)=>{

    app.post("/short",urlShorten)
    app.get("/decode/:url",decodeURL)
    app.get("/rd/:url",redirectUrl)
}

export { route };