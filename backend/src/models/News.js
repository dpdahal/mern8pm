import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
   categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
   
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
   
}, {
    versionKey: false,
});

newsSchema.methods.toJSON = function () {
    const uobj = this.toObject();
    if (uobj.image) {
        uobj.image = `${process.env.URL}/news/${uobj.image}`;
    } else {
        uobj.image = `${process.env.URL}/icons/user.png`;
    }
    delete uobj.password;
    return uobj;
};

export default mongoose.model("News", newsSchema);