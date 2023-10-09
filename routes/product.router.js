const express = require ('express')
const router = express.Router()
const upload = require("../middleware/multer")


const productController = require('../controllers/product.controller')
const usersController = require("../controllers/users.controller")
const promoController = require("../controllers/promo.controller")
// registration Admin
router.get("/registration", productController.getAdminRegistration)
router.post("/registration", productController.postAdminRegistration)


// Admin Home
router.get("/home",productController.getAdminHome)

// Admin Log-Out
router.post("/logout",usersController.logout)

// Product
router.get("/product",productController.getAllProducts)

// Add Product
router.get("/add_product",productController.addProduct)
router.post("/add_product",upload.single('image'),productController.submitAddProduct)


// Edit Product
router.get("/edit/:id",productController.editProduct)
router.post("/edit/:id",upload.single('image'),productController.submitEditProduct)


// Delete Product
router.post("/product/:id",productController.deleteProduct)

// Promo
router.get("/promo-price",promoController.promo)
router.post("/promo-price/add",promoController.submitAddPromo)
router.get("/promo-banner",promoController.getPromoBanner)
router.post("/promo-banner/add",upload.single('promo_banner'),promoController.addPromoBanner)
router.post("/promo-banner/delete",promoController.deletePromoBanner)





module.exports = router