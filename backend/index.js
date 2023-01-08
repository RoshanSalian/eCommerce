import express from 'express'
import products from './data/products.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use('/api/products', productRoutes)

app.use(errorHandler)

app.get('/', (req, res)=>{
    res.send("API running!")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Server on'))

