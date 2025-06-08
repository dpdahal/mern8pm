import express from "express";
import userRoute from "./user.js";
import categoryRoute from "./category.js";
const webRoute = express.Router();

webRoute.get("/",(req,res)=>{
    return res.json("Welcome to the API");
});

webRoute.use("/users", userRoute);
webRoute.use("/category", categoryRoute);

export default webRoute;