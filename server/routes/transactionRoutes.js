const route = require('express').Router()
const transactionController = require('../controller/transaction')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

// route.use(authentication) //sementara masih error, lagi di perbaiki
route.get('/',transactionController.findAll)
route.get('/:userId', transactionController.findByUserId)
route.post('/add',transactionController.create)
route.post('/checkout/:UserId',transactionController.checkout)
route.delete('/:itemId',transactionController.delete)
    
module.exports = route


