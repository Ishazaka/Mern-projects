
import Product from '../models/product.model.js';

export const getProduct = async (req, res) => {

    try {
    let data =  await Product.find();
     res.status(200).json({success: true, message:data })
    } catch (error) {
      res.status(500).json({success: false, message: "Server Error"})
    }
  }


  export const createProduct = async (req, res) => {
    const product = req.body;
  
    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields" });
    }
  
    const newProduct = new Product(product);
  
    try {
      await newProduct.save();
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      console.log(`Error Message: ${error.message} `);
      res.status(500).json({ success: false, message: error.message });
    }
  
  } 


  export const updateProduct = async(req, res) => {
  
    const {id} =  req.params;
     const data = req.body
   
   try {
    await  Product.findByIdAndUpdate(id, data , {new: true} );
    res.status(201).json({success: true, message: "Successfully Updated"})
     
   } catch (error) {
     res.status(500).json({success: false, message: "Not a Valid Product"})
   }
   
   
   }


   export const deleteProduct =  async (req, res) => {
    const {id} = req.params
  
  
  try {
    let product =   await Product.findByIdAndDelete(id);
    if(product){
      res.status(200).json({success: true, message: "Product is successfully deleted"});
    }else{
      res.status(404).json({success: false, message: "Product is already deleted"});
    }
  
  } catch (error) {
    res.status(404).json({success: false, message: "No Product found"});
  }
  
  }