const Transaction = require('../models/Transaction')
const jwt = require('../helpers/jwt.js')

class TransactionController {

    static findAll(req,res,next){
        let decodeToken = jwt.decode(req.headers.token)
        Transaction.find({UserId :decodeToken.id })
        .then((foundTransaction)=>{
            if(!foundTransaction){
                throw ({status : 404, message : "Not Found"})
            } else {
                 res.json(foundTransaction)
            }
        })
        .catch(next)
 
     }

     static delete(req,res,next){
         console.log('masuk delete item');
         
        let decodeToken = jwt.decode(req.headers.token)
        console.log(decodeToken.id, "token untuk edit")
        
        Transaction.deleteOne({productId: req.params.itemId, UserId :decodeToken.id })
        .then((foundTransaction)=>{
            if(!foundTransaction){
                throw ({code : 404, message : "Not Found"})
            } else {
                 res.status(200).json(foundTransaction)
            }
        })
        .catch(next)

    }


    static create(req, res, next) {
        let decodeToken = jwt.decode(req.headers.token)

        Transaction.findOne({UserId:decodeToken.id, productId:req.body.productId, status:false})
            .then((gotProduct)=>{
                //mau beli barang yang udah ada di card
                if(gotProduct) {
                    console.log("masuk udah ada");
                    
                    gotProduct.amount += 1
                    return gotProduct.save()
                        .then((addAmount)=>{
                            res.status(201).json(addAmount)
                        })
                        .catch(next)
                } else {
                    //barang yang mau di beli blom ada dicard
                    console.log("masuk blm ada");
                    let newTransaction = {
                        UserId: decodeToken.id,
                        productId : req.body.productId,
                        status: false,
                    }
                    Transaction.create(newTransaction)
                        .then((gotData) => {
                            res.status(201).json(gotData)
                        })
                        .catch(next)
                }
            })
   
  
        

    }

    static findByUserId(req,res,next){
        console.log(req.params.userId)
        console.log("masuk Cart");
        
        Transaction.find({UserId : req.params.userId, status:false})
        .populate('productId')
        .then((gotUserTransaction)=>{
            
            if(gotUserTransaction){
                // console.log(gotUserTransaction, "GotTransaction");
                res.status(200).json(gotUserTransaction)
            } else {
                throw {code : 404, message: "not found"}
            }
        })
        .catch(next)
    }
    


    static checkout(req,res,next){
        console.log("masuk Controller Checkout");
        
        Transaction.updateMany({ UserId: req.params.UserId }, { status: true })
        .then((sucsess)=>{
            if(sucsess){
                res.status(201).json(sucsess)
            } else {
                throw {code : 500, message : "internal server error"}
            }
        })
        .catch(next)
    }

}

module.exports = TransactionController
