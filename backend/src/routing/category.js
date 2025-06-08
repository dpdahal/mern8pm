import express from "express";
import CategoryController from "../controllers/CategroyController.js";
const categoryRoute = express.Router();
let cInstance = new CategoryController();

categoryRoute.get("/",cInstance.index)
categoryRoute.post("/",cInstance.store)
categoryRoute.get("/:id",cInstance.show)
categoryRoute.put("/:id",cInstance.update)
categoryRoute.delete("/:id",cInstance.delete)
export default categoryRoute;