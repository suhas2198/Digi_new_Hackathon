
import express from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controller/productController.js'

const router=express.Router()

//routes |POST 

router.post('/products',createProduct)

//route | GET
router.get('/products',getProduct)

//route |GET for Single product

router.get('/products/:productId',getProductById)

//route | updating product

router.put('/products/:productId',updateProduct)

//route |Delete product
router.delete('/products/:productId',deleteProduct)


export default router