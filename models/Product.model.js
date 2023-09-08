import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    desc:{
      type:String,
    },
    img: {
      type: [String],
    },
    brand: {
      type: String,
      required: true,
    },
    category:{
      type:String,
      required:true,
    },
    price: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
    },
    color: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
