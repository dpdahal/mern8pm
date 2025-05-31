import express from "express";
import userRoute from "./user.js";
const webRoute = express.Router();

webRoute.get("/",(req,res)=>{
    return res.json("Welcome to the API");
});

webRoute.use("/users", userRoute);

export default webRoute;