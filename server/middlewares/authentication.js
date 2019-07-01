const jwt = require('../helpers/jwt')
const User = require('../models/User')


function authentication(req, res, next){
    if(req.headers.hasOwnProperty('token')){
        try {
            req.decoded = jwt.decode(req.headers.token)
            console.log(req.decode.id, "ni cet");
            
            User.findOne({id : req.decoded.id})
            .then((gotData)=>{
                if(!gotData){
                    throw {code : 404, message:"user not found broo"}
                } else {
                    next()
                }
            })
        .catch(next)
          } catch(err) {
            throw {code : 401, message : "Unauthorized blabla"}
          }
        
    } else {
        throw {code : 401, message : "Unauthorized chin chin"}
    }
}

module.exports = authentication