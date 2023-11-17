import  JWT  from "jsonwebtoken"
import Users from "../models/userModel.js"

// user auth
export const isAuth = async(req,res,next) =>
{
    const {token} =req.cookies
    console.log("token",token);
    if(!token){
        return res.status(401).send({
            success: false,
            message: "Unauthorized user"
        })
    }
    const decodeData = JWT.verify(token,process.env.JWT_SECRET)
    console.log("decodeData",decodeData);
    req.user = await Users.findById(decodeData._id)
    next()
}

// admin auth middleware
export const isAdmin = async(req,res,next) =>
{
    if(req.user.role !== "admin")
    {
        return res.status(401).send({
            success: false,
            message: "Unauthorized user,only admin"
        })
    }
    next()
}