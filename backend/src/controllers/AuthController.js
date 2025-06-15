import User from '../models/User.js';
import TokenVerify from '../middleware/TokenVerify.js';
class AuthController{

   async login(req,res){
        let email = req.body.email;
        let password = req.body.password;
        let user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({field:"email",message: "User not found"});
        }else{
            let isMathc = await user.comparePassword(password);
            if(!isMathc){
                return res.status(401).json({field:"password",message: "Invalid password"});
            }else{
                let token = user.generateToken();
                return res.status(200).json({
                    message: "Login successful",
                    token: token
                });
            }
        }
    }

    async tokenVerify(req, res) {
        if(!req.headers.authorization){
            return res.json({
                status: false,
                message: "Authorization header is missing"})
        }
        let token = req.headers.authorization.split(" ")[1];
        if(!token){
            return res.json({
                status: false,
                message: "Token isnot matched"})
        }
        try {
            let getResponse = TokenVerify.VerifyToken(token);
            let id = getResponse.id;
            let user = await  User.findById(id);
            
            if(getResponse){
                return res.status(200).json({
                    status: true,
                    user:user
                });
            }else{
                return res.json({status: false});
            }
            
        } catch (error) {
            return res.status(500).json({ message: "Error verifying token", error: error.message });
        }
    }
}

export default AuthController;