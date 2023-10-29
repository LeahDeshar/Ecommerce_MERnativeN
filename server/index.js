import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/config.js'
import router from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import cloudinary from "cloudinary"

const app = express()
app.use(cors())
dotenv.config()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

// cloudinary config
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})
connectDB()

app.get('/',(req,res)=>
{
    res.send("Hello")
})

app.use('/api/v1/user',router)
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} on ${process.env.NODE_ENV} mode`.bgCyan.white);
})