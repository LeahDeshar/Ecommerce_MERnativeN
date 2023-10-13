import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express()
app.use(cors())
dotenv.config()
app.use(morgan('dev'))
app.use(express.json())


app.get('/',(req,res)=>
{
    res.send("Hello")
})
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
})