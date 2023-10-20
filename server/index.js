import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/config.js'
import router from './routes/userRoutes.js'
const app = express()
app.use(cors())
dotenv.config()
app.use(morgan('dev'))
app.use(express.json())

connectDB()

app.get('/',(req,res)=>
{
    res.send("Hello")
})

app.use('/api/v1/user',router)
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
})