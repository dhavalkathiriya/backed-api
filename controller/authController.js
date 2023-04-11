import User from "../model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config";

// REGISTER CONTROLLER
export const RegisterController = async (req, res) => {
  const { name, email, password } = req.body;

  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(501).json("user all ready exist");
  }

  const hashpassword = bcrypt.hashSync(password);
  const user = await new User({
    name,
    email,
    password: hashpassword,
  });
  try {
    const data = await user.save();
    res.status(401).json({ data });
  } catch (error) {
    res.status(401).json({ message: error.message });
    console.log(error);
  }
};

// LOGIN CONTROLLER
export const LoginController = async (req, res) => {
  const { email, password } = req.body;
  let existUSer;

  try {
    existUSer = await User.findOne({ email });
  } catch (error) {
    return new Error(error);
  }
  if (!existUSer) {
    res.status(401).json({ message: "user is not fonund" });
  }
  const isCorrectPassword = bcrypt.compareSync(password, existUSer.password);
  if (!isCorrectPassword) {
    res.status(401).json({ message: "unvalid password" });
  }

  const accessToken = jwt.sign({ id: existUSer._id }, JWT_KEY, {
    expiresIn: "30s",
  });

  res.cookie(String(existUSer._id),accessToken,{
  path:"/",
  expires: new Date(Date.now() + 1000 * 30),
  httpOnly:true,
  sameSite :'lax'
  })

  return res.status(201).json({ message: "successfully login", accessToken });
};

// USER CONTROLLER

export const GetUser = async (req, res, next) => {
  const userId = req.id;

  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
  if (!user) {
    return res.status(401).json({ message: "user not found" });
  }
  return res.status(401).json({ user });
};
