import express from 'express'
import { AddProduct, GetProduct } from '../controller/productController'

const ProductRoute =express.Router()

ProductRoute.post("/add",AddProduct)
ProductRoute.get("/getproduct",GetProduct)
ProductRoute.put("/update",)
ProductRoute.delete("/delete",)


export default ProductRoute