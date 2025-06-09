import express from "express";
import userRoute from "./user.js";
import categoryRoute from "./category.js";
import authRoute from "./auth.js";
const webRoute = express.Router();

webRoute.get("/",(req,res)=>{
    return res.json("Welcome to the API");
});

webRoute.use("/auth", authRoute);
webRoute.use("/users", userRoute);
webRoute.use("/category", categoryRoute);

export default webRoute;