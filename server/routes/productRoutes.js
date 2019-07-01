const route = require('express').Router()
const productController = require('../controller/product')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const uploadImages = require('../helpers/uploadImages')

route.get('/',productController.findAll)
route.get('/:id', productController.findByPk)
route.use(authentication)
route.post('/add',uploadImages.multer.single('photo'),uploadImages.sendUploadToGCS,productController.create)
route.delete('/:id',authorization,productController.delete)
route.put('/:id',authorization, productController.update)
    
module.exports = route


