import User from "../../models/User.js";

class UserController{

   async index(req, res){
        const users = await User.find({});
        res.send(users);
    }

    show(req, res){
        res.send('Get a user by id');
    }

    async store(req, res){
        await User.create({...req.body});
        res.send('Create a user');
    }

    update(req, res){
        res.send('Update a user by id');
    }

    destroy(req, res){
        res.send('Delete a user by id');
    }
    
}

export default UserController;