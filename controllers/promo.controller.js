const {tb_promo,tb_price,tb_product} = require("../models")

const promo = async (req,res)=>{
    const data = await tb_product.findAll({
        include : [{
            model : tb_price
        }]
    })
    try {
        res.render("admin/admin-promo-price",{data})            
    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}


const submitAddPromo = async(req,res)=>{
const {product_id,discount} = req.body
try {
    const normal_price = await tb_price.findOne({where : {product_id}})
    const update = await tb_price.update({
        discount,
        price : (normal_price.normal_price*(100-discount)/100)
    },{
        where : {product_id}
    })
    res.status(202).json({
        message : "SUCCESS update data",
        statusCode : 202
    })       
} catch (error) {
    res.status(400).json({
        message : error.message,
        statusCode : 400
    })
}
}

const getPromoBanner = async(req,res)=>{
    try {
        const data = await tb_promo.findAll()
        res.render("admin/admin-promo-banner",{data})        
    } catch (error) {
        res.status(404).json({
            message : error.message,
            statusCode : 404
        })
    }
}

const addPromoBanner = async(req,res)=>{
    try {
        const {name} = req.body
        const promo_banner = req.file.filename
        await tb_promo.create({name,promo_banner})
        res.redirect("/admin/promo-banner")        
    } catch (error) {
        res.status(400).json({
            message : error.message,
            statusCode : 400
        })
    }
}

const deletePromoBanner = async (req,res)=>{
    try {
        const {id} = req.body
        await tb_promo.destroy({where: {id}})
        res.status(202).json({
            message : "SUCCESS",
            statusCode : 202
        })        
    } catch (error) {
        res.status(400).json({
            message : error.message,
            statusCode : 400
        })

    }
}

module.exports = {
    submitAddPromo,    
    promo,
    getPromoBanner,
    addPromoBanner,
    deletePromoBanner
}