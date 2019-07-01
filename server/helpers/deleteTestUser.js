const User = require('../models/User')

function deleteTestPlayer(cb){
    
    User.findOneAndDelete({ email: "test@gmail.com" })
    .then((gotData)=>{
        console.log("then");
        
        console.log(gotData);
        cb()
    })
    .catch((err)=>{
        console.log("catch");
        console.log(err);
        
    })
}
module.exports = deleteTestPlayer