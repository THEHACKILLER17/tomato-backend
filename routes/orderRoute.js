import express from "express";
import { placeOrder, listOrders, updateOrderStatus, userOrders } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import userAuth from "../middleware/userAuth.js";

const orderRouter = express.Router();

orderRouter.post("/place", placeOrder);
orderRouter.get("/list", adminAuth, listOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);
orderRouter.post("/userorders", userAuth, userOrders);

export default orderRouter;