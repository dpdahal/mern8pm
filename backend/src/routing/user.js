import express from "express";
import UserController from "../controllers/UserController.js";
import FileUploadMiddleware from "../middleware/upload.js";
const userRoute = express.Router();
let uInstance = new UserController();
let fileInstance = new FileUploadMiddleware();
const userFile = fileInstance.files_upload("users");

userRoute.get("/",uInstance.index)
userRoute.post("/",userFile.single('image'),uInstance.store)
userRoute.get("/:id",uInstance.show)
userRoute.put("/:id",userFile.single('image'),uInstance.update)
userRoute.delete("/:id",uInstance.delete)

export default userRoute;