import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Connection {

    static async connect() {
        try {
            let dbUrl = process.env.DB_URL;
            await mongoose.connect(dbUrl);
            console.log("Database connected successfully");
        } catch (err) {
            console.error("Error connecting to the database:", err);
        }
    }

}

export default Connection;