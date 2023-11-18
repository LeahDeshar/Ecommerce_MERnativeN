import express  from "express";
import { createproductController, deleteImageProductController, deleteProductController, getAllProductController, getOneProductController, getTopProductController, updateImageProductController, updateProductController } from "../controllers/productController.js";
import { isAdmin, isAuth } from "../middleware/authMiddleware.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.get("/getAll",getAllProductController)

// get top 3 product
router.get("/getTop",getTopProductController)

router.get("/getOne/:id",getOneProductController)
router.post("/create",isAuth,isAdmin,singleUpload ,createproductController)
// update the product only
router.put("/update/:id",isAuth,isAdmin,updateProductController)
// update the product images
router.put("/updateImage/:id",isAuth,isAdmin,singleUpload,updateImageProductController)


router.delete("/delete/:id",isAuth,isAdmin,deleteProductController)
router.delete("/deleteImage/:id",isAuth,isAdmin,deleteImageProductController)
export default router;