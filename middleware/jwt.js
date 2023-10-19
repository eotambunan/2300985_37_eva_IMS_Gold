const {sign,verify} = require('jsonwebtoken')
const jwk = 'your_secret_key'

const createTokens = (user)=>{
    const accessToken = sign({
        id:user.id,
        name:user.name,
        email : user.email,
        role:user.role},
        jwk)
        return accessToken
}

const extractToken = (req,res,next)=>{
    const accessToken = req.cookies["access-token"]
    if (accessToken) {
        const decodedToken = verify(accessToken,jwk)
        req.user = decodedToken        
    }else{
        req.user = null
    }
    return next()
}


const verifyTokens = (req,res,next) =>{
    const accessToken = req.cookies["access-token"]
    if(!accessToken){
            res.redirect("/users/login")
            return next()
    }
    try {
        const validToken = verify(accessToken,jwk)
        if(validToken){
            // req.authenticated = true
            req.user = validToken;
            return next()
        }
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}
const verifyAdminTokens = (req,res,next) =>{
    const accessToken = req.cookies["access-token"]
    const validToken = verify(accessToken,jwk)
    req.user = validToken
    if (validToken.role=="admin") {
        return next()
    } else if (validToken.role!="admin") {
        res.render("error/error")
    }
}


module.exports = {
    createTokens,
    extractToken,
    verifyTokens,
    verifyAdminTokens
}