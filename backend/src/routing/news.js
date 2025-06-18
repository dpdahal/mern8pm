import express from "express";
import NewsController from "../controllers/NewsController.js";
import FileUploadMiddleware from "../middleware/UploadMiddleware.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";
const newsRoute = express.Router();
let nInstance = new NewsController();
let fileInstance = new FileUploadMiddleware();
const nFile = fileInstance.files_upload("news");
const auth = new AuthMiddleware();
newsRoute.get("/",nInstance.index)
newsRoute.post("/",auth.check,nFile.single('image'),nInstance.store)
newsRoute.get("/:id",nInstance.show)
newsRoute.put("/:id",auth.check,nFile.single('image'),nInstance.update)
newsRoute.delete("/:id",auth.check,nInstance.delete)

export default newsRoute;