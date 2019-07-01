const jwt = require('../helpers/jwt')
const User = require('../models/User')


function authorization(req, res, next){
    // let decodeToken = jwt.decode(req.headers.token)
    User.findById(req.decoded.id)    
    .then((gotData)=>{
        if(gotData){
            if(gotData.role === "Admin"){
                next()
            } else {
                throw {code : 401, message : "Unauthorized"}
            }
        } else {
            throw {code : 404, message : "Not Found"}
        }
    })
    .catch(next)
}

module.exports = authorization