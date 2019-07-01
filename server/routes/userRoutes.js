const route = require('express').Router()
const userController = require('../controller/user')
const uploadImages = require('../helpers/uploadImages')

route.post('/register',uploadImages.multer.single('avatar'),uploadImages.sendUploadToGCS,userController.register)
route.post('/login',userController.login)
route.post('/googlelogin',userController.googlelogin)
route.patch('/edit/:id',userController.edit)

module.exports = route
