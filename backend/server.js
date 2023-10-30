 require("dotenv").config()
const express = require("express");
const app = express()
const cors = require("cors");
const connectDB = require("./config/connectDB");
const cookieParser = require("cookie-parser");
const authRoute =  require("./Route/authRoute")



//middleware
app.use(express.json())
app.use(cors({origin: true, credentials: true}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


//routes
app.use("/api", authRoute)



const port = 8080

const start = async ()=> {

    try {
        
        connectDB(process.env.MONGO)
         console.log("connected")

         app.listen(port, ()=> console.log( `server running on port ${port} `))

     } catch (error) {
         console.log("failed")
         
     }
 
}

start()
