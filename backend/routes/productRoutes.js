import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @route   GET /api/products/:id
router.get('/:id', asyncHandler(async(req, res)=>{
    // const product = products.find(p => p._id === req.params.id)
    const product = await Product.findById(req.params.id)
    
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}))

// @route   GET /api/products/
router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

export default router