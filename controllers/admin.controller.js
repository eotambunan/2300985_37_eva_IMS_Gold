const {tb_product,tb_users,tb_price} = require("../models")

const getAdminHome = (req,res)=>{
    const dataUser = req.user
    res.render("admin/admin-home",{dataUser})
}

const getAdminRegistration = (req,res)=>{
    res.render("admin/admin-registration")
}

const postAdminRegistration = async (req,res)=>{
    const {name,email,password} = req.body
    try {
        const registered = await tb_users.findOne({
            where: {email}
        })
        if (registered) {
            res.status(401).json({
                message: "email has been registered",
                statusCode:401
            })
        }else{
            await tb_users.create({name,email,password,role:"admin"})
            res.status(201).json({
                message : "SUCCESS register new Admin",
                statusCode : 201
            })
        }
    } catch (error) {
        res.status(400).json({
            message : "FAILED register new Admin",
            statusCode : 400
        })

    }
}


const getAllProducts = async (req,res)=>{
    try {
        const data = await tb_product.findAll()
        console.log(data);
        res.render("admin/admin-product",{data})       
    } catch (error) {
        res.status(400).json({
            message : "ERROR",
            errMessage : error
        })
    }
}

const editProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const data=await tb_product.findOne({
            where:({id})
        })
        res.render("admin/admin-edit-product",{data})
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

const submitEditProduct = async(req,res)=>{
    try {
        const {title,writer,category,year,price,synopsis} = req.body
        const {image} = req.file.filename
        const {id} = req.params
        console.log(image);
        const addProduct = await tb_product.update({
            title,
            writer,
            category,
            year,
            price,
            synopsis,
            image
        },{
            where : {id}
        }
        )
        res.redirect("/admin/product")                
    } catch (error) {
        res.status(404).json({
            status : "ERROR",
            message : error.message
        })
    }
}

const addProduct = async (req,res) =>{
    res.render("admin/admin-add-product")
}
const submitAddProduct = async (req,res)=>{
    const {title,writer,category,year,price,synopsis} = req.body
    const image = req.file.filename
    console.log(image);
    try {
        const dataProduct = await tb_product.create({title,writer,category,year,price,synopsis,image})
        const dataPrice = await tb_price.create({
            product_id : dataProduct.id,
            normal_price : price,
            price
        })
        res.redirect("/admin/product")        
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}


const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const deleteData = await tb_product.destroy({
            where:{id}
        })
        res.redirect("/admin/product")
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}


module.exports = {
    getAdminHome,
    getAdminRegistration,
    postAdminRegistration,
    getAllProducts,
    editProduct,
    submitEditProduct,
    addProduct,
    submitAddProduct,
    deleteProduct,
}