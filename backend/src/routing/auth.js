import express from "express";
import AuthController from "../controllers/AuthController.js";
const authRoute = express.Router();
let aInstance = new AuthController();

authRoute.post("/",aInstance.login);

export default authRoute;