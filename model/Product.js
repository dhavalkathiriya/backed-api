import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    category: String,
    userId:String,
});

export default mongoose.model("products", productSchema);