import express from "express";
import AuthController from "../controllers/AuthController.js";
const authRoute = express.Router();
let aInstance = new AuthController();

authRoute.post("/",aInstance.login);
authRoute.get("/verify", aInstance.tokenVerify);

export default authRoute;