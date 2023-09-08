import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  ByCategory
} from "../controllers/product.controllers.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createProduct);

//UPDATE
router.put("/:id", verifyAdmin, updateProduct);
//DELETE
router.delete("/:id", verifyAdmin, deleteProduct);
//GET

router.get("/find/:id", getProduct);
//GET ALL

router.get("/", getProducts);
router.get("/ByCategory", ByCategory);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

export default router;