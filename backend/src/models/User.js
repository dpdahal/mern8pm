import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

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

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);   
}

userSchema.methods.generateToken = function () {
    let expIn =process.env.JWT_EXPIRATION || '1h';
    return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, { expiresIn: expIn });
};

export default mongoose.model("User", userSchema);