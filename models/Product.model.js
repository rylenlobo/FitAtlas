import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
    },
    displayimg: {
      type: [String],
    },
    brand: {
      type: String,
    },
    flavour:{
      type:[String]
    },
    category:{
      type:String,
      required:true,
    },
    price: {
      type: [Number],
      required: true,
    },
    desc:{
      type:String,
    },
    quantity:{
      type:Number,
      default:1
    },
    rating:{
      type:Number,
      default:4
    },
    weight: {
      type: [String],
    },
    color: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
