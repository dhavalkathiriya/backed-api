import express from 'express'
import { PORT } from './config'
import connectDB from './db/db'
import UserRoute from './Routes/UserRoute'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// import ProductRoute from './Routes/Product.Route'

connectDB()

const app =express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/auth",UserRoute)
// app.use("/product",ProductRoute)


app.listen(PORT,() =>  {
console.log(`server is  running ${PORT}`);
})