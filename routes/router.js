const express = require ('express')
const router = express.Router()
const {verifyTokens, extractToken} = require("../middleware/jwt")


// admin
const productRouter = require("./product.router")
router.use("/admin",verifyTokens,productRouter)
// router.use("/aselole",productRouter)

// users
const usersRouter = require("./users.router")
router.use("/users",usersRouter)


module.exports = router