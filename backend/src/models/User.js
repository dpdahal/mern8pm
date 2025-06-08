import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    image: {
        type: String
    }
}, {
    versionKey: false,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.toJSON = function () {
    const uobj = this.toObject();
    if (uobj.image) {
        uobj.image = `${process.env.URL}/users/${uobj.image}`;
    } else {
        uobj.image = `${process.env.URL}/icons/user.png`;
    }
    delete uobj.password;
    return uobj;
};

export default mongoose.model("User", userSchema);