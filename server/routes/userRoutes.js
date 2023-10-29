import express from "express";
import { getUserProfileController, loginController, logoutController, passUpdateController, profilePicUpdateController, profileUpdateController, registerController } from "../controllers/userController.js";
import {isAuth}  from "../middleware/authMiddleware.js";
import { singleUpload } from "../middleware/multer.js";


const router = express.Router()
router.post('/register',registerController)
router.post('/login',loginController)

// create a private route and verify them using the
// token
// create authentication middleware

router.get("/profile",isAuth,getUserProfileController)
router.get("/logout",isAuth,logoutController)

router.put('/profileUpdate',isAuth,profileUpdateController)
router.put('/passUpdate',isAuth,passUpdateController)
router.put('/picUpdate',isAuth,singleUpload,profilePicUpdateController)
export default router