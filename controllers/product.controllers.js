import Product from "../models/Product.model.js";
import stripe from "stripe";

const stripeInstance = stripe("sk_test_51NxgIVSAQCRpKHx3DVLE9IgjCtqAgODk4FaS6C5bZS4csS7ikNUpEZaFMZna4mDALySVZdiwac1VGNk0zwceu3wx0067nOydlW");

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product({
      ...req.body,
    });

    await newProduct.save();
    res.status(200).send("Product has been added");
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
    res.status(200).send("Product deleted successfully");
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
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const ByType = async (req, res, next) => {
  const type = req.query.type;
  try {
    const products = await Product.find({
      productType: type,
    }).limit(req.query.limit);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const updateAll = async (req, res, next) => {
  try {
    const updatedProducts = await Product.updateMany(
      { $setField: { quantity: 1 } },
      { new: true }
    );

    res.status(200).json(updatedProducts);
  } catch (error) {
    next(error);
  }
};

export const checkout = async (req, res, next) => {
    const products = req.body.state;
    console.log(products);
    const lineItems = products.items.map((product)=>({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/sucess",
      cancel_url: "http://localhost:5173/error",
    });

    res.json({id:session.id});
};
