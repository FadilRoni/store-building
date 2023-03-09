const express = require('express')
const routes = express.Router()

const { getAllProducts, getProductById, saveProduct, updateProduct, deleteProduct } = require('./handler')

routes.get('/', getAllProducts)
routes.get('/:id', getProductById)
routes.post('/', saveProduct)
routes.put('/:id', updateProduct)
routes.delete('/:id', deleteProduct)

module.exports = routes