import {decodeURL, urlShorten} from "../controllers/controller.js"



const route=(app)=>{

    app.post("/short",urlShorten)
    app.get("/decode/:url",decodeURL)
}

export { route };