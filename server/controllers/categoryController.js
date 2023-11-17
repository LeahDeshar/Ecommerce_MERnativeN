import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";


export async function createCategory(req,res){
    // create category api
    try {
        const { category } = req.body

        console.log(category);

        if(!category){
            return res.status(400).json({
                success: false,
                message: "Please provide a category ",
            });
        }
        await Category.create({category})
        return res.status(200).json({
            success: true,
            message:`${category} Category created `,
            // product
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in category api " + error.message,
        });
        
    }
}

export async function getAllCategory(req,res){
    try {
        const category = await Category.find({})
        return res.status(200).json({
            success: true,
            message:`Category created `,
            total: category.length,
            category
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in category api " + error.message,
        });
        
    }
}

export async function deleteCategory(req,res){
    try {
        const { id } = req.params
        const category = await Category.findById(id)
        if(!category){
            return res.status(400).json({
                success: false,
                message: "Category not found ",
            });
        }
        // find the product with this category and delete together
        const products=await Product.find({category:category._id})
        for (let index = 0; index < products.length; index++) {
            const product = products[index];
             product.category = undefined
             await products.save()
        }
        await category.deleteOne()
        return res.status(200).json({
            success: true,
            message:`Category deleted `,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in category api " + error.message,
        });
        
    }
}

export async function updateCategory(req,res){
    try {
        const category = await Category.findById(req.params.id)
        console.log(category);
        if(!category){
            return res.status(400).json({
                success: false,
                message: "Category not found ",
            });
        }
        const {updateCategory} =req.body

        console.log(updateCategory);
        const products=await Product.find({category:category._id})
        for (let index = 0; index < products.length; index++) {
            const product = products[index];
             product.category = updateCategory
             await products.save()
        }

        if(updateCategory)
        {
            category.category=updateCategory
        }
       await category.save()
        return res.status(200).json({
            success: true,
            message:`Category updated `,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in category api " + error.message,
        });
        
    }
}