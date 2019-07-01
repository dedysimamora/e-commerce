const Product = require('../models/Product')
const jwt = require('../helpers/jwt')

class ProductController {
    static findAll(req,res,next){
       Product.find()
       .then((foundProduct)=>{
           if(!foundProduct){
               throw ({status : 404, message : "Not Found"})
           } else {
                res.json(foundProduct)
           }
       })
       .catch(next)

    }

    static findByPk(req,res,next){
        console.log(req.params.id);
        Product.findById(req.params.id)
        .then((foundProduct)=>{
            console.log("then");
            
            if(!foundProduct){
                throw ({code : 404, message : "Not Found"})
            } else {
                 res.json(foundProduct)
            }
        })
        .catch(next)
    }

    static create(req,res,next){
        let newProduct = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            photo:req.file.cloudStoragePublicUrl,
            qty : req.body.qty
        }
        Product.create(newProduct)
            .then((gotData)=>{
                res.status(201).json(gotData)
            })
            .catch(next)

    }  
    static delete(req,res,next){
        Product.findByIdAndDelete(req.params.id)
        .then((foundProduct)=>{
            if(!foundProduct){
                throw ({code : 404, message : "Not Found"})
            } else {
                 res.json(foundProduct)
            }
        })
        .catch(next)

    }
    static update(req,res,next){
        Product.findOne({_id : req.params.id})
        .then((foundProduct)=>{
            if(!foundProduct){
                throw ({code : 404, message : "Not Found"})
            } else {
                 foundProduct.set(req.body)
                 return foundProduct.save()
            }
        })
        .then((savedProduct)=>{
            res.json(savedProduct)
        })
        .catch(next)
    }
}

module.exports = ProductController