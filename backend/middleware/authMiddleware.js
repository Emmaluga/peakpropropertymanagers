require("dotenv").config()
const jwt = require("jsonwebtoken")
const userModel = require("../model/userModel")

module.exports.authMiddleware = async (req,res,next)=>  {

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){

        try {
            
                    token = req.headers.authorization.split(" ")[1]
                
                    const decoded = await jwt.verify( token, process.env.SECRETTOKENKEY )
            
                    req.authUsers = await userModel.findById(decoded.id).select("-password")

                    next()
            
        } catch (error) {
            console.log(error)
            res.status(500)
            throw new Error("not authorized")

        }

        if(!token){
           res.status(500)
           throw new Error("not authorized, no token.")
        }
    
       }else{
        res.status(500)
        throw new Error("not working completly.")
       }



    }

    

 

    

