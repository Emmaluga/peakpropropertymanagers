const mongoose = require("mongoose")
const scrpt = require("node:crypto")
const rentUserModel = new mongoose.Schema({

    firstName : {
        type: String,
        required: true
    },

    lastName : {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,

    }


}, {timestamps: true})

rentUserModel.pre("save", async function(next){
    if(!this.isModified){
       next()
    }

    // this.password = await bcrypt.hash(this.password, 10)

})

// userModel.methods.comparePassword =  async function(comparePassword){
//    return await  scrpt.scrypt.
// }


module.exports = mongoose.model("RentUsers", rentUserModel)