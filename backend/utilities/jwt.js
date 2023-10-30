
const jwt = require("jsonwebtoken")


module.exports.secretTokenFunc = async (id)=> {
 
    return jwt.sign({id}, process.env.SECRETTOKENKEY, {expiresIn: "30days"})


}