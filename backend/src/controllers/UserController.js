import User from "../models/User.js";

class UserController{

    async index(req,res){
        let users = await User.find({});
        return res.json(users);
    }
     async store(req,res){
        let user = await User.create(req.body);
        return res.json(user);
    }

}

export default UserController;