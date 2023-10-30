const expressAsyncHandler = require("express-async-handler");
const rentUserModel = require("../model/userModel");
const {secretTokenFunc} = require("../utilities/jwt")


module.exports.registerContrl = expressAsyncHandler ( async (req,res,next )=> {

    const {firstName , lastName , email, password   } = req.body

       if(!firstName, !lastName, !email, !password ){
        throw new Error("All fields are required")
       }

    const userExist = await rentUserModel.findOne({email})

      if(userExist){
         res.status(500)
         throw new Error("Email already exist")
      }

      const rentUser = await rentUserModel.create({
         firstName,
         lastName,
         email,
         password
      })

      const token = secretTokenFunc(rentUser._id)
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false
      })

      res
      .status(200)
      .json({message:"rent user sign in succesfully", success: true, rentUser

      
    })
    next()

    if(!rentUser){
        throw new Error("invalidates user")

    }
       
   
})



// module.exports.loginContrl = expressAsyncHandler ( async (req, res )=> {

//     const {email, password} = req.body

//     if(!email || !password ){
//         throw new Error("All fields are required")

//     }

//     const checkUser = await userModel.findOne({email})
//       if(!checkUser){
//         throw new Error("email or password does not exist")
//       }

//      const authUser = await checkUser.comparePassword(password)
//       if(!authUser){
//          throw new Error("password or email does not match")
//       }

//          const token = secretTokenFunc(checkUser._id )
//            res.cookie("token", token, {
//             withCredentials: true,
//              httpOnly: false
//            })

//       res
//       .status(201)
//       .json({message: "Logged in successfully" , success: true })



// })

// module.exports.rentUserProfileContrl = expressAsyncHandler ( async (req, res, next ) => {

//    const {_id } = await userModel.findById(req.authUsers.id)
   

//        if(!_id){

//           res.status(500)
//           throw new Error("bad auth")

//        }

//      res.json({
   
//         id: _id
   
//      })

//      next()

// })


//  module.exports.logoutContrl = expressAsyncHandler ( async (req, res,  ) => {
  
//     res
//     .clearCookie("token")
//     .res.status(200)
//     .json({message: "looged out", success: true })


//  })