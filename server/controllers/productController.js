// create get all product controller
import Products from "../models/productModel.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from "cloudinary"

export async function getAllProductController(req,res){
    const {keyword,category} = req.query
    try{
        const products = await Products.find({
            name: {
                $regex: keyword ? keyword : "",
                $options: "i"
            },
            // category: category? category
        }).populate('category')


        return res.status(200).json({
            success: true,
            message:"All Product fetched",
            totalProduct: products.length,
            products
        })
        }catch (error) {
            if(error.name === 'CastError')
            {
                return res.status(500).json({
                    success: false,
                    message: "Invalid Id",
                });
            }
            return res.status(500).json({
                success: false,
                message: "Error in product api " + error.message,
            });
        }

}
// controller to get all top products
export async function getTopProductController(req,res){
    try {
        const products = await Products.find({}).sort({rating: -1}).limit(3)
        return res.status(200).json({
            success: true,
            message:"All Top 3 Product fetched",
            totalProduct: products.length,
            products
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in product api " + error.message,
        });
        
    }   
}
export async function getOneProductController(req,res){
    try {
        const product = await Products.findById(req.params.id);
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            message:"Product fetched",
            product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in product api " + error.message,
        });
        
    }
}
export async function createproductController(req,res){
    try {
        const {name,description,price,category,stock} = req.body
        console.log(req.body);
        // validation
        if(!name || !description || !price || !category || !stock){
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields",
            });
        }

        // file validation
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "Please upload a file",
            });
        }
        const file = getDataUri(req.file)

        const result = await cloudinary.v2.uploader.upload(file.content)
        const image = {
            public_id: result.public_id,
            url: result.secure_url
        }
        await Products.create({
            name,
            description,
            price,
            category,
            stock,
            images: [image]
        
        })
        return res.status(200).json({
            success: true,
            message:"Product created",
            // product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in product api " + error.message,
        });
        
    }
}

export async function updateProductController(req,res){
    // update product api
    try {
        const product = await Products.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        const {name,description,price,category,stock} = req.body
        console.log(req.body);
        // validation
        if(name) product.name = name
        if(description) product.description = description
        if(price) product.price = price
        if(category) product.category = category
        if(stock) product.stock = stock

        await product.save();
        return res.status(200).json({
            success: true,
            message:"Product updated",
            // product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in product api " + error.message,
        });
        
    }

}

// update the image
export async function updateImageProductController(req,res){
    try {
        const product = await Products.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        // file validation
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "Please upload a file",
            });
        }
        const file = getDataUri(req.file)

        const result = await cloudinary.v2.uploader.upload(file.content)
        const image = {
            public_id: result.public_id,
            url: result.secure_url
        }
        product.images.push(image)
        await product.save();
        return res.status(200).json({
            success: true,
            message:"Product Image updated",
            // product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in product api " + error.message,
        });
        
    }
}

export async function deleteProductController(req,res){
    try {
        const product = await Products.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        // find and delete the image cloudinary
        for (let index = 0; index < product.images.length; index++) {
            await cloudinary.v2.uploader.destroy(product.images[index].public_id)
            
        }
        // delete the product
        await product.deleteOne();
        return res.status(200).json({
            success: true,
            message:"Product deleted",
            // product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in product api " + error.message,
        });
        
    }
}
export async function deleteImageProductController(req,res){
    try {
        const product = await Products.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        const id = req.query.id 
        if(!id){
            return res.status(400).json({
                success: false,
                message: "Product Image not found",
            });
        }
        let isExist = -1 
        product.images.forEach((image,index) => {
            if(image._id.toString() === id.toString()){
                isExist = index
            }
        })
        if(isExist < 0 ){
            return res.status(400).json({
                success: false,
                message: "Product Image not found",
            });
        }

        // delete image from cloudinary
        await cloudinary.v2.uploader.destroy(product.images[isExist].public_id)
        // delete image from database
        product.images.splice(isExist,1)
        await product.save();
        return res.status(200).json({
            success: true,
            message:"Product Image deleted",
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in product api " + error.message,
        });
        
    }
}

// create product review and comment controller
export async function createProductReviewController(req,res){
    try {
        const {rating,comment} = req.body
        const product = await Products.findById(req.params.id)
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        // check if user already review the product
        const isReviewed = product.reviews.find((review)=> review.user.toString() === req.user._id.toString())
        if(isReviewed){
            return res.status(400).json({
                success: false,
                message: "Product already reviewed",
            });
        }
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }
        product.reviews.push(review)
        product.numReviews = product.reviews.length
        product.rating = product.reviews.reduce((acc,item)=> item.rating + acc,0) / product.reviews.length
       
        await product.save()
        return res.status(200).json({
            success: true,
            message:"Product review created",
            // product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in product api " + error.message,
        });
        
    }
}