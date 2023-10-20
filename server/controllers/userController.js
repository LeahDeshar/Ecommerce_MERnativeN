import Users from "../models/userModel.js";


export const registerController = async (req,res)=>{
  try {
    const {name,email,password,address,city,country,phone} = req.body;

    if(!name || !email || !password || !address || !city || !country || !phone){
        return res
           .status(400)
           .json({
            msg: "Fill all the fields",
            success: false,
        })
    }

    const findEmail = await Users.findOne({email: email})
    if(findEmail)
    {
        return res
           .status(400)
           .json({
            msg: "Email already exist",
            success: false,
        })
    }

    const user = await Users.create({
        name,
        email,
        password,
        address,
        city,
        country,
        phone
    })
    if (!user) 
    {
        return res
           .status(400)
           .json({
            msg: "Something went wrong",
            success: false,
        })
    }
    
    return res
            .status(200)
            .json({
                msg: "User created successfully",
                success: true,
                user
            })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
        msg: "Internal Error (register)",
        success: false,
        error
    })
  }
}

export const loginController= async (req,res)=>{
    try {
        const {email,password} = req.body
    // login validation
    if(!email || !password){
        return res
           .status(400)
           .json({
            msg: "Fill all the fields",
            success: false,
        })
    }
    // check if email exist
    let user = await Users.findOne({email})
    if(!user){
        return res
           .status(400)
           .json({
            msg: "Email does not exist",
            success: false,
        })
    }
    // check if password is correct
    const isMatch = await user.isValidPassword(password)
    if(!isMatch){
        return res
           .status(400)
           .json({
            msg: "Incorrect password",
            success: false,
        })
    }
    // // create token
    // const token = await user.generateToken()
    // if(!token){
    //     return res
    //        .status(400)
    //        .json({
    //         msg: "Something went wrong",
    //         success: false,
    //     })
    // }
    // send response
    return res
            .status(200)
            .json({
                msg: "Login successfully",
                success: true,
                user
            })
    } catch (error) {
        console.log(error);
         return res
            .status(400)
            .json({
                msg: "Internal Error (login)",
                success: false,
                error
        })
    }
}