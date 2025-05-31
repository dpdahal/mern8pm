class UserController{

    async index(req,res){
        return res.send("I am users controller")
    }
     async store(req,res){
        return res.send("users add")
    }

}

export default UserController;