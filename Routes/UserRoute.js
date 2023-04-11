import express from 'express'
import { GetUser, LoginController, RegisterController } from '../controller/authController';
import { refreshToken, verifytoken } from '../controller/verifytoken';


const UserRoute = express.Router();

UserRoute.post("/register",RegisterController)
UserRoute.post("/login",LoginController)
UserRoute.get("/user",verifytoken,GetUser)
UserRoute.get("/refresh",verifytoken,GetUser,refreshToken)

export default UserRoute