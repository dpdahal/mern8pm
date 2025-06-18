import News from "../models/News.js";
import TokenVerify from "../middleware/TokenVerify.js";

class NewsController {

    async index(req, res) {
        let news = await News.find({});
        return res.json(news);
    }
    async store(req, res) {
        let image = "";
        if (req.file) {
            image = req.file.filename;
        }
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        let response = TokenVerify.VerifyToken(token.split(" ")[1]);
        if (!response) {
            return res.status(401).json({ message: "Invalid token" });
        }
        let userId = response.id;
        if (!userId) {
            return res.status(401).json({ message: "User ID not found in token" });
        }
        let news = await News.create({ ...req.body,authorId: userId, image: image });
        return res.json(news);
    }

    async show(req, res) {
        let id = req.params.id;
        let users = await User.findById(id);
        if (!users) {
            return res.status(404).json({ message: "User not found" });
        } else {
            return res.json(users);
        }
    }

    async update(req, res) {
        let id = req.params.id;
        let user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else {
            let image = user.image;
            if (req.file) {
                image = req.file.filename;
            }
            await User.findByIdAndUpdate(id,{ ...req.body, image: image });
            return res.json({ message: "User updated successfully" });
        }
    }

    
    async delete(req, res) {
        let id = req.params.id;
        let news = await News.findByIdAndDelete(id);
        if (!news) {
            return res.status(404).json({ message: "News not found" });
        } else {
            return res.json({ message: "News deleted successfully" });
        }
    }

}

export default NewsController;