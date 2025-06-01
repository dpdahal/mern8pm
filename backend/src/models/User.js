import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum:["male","female"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    image:{
        type: String
    }
});

export default mongoose.model("User", userSchema);