import express from "express";
import UserController from "../controllers/UserController.js";
import FileUploadMiddleware from "../middleware/UploadMiddleware.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";
const userRoute = express.Router();
let uInstance = new UserController();
let fileInstance = new FileUploadMiddleware();
const userFile = fileInstance.files_upload("users");
const auth = new AuthMiddleware();
userRoute.get("/",uInstance.index)
userRoute.post("/",auth.check,userFile.single('image'),uInstance.store)
userRoute.get("/:id",uInstance.show)
userRoute.put("/:id",auth.check,userFile.single('image'),uInstance.update)
userRoute.delete("/:id",auth.check,uInstance.delete)

export default userRoute;