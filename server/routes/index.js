const express = require('express');
const route = express.Router();
const productRoutes = require('./productRoutes')
const transactionRoutes = require('./transactionRoutes')
const userRoutes = require('./userRoutes')
route.use('/product', productRoutes)
route.use('/transaction', transactionRoutes)
route.use('/user',userRoutes)


module.exports = route