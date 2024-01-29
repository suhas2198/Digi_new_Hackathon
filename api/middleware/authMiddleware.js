import JWT from 'jsonwebtoken'

import authModel from '../model/authModel.js'

//protected route

export const requireSignIn=async(req,res)=>{
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
          );
          req.user = decode;
          next();
        
    } catch (error) {
        console.log(error)
        
    }

}



