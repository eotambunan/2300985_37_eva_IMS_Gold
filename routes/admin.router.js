const express = require ('express')
const router = express.Router()
const upload = require("../middleware/multer")


const adminController = require('../controllers/admin.controller')
const usersController = require("../controllers/users.controller")
const promoController = require("../controllers/promo.controller")
// Admin Home
router.get("/home",adminController.getAdminHome)

// registration Admin
router.get("/registration", adminController.getAdminRegistration)
router.post("/registration", adminController.postAdminRegistration)



// Admin Log-Out
router.post("/logout",usersController.logout)

// Product
router.get("/product",adminController.getAllProducts)

// Add Product
router.get("/add_product",adminController.addProduct)
router.post("/add_product",upload.single('image'),adminController.submitAddProduct)


// Edit Product
router.get("/edit/:id",adminController.editProduct)
router.post("/edit/:id",upload.single('image'),adminController.submitEditProduct)


// Delete Product
router.post("/product/:id",adminController.deleteProduct)

// Promo
router.get("/promo-price",promoController.promo)
router.post("/promo-price/add",promoController.submitAddPromo)
router.get("/promo-banner",promoController.getPromoBanner)
router.post("/promo-banner/add",upload.single('promo_banner'),promoController.addPromoBanner)
router.post("/promo-banner/delete",promoController.deletePromoBanner)





module.exports = router