class UserController{

    index(req, res){
        res.send('Get all users');
    }

    show(req, res){
        res.send('Get a user by id');
    }

    store(req, res){
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