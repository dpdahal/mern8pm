import TokenVerify from './TokenVerify.js';

class AuthMiddleware{

    check(req,res,next){
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
        
        let response = TokenVerify.VerifyToken(token);
        if(!response){
            return res.json({
                status: false,
                message: "Token is not valid"})
        }

        req.user = response;
        next();

       
    }
    
}
export default AuthMiddleware;