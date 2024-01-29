import express from 'express'
import { createCategory, deleteCategory, getCategory, getCategoryById, updateCategory } from '../controller/catController.js'


const router =express.Router()
//router ||post 

router.post('/category',createCategory)

//router || GET

router.get ('/category',getCategory)

//router ||Get by id

router.get('/category/:categoryId', getCategoryById)

//router || update

router.put('/category/:categoryId', updateCategory)

//router ||delete

router.delete('/category/:categoryId',deleteCategory)


export default router