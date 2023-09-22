import Product from "../models/Product.model.js";

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product({
      ...req.body,
    });

    await newProduct.save();
    res.status(200).json("Product has been added...");
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted successfully...");
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  const {min,max} = req.query;
  try {
    const products = await Product.find({
      price: { $gte: min || 1, $lte: max || 1999 },
    }).limit(req.query.limit);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};


export const ByType = async (req,res,next)=>{
  const type = req.query.type;
  try {
    const products = await Product.find({
      productType:type
    }).limit(req.query.limit);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};