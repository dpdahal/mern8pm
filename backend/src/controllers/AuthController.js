import User from '../models/User.js';
class AuthController{

   async login(req,res){
        let email = req.body.email;
        let password = req.body.password;
        let user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }else{
            let isMathc = await user.comparePassword(password);
            if(!isMathc){
                return res.status(401).json({message: "Invalid password"});
            }else{
                let token = user.generateToken();
                return res.status(200).json({
                    message: "Login successful",
                    token: token
                });
            }
        }
    }
}

export default AuthController;