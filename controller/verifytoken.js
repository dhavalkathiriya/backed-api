import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config";

export const verifytoken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];

  console.log(token);
  // const header =req.headers['authorization']
  // const token =header.split(" ")[1]
  if (!token) {
    return res.status(401).json("token is not found");
  }
  jwt.verify(String(token), JWT_KEY, (err, user) => {
    if (err) {
      return res.status(401).json("Invalid token");
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

export const refreshToken = async (req, res, next) => {
  const cookies = req.headers.cookie;
  const pretoken = cookies.split("=")[1];
  if (!pretoken) {
    return res.status(401).json("token is not fonound");
  }

  jwt.verify(String(pretoken), JWT_KEY, (err, user) => {
    if (err) {
      return res.status(401).json("Invalid token");
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] =" ";
    const token =jwt.sign({id:user.id},JWT_KEY,{expiresIn:"30s"})
    res.cookie(String(existUSer._id),token,{
      path:"/",
      expires: new Date(Date.now() + 1000 * 30),
      httpOnly:true,
      sameSite :'lax'
      })
      req.id =user.id
      next()
  });
};
