const express = require ('express')
const router = express.Router()
const {verifyAdminTokens} = require("../middleware/jwt")


// admin
const productRouter = require("./admin.router")
router.use("/admin",verifyAdminTokens,productRouter)
// router.use("/aselole",productRouter)

// users
const usersRouter = require("./users.router")
router.use("/users",usersRouter)

router.use('/', (req, res) => {
    res.render("error/error");
});


module.exports = router