import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        maxLengh:8
    },
},
{timestamps:true}
);

export default  mongoose.model("users", userSchema);