const express = require ('express')
const router = express.Router()
const upload = require("../middleware/multer")


const productController = require('../controllers/product.controller')
const usersController = require("../controllers/users.controller")
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
// testing new relational database
// router.get("/tampil_product",productController.tampilProduct)
// router.post("/tambah_product",upload.single('image'),productController.tambahProduct)
// router.post("/tambah_discount",productController.tambahDiscount)


// Edit Product
router.get("/edit/:id",productController.editProduct)
router.post("/edit/:id",upload.single('image'),productController.submitEditProduct)


// Delete Product
router.post("/product/:id",productController.deleteProduct)

// Promo
router.get("/promo",productController.promo)
router.post("/promo",productController.submitAddPromo)

module.exports = router