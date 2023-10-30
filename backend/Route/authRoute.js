const express = require("express")
const authRoute = express.Router()
const {registerContrl, loginContrl, rentUserProfileContrl} = require("../Controller/authController")


authRoute.post("/rent", registerContrl)
// authRoute.post("/login", loginContrl)
// authRoute.post("/me", rentUserProfileContrl)

module.exports = authRoute