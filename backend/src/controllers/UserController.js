import User from "../models/User.js";

class UserController {

    async index(req, res) {
        let users = await User.find({});
        return res.json(users);
    }
    async store(req, res) {
        let image = "";
        if (req.file) {
            image = req.file.filename;
        }
        let user = await User.create({ ...req.body, image: image });
        return res.json(user);
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
        let users = await User.findByIdAndDelete(id);
        if (!users) {
            return res.status(404).json({ message: "User not found" });
        } else {
            return res.json({ message: "User deleted successfully" });
        }
    }

}

export default UserController;