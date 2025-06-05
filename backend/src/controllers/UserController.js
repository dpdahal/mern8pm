import User from "../models/User.js";

class UserController{

    async index(req,res){
        let users = await User.find({});
        return res.json(users);
    }
     async store(req,res){
        let image ="";
        if(req.file){
            image = req.file.filename;
        }
        let user = await User.create({...req.body,image: image});
        return res.json(user);
    }

}

export default UserController;