import express from "express";
import UserController from "../controllers/UserController.js";
const userRoute = express.Router();
let uInstance = new UserController();

userRoute.get("/",uInstance.index)
userRoute.post("/",uInstance.store)

export default userRoute;