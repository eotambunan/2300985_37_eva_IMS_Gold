const express = require ('express')
const router = express.Router()
const {verifyTokens, extractToken} = require("../middleware/jwt")

const usersController = require("../controllers/users.controller")
// Users Home
router.get("/home",extractToken,usersController.getUsersHome)
// translate from JWT to Object

// Users Product
router.get("/product",verifyTokens,usersController.getUsersProduct)

// Users Login
router.get("/login",usersController.loginPage)
router.post("/login",usersController.login)
router.post("/logout",usersController.logout)


// Users Registration
router.post("/registration",usersController.registration)


module.exports=router